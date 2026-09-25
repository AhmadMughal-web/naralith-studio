import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FiArrowLeft, FiEdit2, FiTrash2, FiPlus, FiCheckCircle, FiClock } from "react-icons/fi";
import {
  getProject,
  deleteProject,
  addMilestone,
  updateMilestone,
  deleteMilestone,
  addPayment,
  updatePayment,
  deletePayment,
} from "../api/adminApi";
import { useAdminAuth } from "../context/AdminAuthContext";
import ProjectFormModal from "../components/ProjectFormModal";

const STATUS_STYLES = {
  Pending: "bg-amber-50 text-amber-700",
  "In Progress": "bg-orange-50 text-orange-600",
  Review: "bg-blue-50 text-blue-700",
  Completed: "bg-emerald-50 text-emerald-700",
  "On Hold": "bg-slate-100 text-slate-600",
  Cancelled: "bg-red-50 text-red-600",
};

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAdminAuth();
  const [project, setProject] = useState(null);
  const [editModal, setEditModal] = useState(false);
  const [error, setError] = useState("");

  const load = () => getProject(id).then(setProject).catch((e) => setError(e.message));

  useEffect(load, [id]);

  if (error) return <p className="text-red-600 text-sm">{error}</p>;
  if (!project) return <p className="text-muted text-sm">Loading...</p>;

  const canModify = user.role === "admin" || project.createdBy?._id === user._id;

  const handleDeleteProject = async () => {
    if (!confirm("Delete this project permanently?")) return;
    await deleteProject(id);
    navigate("/admin/projects");
  };

  return (
    <div>
      <Link
        to="/admin/projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-navy-900 mb-4"
      >
        <FiArrowLeft size={14} /> Back to Projects
      </Link>

      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl text-navy-900">{project.clientName}</h1>
          <p className="text-sm text-muted mt-1">
            {project.serviceType} · {project.tier} tier
          </p>
        </div>
        {canModify && (
          <div className="flex gap-2">
            <button
              onClick={() => setEditModal(true)}
              className="flex items-center gap-1.5 text-sm px-3 py-2 rounded-lg border border-hairline text-navy-900 hover:bg-black/5"
            >
              <FiEdit2 size={14} /> Edit
            </button>
            <button
              onClick={handleDeleteProject}
              className="flex items-center gap-1.5 text-sm px-3 py-2 rounded-lg border border-red-100 text-red-600 hover:bg-red-50"
            >
              <FiTrash2 size={14} /> Delete
            </button>
          </div>
        )}
      </div>

      {/* Overview card */}
      <div className="bg-white rounded-xl border border-hairline shadow-sm p-6 mb-6 grid grid-cols-2 md:grid-cols-4 gap-5">
        <Info label="Status">
          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${STATUS_STYLES[project.status]}`}>
            {project.status}
          </span>
        </Info>
        <Info label="Total Amount">Rs {project.totalAmount.toLocaleString()}</Info>
        <Info label="Start Date">
          {project.startDate ? new Date(project.startDate).toLocaleDateString() : "—"}
        </Info>
        <Info label="Deadline">
          {project.deadline ? new Date(project.deadline).toLocaleDateString() : "—"}
        </Info>
        <Info label="Client Email">{project.clientEmail || "—"}</Info>
        <Info label="Client Phone">{project.clientPhone || "—"}</Info>
        <Info label="Added By">{project.createdBy?.name || "—"}</Info>
        {project.notes && (
          <div className="col-span-2 md:col-span-4">
            <p className="text-xs text-muted mb-1">Notes</p>
            <p className="text-sm text-body">{project.notes}</p>
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <MilestonesPanel project={project} canModify={canModify} onChange={load} />
        <PaymentsPanel project={project} canModify={canModify} onChange={load} />
      </div>

      {editModal && (
        <ProjectFormModal
          project={project}
          onClose={() => setEditModal(false)}
          onSaved={() => {
            setEditModal(false);
            load();
          }}
        />
      )}
    </div>
  );
}

function Info({ label, children }) {
  return (
    <div>
      <p className="text-xs text-muted mb-1">{label}</p>
      <p className="text-sm text-navy-900 font-medium">{children}</p>
    </div>
  );
}

// ---------- Milestones ----------
function MilestonesPanel({ project, canModify, onChange }) {
  const [adding, setAdding] = useState(false);
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!title) return;
    await addMilestone(project._id, { title, dueDate: dueDate || undefined });
    setTitle("");
    setDueDate("");
    setAdding(false);
    onChange();
  };

  const toggleStatus = async (m) => {
    if (!canModify) return;
    const next = m.status === "Completed" ? "Pending" : "Completed";
    await updateMilestone(project._id, m._id, { status: next });
    onChange();
  };

  const remove = async (m) => {
    if (!canModify) return;
    if (!confirm("Remove this milestone?")) return;
    await deleteMilestone(project._id, m._id);
    onChange();
  };

  return (
    <div className="bg-white rounded-xl border border-hairline shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg text-navy-900">Milestones</h2>
        <button onClick={() => setAdding((v) => !v)} className="text-orange-500 hover:text-orange-600">
          <FiPlus size={18} />
        </button>
      </div>

      {adding && (
        <form onSubmit={handleAdd} className="flex gap-2 mb-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Milestone title"
            className="input flex-1"
            required
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="input w-auto"
          />
          <button type="submit" className="btn-primary px-3 py-2 rounded-lg text-sm">
            Add
          </button>
        </form>
      )}

      {project.milestones.length === 0 ? (
        <p className="text-sm text-muted">No milestones yet.</p>
      ) : (
        <ul className="space-y-2.5">
          {project.milestones.map((m) => (
            <li key={m._id} className="flex items-center justify-between gap-3 text-sm py-1.5">
              <button
                onClick={() => toggleStatus(m)}
                disabled={!canModify}
                className="flex items-center gap-2.5 text-left flex-1 disabled:cursor-default"
              >
                {m.status === "Completed" ? (
                  <FiCheckCircle className="text-emerald-600 shrink-0" size={16} />
                ) : (
                  <FiClock className="text-muted shrink-0" size={16} />
                )}
                <span className={m.status === "Completed" ? "line-through text-muted" : "text-navy-900"}>
                  {m.title}
                </span>
              </button>
              <div className="flex items-center gap-2 shrink-0">
                {m.dueDate && (
                  <span className="text-xs text-muted">{new Date(m.dueDate).toLocaleDateString()}</span>
                )}
                {canModify && (
                  <button onClick={() => remove(m)} className="text-muted hover:text-red-600">
                    <FiTrash2 size={14} />
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ---------- Payments ----------
function PaymentsPanel({ project, canModify, onChange }) {
  const [adding, setAdding] = useState(false);
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Advance");

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!amount) return;
    await addPayment(project._id, { amount: Number(amount), type });
    setAmount("");
    setAdding(false);
    onChange();
  };

  const toggleStatus = async (p) => {
    if (!canModify) return;
    const next = p.status === "Received" ? "Pending" : "Received";
    await updatePayment(project._id, p._id, { status: next });
    onChange();
  };

  const remove = async (p) => {
    if (!canModify) return;
    if (!confirm("Remove this payment record?")) return;
    await deletePayment(project._id, p._id);
    onChange();
  };

  return (
    <div className="bg-white rounded-xl border border-hairline shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg text-navy-900">Payments</h2>
        <button onClick={() => setAdding((v) => !v)} className="text-orange-500 hover:text-orange-600">
          <FiPlus size={18} />
        </button>
      </div>

      {adding && (
        <form onSubmit={handleAdd} className="flex gap-2 mb-4">
          <input
            type="number"
            min="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            className="input flex-1"
            required
          />
          <select value={type} onChange={(e) => setType(e.target.value)} className="input w-auto">
            <option>Advance</option>
            <option>Milestone</option>
            <option>Final</option>
          </select>
          <button type="submit" className="btn-primary px-3 py-2 rounded-lg text-sm">
            Add
          </button>
        </form>
      )}

      {project.payments.length === 0 ? (
        <p className="text-sm text-muted">No payments recorded.</p>
      ) : (
        <ul className="space-y-2.5">
          {project.payments.map((p) => (
            <li key={p._id} className="flex items-center justify-between gap-3 text-sm py-1.5">
              <button
                onClick={() => toggleStatus(p)}
                disabled={!canModify}
                className="flex items-center gap-2.5 text-left flex-1 disabled:cursor-default"
              >
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    p.status === "Received" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                  }`}
                >
                  {p.status}
                </span>
                <span className="text-navy-900 font-medium">Rs {p.amount.toLocaleString()}</span>
                <span className="text-muted text-xs">{p.type}</span>
              </button>
              {canModify && (
                <button onClick={() => remove(p)} className="text-muted hover:text-red-600 shrink-0">
                  <FiTrash2 size={14} />
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}