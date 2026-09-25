import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiLock, FiMail } from "react-icons/fi";
import { useAdminAuth } from "../context/AdminAuthContext";

export default function AdminLogin() {
    const { login } = useAdminAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            await login(email, password);
            navigate("/admin");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-navy-900 px-4">
            <div className="w-full max-w-sm">
                <div className="text-center mb-8">
                    <p className="font-display text-2xl text-white tracking-tight">
                        Naralith Studio
                    </p>
                    <p className="text-white/50 text-sm mt-1">Internal Console</p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-7 shadow-xl">
                    {error && (
                        <div className="mb-4 text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                            {error}
                        </div>
                    )}

                    <label className="block text-xs font-medium text-muted mb-1.5">Email</label>
                    <div className="relative mb-4">
                        <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={16} />
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input pl-9"
                            placeholder="you@naralith.com"
                        />
                    </div>

                    <label className="block text-xs font-medium text-muted mb-1.5">Password</label>
                    <div className="relative mb-6">
                        <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={16} />
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input pl-9"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full font-medium text-sm py-2.5 rounded-lg disabled:opacity-60"
                    >
                        {loading ? "Signing in..." : "Sign In"}
                    </button>
                </form>
            </div>
        </div>
    );
}