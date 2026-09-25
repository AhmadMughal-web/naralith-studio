import { useState } from "react";
import { FiX } from "react-icons/fi";
import { createProject, updateProject } from "../api/adminApi";

const SERVICES = [
    "AI Chatbot",
    "Web Development",
    "SEO/Digital Growth",
    "UI/UX Design",
    "Graphic Design",
];
const TIERS = ["Basic", "Standard", "Premium"];
const STATUSES = ["Pending", "In Progress", "Review", "Completed", "On Hold", "Cancelled"];

const toDateInput = (d) => (d ? new Date(d).toISOString().slice(0, 10) : "");

export default function ProjectFormModal({ project, onClose, onSaved }) {
    const isEdit = Boolean(project);
    const [form, setForm] = useState({
        clientName: project?.clientName || "",
        clientEmail: project?.clientEmail || "",
        clientPhone: project?.clientPhone || "",
        serviceType: project?.serviceType || SERVICES[0],
        tier: project?.tier || TIERS[0],
        status: project?.status || STATUSES[0],
        totalAmount: project?.totalAmount || 0,
        startDate: toDateInput(project?.startDate) || toDateInput(new Date()),
        deadline: toDateInput(project?.deadline),
        notes: project?.notes || "",
    });
    const [error, setError] = useState("");
    const [saving, setSaving] = useState(false);

    const update = (key, value) => setForm((f) => ({ ...f, [key]: value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSaving(true);
        try {
            const saved = isEdit
                ? await updateProject(project._id, form)
                : await createProject(form);
            onSaved(saved);
        } catch (err) {
            setError(err.message);
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-xl">
                <div className="flex items-center justify-between px-6 py-4 border-b border-hairline">
                    <h2 className="text-lg text-navy-900">{isEdit ? "Edit Project" : "New Project"}</h2>
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

                    <div className="grid grid-cols-2 gap-3">
                        <Field label="Client Name" required>
                            <input
                                required
                                value={form.clientName}
                                onChange={(e) => update("clientName", e.target.value)}
                                className="input"
                            />
                        </Field>
                        <Field label="Client Phone">
                            <input
                                value={form.clientPhone}
                                onChange={(e) => update("clientPhone", e.target.value)}
                                className="input"
                            />
                        </Field>
                    </div>

                    <Field label="Client Email">
                        <input
                            type="email"
                            value={form.clientEmail}
                            onChange={(e) => update("clientEmail", e.target.value)}
                            className="input"
                        />
                    </Field>

                    <div className="grid grid-cols-2 gap-3">
                        <Field label="Service">
                            <select
                                value={form.serviceType}
                                onChange={(e) => update("serviceType", e.target.value)}
                                className="input"
                            >
                                {SERVICES.map((s) => (
                                    <option key={s} value={s}>
                                        {s}
                                    </option>
                                ))}
                            </select>
                        </Field>
                        <Field label="Tier">
                            <select
                                value={form.tier}
                                onChange={(e) => update("tier", e.target.value)}
                                className="input"
                            >
                                {TIERS.map((t) => (
                                    <option key={t} value={t}>
                                        {t}
                                    </option>
                                ))}
                            </select>
                        </Field>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <Field label="Status">
                            <select
                                value={form.status}
                                onChange={(e) => update("status", e.target.value)}
                                className="input"
                            >
                                {STATUSES.map((s) => (
                                    <option key={s} value={s}>
                                        {s}
                                    </option>
                                ))}
                            </select>
                        </Field>
                        <Field label="Total Amount (Rs)">
                            <input
                                type="number"
                                min="0"
                                value={form.totalAmount}
                                onChange={(e) => update("totalAmount", Number(e.target.value))}
                                className="input"
                            />
                        </Field>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <Field label="Start Date">
                            <input
                                type="date"
                                value={form.startDate}
                                onChange={(e) => update("startDate", e.target.value)}
                                className="input"
                            />
                        </Field>
                        <Field label="Deadline">
                            <input
                                type="date"
                                value={form.deadline}
                                onChange={(e) => update("deadline", e.target.value)}
                                className="input"
                            />
                        </Field>
                    </div>

                    <Field label="Notes">
                        <textarea
                            rows={3}
                            value={form.notes}
                            onChange={(e) => update("notes", e.target.value)}
                            className="input resize-none"
                        />
                    </Field>

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
                            {saving ? "Saving..." : isEdit ? "Save Changes" : "Create Project"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

function Field({ label, required, children }) {
    return (
        <label className="block">
            <span className="block text-xs font-medium text-muted mb-1.5">
                {label} {required && <span className="text-orange-500">*</span>}
            </span>
            {children}
        </label>
    );
}