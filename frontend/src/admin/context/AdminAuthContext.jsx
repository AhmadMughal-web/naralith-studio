import { createContext, useContext, useState, useEffect } from "react";
import { loginRequest, getMe } from "../api/adminApi";

const AdminAuthContext = createContext(null);
const TOKEN_KEY = "naralith_admin_token";

export function AdminAuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem(TOKEN_KEY);
        if (!token) {
            setLoading(false);
            return;
        }
        getMe()
            .then(setUser)
            .catch(() => localStorage.removeItem(TOKEN_KEY))
            .finally(() => setLoading(false));
    }, []);

    const login = async (email, password) => {
        const data = await loginRequest(email, password);
        localStorage.setItem(TOKEN_KEY, data.token);
        setUser({ _id: data._id, name: data.name, email: data.email, role: data.role });
        return data;
    };

    const logout = () => {
        localStorage.removeItem(TOKEN_KEY);
        setUser(null);
    };

    return (
        <AdminAuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AdminAuthContext.Provider>
    );
}

export const useAdminAuth = () => useContext(AdminAuthContext);