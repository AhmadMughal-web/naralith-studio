import { useEffect, useState } from "react";
import { FiPlus, FiTrash2, FiX } from "react-icons/fi";
import { getMembers, createMember, deleteMember } from "../api/adminApi";
import { useAdminAuth } from "../context/AdminAuthContext";

export default function Team() {
  const { user } = useAdminAuth();
  const [members, setMembers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    getMembers()
      .then(setMembers)
      .finally(() => setLoading(false));
  };

  useEffect(load, []);

  const handleDelete = async (id) => {
    if (!confirm("Remove this team member?")) return;
    await deleteMember(id);
    load();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl text-navy-900 mb-1">Team</h1>
          <p className="text-sm text-muted">Manage console access for your team.</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="btn-primary flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-lg"
        >
          <FiPlus size={16} />
          Add Member
        </button>
      </div>

      <div className="bg-white rounded-xl border border-hairline shadow-sm overflow-hidden">
        {loading ? (
          <p className="text-sm text-muted px-6 py-8 text-center">Loading...</p>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-hairline text-left text-xs text-muted uppercase tracking-wide">
                <th className="px-6 py-3 font-medium">Name</th>
                <th className="px-6 py-3 font-medium">Email</th>
                <th className="px-6 py-3 font-medium">Role</th>
                <th className="px-6 py-3 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {members.map((m) => (
                <tr key={m._id} className="border-b border-hairline last:border-0">
                  <td className="px-6 py-3.5 text-navy-900 font-medium">{m.name}</td>
                  <td className="px-6 py-3.5 text-body">{m.email}</td>
                  <td className="px-6 py-3.5">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-navy-900/5 text-navy-900 capitalize">
                      {m.role}
                    </span>
                  </td>
                  <td className="px-6 py-3.5 text-right">
                    {m._id !== user._id && (
                      <button onClick={() => handleDelete(m._id)} className="text-muted hover:text-red-600">
                        <FiTrash2 size={15} />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {showModal && (
        <AddMemberModal
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

function AddMemberModal({ onClose, onSaved }) {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "member" });
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSaving(true);
    try {
      await createMember(form);
      onSaved();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl w-full max-w-sm shadow-xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-hairline">
          <h2 className="text-lg text-navy-900">Add Team Member</h2>
          <button onClick={onClose} className="text-muted hover:text-navy-900">
            <FiX size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
          {error && (
            <div className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
              {error}
            </div>
          )}

          <label className="block">
            <span className="block text-xs font-medium text-muted mb-1.5">Name</span>
            <input
              required
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className="input"
            />
          </label>

          <label className="block">
            <span className="block text-xs font-medium text-muted mb-1.5">Email</span>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="input"
            />
          </label>

          <label className="block">
            <span className="block text-xs font-medium text-muted mb-1.5">Temporary Password</span>
            <input
              type="text"
              required
              minLength={6}
              value={form.password}
              onChange={(e) => update("password", e.target.value)}
              className="input"
            />
          </label>

          <label className="block">
            <span className="block text-xs font-medium text-muted mb-1.5">Role</span>
            <select value={form.role} onChange={(e) => update("role", e.target.value)} className="input">
              <option value="member">Member</option>
              <option value="admin">Admin</option>
            </select>
          </label>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-sm text-body hover:bg-black/5"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="btn-primary px-4 py-2 rounded-lg text-sm font-medium disabled:opacity-60"
            >
              {saving ? "Adding..." : "Add Member"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}