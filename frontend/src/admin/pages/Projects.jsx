import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiSearch } from "react-icons/fi";
import { getProjects } from "../api/adminApi";
import ProjectFormModal from "../components/ProjectFormModal";

const STATUS_STYLES = {
  Pending: "bg-amber-50 text-amber-700",
  "In Progress": "bg-orange-50 text-orange-600",
  Review: "bg-blue-50 text-blue-700",
  Completed: "bg-emerald-50 text-emerald-700",
  "On Hold": "bg-slate-100 text-slate-600",
  Cancelled: "bg-red-50 text-red-600",
};

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);

  const load = () => {
    setLoading(true);
    getProjects()
      .then(setProjects)
      .finally(() => setLoading(false));
  };

  useEffect(load, []);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesSearch = p.clientName.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "All" || p.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [projects, search, statusFilter]);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl text-navy-900 mb-1">Projects</h1>
          <p className="text-sm text-muted">
            {projects.length} total project{projects.length !== 1 && "s"}
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="btn-primary flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-lg"
        >
          <FiPlus size={16} />
          New Project
        </button>
      </div>

      <div className="flex flex-wrap gap-3 mb-5">
        <div className="relative flex-1 min-w-[200px]">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={15} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search client..."
            className="input pl-9"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="input w-auto"
        >
          {["All", ...Object.keys(STATUS_STYLES)].map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-white rounded-xl border border-hairline shadow-sm overflow-hidden">
        {loading ? (
          <p className="text-sm text-muted px-6 py-8 text-center">Loading...</p>
        ) : filtered.length === 0 ? (
          <p className="text-sm text-muted px-6 py-8 text-center">No projects found.</p>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-hairline text-left text-xs text-muted uppercase tracking-wide">
                <th className="px-6 py-3 font-medium">Client</th>
                <th className="px-6 py-3 font-medium">Service</th>
                <th className="px-6 py-3 font-medium">Tier</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Deadline</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr
                  key={p._id}
                  className="border-b border-hairline last:border-0 hover:bg-[#f6f7f9] transition-colors"
                >
                  <td className="px-6 py-3.5">
                    <Link
                      to={`/admin/projects/${p._id}`}
                      className="text-navy-900 font-medium hover:text-orange-500"
                    >
                      {p.clientName}
                    </Link>
                  </td>
                  <td className="px-6 py-3.5 text-body">{p.serviceType}</td>
                  <td className="px-6 py-3.5 text-body">{p.tier}</td>
                  <td className="px-6 py-3.5">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${STATUS_STYLES[p.status]}`}>
                      {p.status}
                    </span>
                  </td>
                  <td className="px-6 py-3.5 text-body">
                    {p.deadline ? new Date(p.deadline).toLocaleDateString() : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {showModal && (
        <ProjectFormModal
          onClose={() => setShowModal(false)}
          onSaved={() => {
            setShowModal(false);
            load();
          }}
        />
      )}
    </div>
  );
}