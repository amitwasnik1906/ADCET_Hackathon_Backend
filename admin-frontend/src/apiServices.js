import axios from "axios"

const domainUrl = import.meta.env.VITE_APP_BACKEND_DOMAIN_URL

export const loginAdmin = async (formData) => {
    try {
        const { data } = await axios.post(`${domainUrl}/api/v1/auth/admin/login`, formData, { withCredentials: true })
        localStorage.setItem("refreshToken", data?.refreshToken)
        return data
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

export const logoutAdmin = async () => {
    try {
        await axios.get(`${domainUrl}/api/v1/auth/admin/logout`, {
            withCredentials: true
        });
        localStorage.removeItem("refreshToken")
    } catch (error) {
        console.error('Error during logout:', error);
        throw error;
    }
};

export const getAdminRefreshToken = () => {
    const refreshToken = localStorage.getItem("refreshToken");
    return refreshToken;
};


