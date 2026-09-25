import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FiGrid, FiFolder, FiUsers, FiLogOut } from "react-icons/fi";
import { useAdminAuth } from "../context/AdminAuthContext";

const navItems = [
    { to: "/admin", label: "Dashboard", icon: FiGrid, end: true },
    { to: "/admin/projects", label: "Projects", icon: FiFolder },
    { to: "/admin/team", label: "Team", icon: FiUsers, adminOnly: true },
];

export default function AdminLayout() {
    const { user, logout } = useAdminAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/admin/login");
    };

    return (
        <div className="min-h-screen flex bg-[#f6f7f9]">
            {/* Sidebar */}
            <aside className="w-64 shrink-0 bg-navy-900 text-white flex flex-col">
                <div className="px-6 py-6 border-b border-white/10">
                    <p className="font-display text-lg tracking-tight">Naralith Studio</p>
                    <p className="text-xs text-white/50 mt-0.5">Internal Console</p>
                </div>

                <nav className="flex-1 px-3 py-5 space-y-1">
                    {navItems
                        .filter((item) => !item.adminOnly || user?.role === "admin")
                        .map(({ to, label, icon: Icon, end }) => (
                            <NavLink
                                key={to}
                                to={to}
                                end={end}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${isActive
                                        ? "bg-orange-500 text-white"
                                        : "text-white/70 hover:bg-white/10 hover:text-white"
                                    }`
                                }
                            >
                                <Icon size={17} />
                                {label}
                            </NavLink>
                        ))}
                </nav>

                <div className="px-4 py-5 border-t border-white/10">
                    <div className="mb-3 px-2">
                        <p className="text-sm font-medium truncate">{user?.name}</p>
                        <p className="text-xs text-white/50 capitalize">{user?.role}</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                    >
                        <FiLogOut size={16} />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 min-w-0">
                <div className="max-w-6xl mx-auto px-8 py-8">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}