const BASE_URL = (import.meta.env.VITE_API_URL || "") + "/api";

async function request(endpoint, options = {}) {
    const token = localStorage.getItem("naralith_admin_token");

    const res = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...options.headers,
        },
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
    }
    return data;
}

// ---- Auth ----
export const loginRequest = (email, password) =>
    request("/admin/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
    });

export const getMe = () => request("/admin/auth/me");

export const getMembers = () => request("/admin/auth/members");

export const createMember = (payload) =>
    request("/admin/auth/members", {
        method: "POST",
        body: JSON.stringify(payload),
    });

export const deleteMember = (id) =>
    request(`/admin/auth/members/${id}`, { method: "DELETE" });

// ---- Projects ----
export const getProjects = () => request("/admin/projects");

export const getProject = (id) => request(`/admin/projects/${id}`);

export const createProject = (payload) =>
    request("/admin/projects", {
        method: "POST",
        body: JSON.stringify(payload),
    });

export const updateProject = (id, payload) =>
    request(`/admin/projects/${id}`, {
        method: "PUT",
        body: JSON.stringify(payload),
    });

export const deleteProject = (id) =>
    request(`/admin/projects/${id}`, { method: "DELETE" });

export const getDashboardStats = () => request("/admin/projects/stats/summary");

// ---- Milestones ----
export const addMilestone = (projectId, payload) =>
    request(`/admin/projects/${projectId}/milestones`, {
        method: "POST",
        body: JSON.stringify(payload),
    });

export const updateMilestone = (projectId, milestoneId, payload) =>
    request(`/admin/projects/${projectId}/milestones/${milestoneId}`, {
        method: "PUT",
        body: JSON.stringify(payload),
    });

export const deleteMilestone = (projectId, milestoneId) =>
    request(`/admin/projects/${projectId}/milestones/${milestoneId}`, {
        method: "DELETE",
    });

// ---- Payments ----
export const addPayment = (projectId, payload) =>
    request(`/admin/projects/${projectId}/payments`, {
        method: "POST",
        body: JSON.stringify(payload),
    });

export const updatePayment = (projectId, paymentId, payload) =>
    request(`/admin/projects/${projectId}/payments/${paymentId}`, {
        method: "PUT",
        body: JSON.stringify(payload),
    });

export const deletePayment = (projectId, paymentId) =>
    request(`/admin/projects/${projectId}/payments/${paymentId}`, {
        method: "DELETE",
    });