import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    FiFolder,
    FiClock,
    FiCheckCircle,
    FiTrendingUp,
    FiCalendar,
    FiDollarSign,
} from "react-icons/fi";
import { getDashboardStats } from "../api/adminApi";

const statCards = [
    { key: "totalProjects", label: "Total Projects", icon: FiFolder, color: "text-navy-900", bg: "bg-navy-900/8" },
    { key: "pendingProjects", label: "Pending", icon: FiClock, color: "text-amber-600", bg: "bg-amber-50" },
    { key: "inProgress", label: "In Progress", icon: FiTrendingUp, color: "text-orange-600", bg: "bg-orange-50" },
    { key: "completed", label: "Completed", icon: FiCheckCircle, color: "text-emerald-600", bg: "bg-emerald-50" },
];

export default function Dashboard() {
    const [stats, setStats] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        getDashboardStats().then(setStats).catch((e) => setError(e.message));
    }, []);

    if (error) return <p className="text-red-600 text-sm">{error}</p>;
    if (!stats) return <p className="text-muted text-sm">Loading...</p>;

    return (
        <div>
            <h1 className="text-2xl text-navy-900 mb-1">Dashboard</h1>
            <p className="text-sm text-muted mb-7">
                Studio-wide overview of projects and payments.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {statCards.map(({ key, label, icon: Icon, color, bg }) => (
                    <div key={key} className="bg-white rounded-xl border border-hairline p-5 shadow-sm">
                        <div className={`h-9 w-9 rounded-lg flex items-center justify-center mb-3 ${bg} ${color}`}>
                            <Icon size={17} />
                        </div>
                        <p className="text-2xl font-semibold text-navy-900">{stats[key]}</p>
                        <p className="text-xs text-muted mt-0.5">{label}</p>
                    </div>
                ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Payments summary */}
                <div className="bg-white rounded-xl border border-hairline p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                        <FiDollarSign className="text-orange-500" size={18} />
                        <h2 className="text-lg text-navy-900">Payments</h2>
                    </div>
                    <div className="flex items-end justify-between mb-3">
                        <span className="text-sm text-muted">Received</span>
                        <span className="text-xl font-semibold text-emerald-600">
                            Rs {stats.totalReceived.toLocaleString()}
                        </span>
                    </div>
                    <div className="flex items-end justify-between">
                        <span className="text-sm text-muted">Pending</span>
                        <span className="text-xl font-semibold text-amber-600">
                            Rs {stats.totalPending.toLocaleString()}
                        </span>
                    </div>
                </div>

                {/* Upcoming deadlines */}
                <div className="bg-white rounded-xl border border-hairline p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                        <FiCalendar className="text-orange-500" size={18} />
                        <h2 className="text-lg text-navy-900">Upcoming Deadlines</h2>
                    </div>
                    {stats.upcomingDeadlines.length === 0 ? (
                        <p className="text-sm text-muted/70">No upcoming deadlines.</p>
                    ) : (
                        <ul className="space-y-3">
                            {stats.upcomingDeadlines.map((p) => (
                                <li key={p._id}>
                                    <Link
                                        to={`/admin/projects/${p._id}`}
                                        className="flex items-center justify-between text-sm hover:text-orange-500 transition-colors"
                                    >
                                        <span className="text-navy-900">{p.clientName}</span>
                                        <span className="text-muted">
                                            {new Date(p.deadline).toLocaleDateString()}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}