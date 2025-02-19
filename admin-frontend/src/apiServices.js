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


// Bus related api endpoint 

export const getAllBus = async () => {
    try {
        const { data } = await axios.get(`${domainUrl}/api/v1/user/buses`);
        return data;
    } catch (error) {
        console.error('Error fetching all buses:', error);
        throw error;
    }
}

export const getBusDetails = async (id) => {
    try {
        const { data } = await axios.get(`${domainUrl}/api/v1/user/bus/${id}`);
        return data;
    } catch (error) {
        console.error('Error fetching bus details:', error);
        throw error;
    }
}

export const createBus = async (busData) => {
    try {
        const { data } = await axios.post(`${domainUrl}/api/v1/admin/bus`, busData, { withCredentials: true });
        return data;
    } catch (error) {
        console.error('Error during bus creation:', error);
        throw error;
    }
};

export const updateBus = async (id, busData) => {
    try {
        const { data } = await axios.put(`${domainUrl}/api/v1/admin/bus/${id}`, busData, { withCredentials: true });
        return data;
    } catch (error) {
        console.error('Error during bus update:', error);
        throw error;
    }
};

export const deleteBus = async (id) => {
    try {
        await axios.delete(`${domainUrl}/api/v1/admin/bus/${id}`, { withCredentials: true });
    } catch (error) {
        console.error('Error during bus deletion:', error);
        throw error;
    }
};


// Route related api endpoint 

export const getRouteDetails = async (routeId) => {
    try {
        const { data } = await axios.get(`${domainUrl}/api/v1/user/route/${routeId}`);
        return data;
    } catch (error) {
        console.error('Error fetching route details:', error);
        throw error;
    }
}

export const createRoute = async (routeData) => {
    try {
        const { data } = await axios.post(`${domainUrl}/api/v1/admin/route`, routeData, { withCredentials: true });
        return data;
    } catch (error) {
        console.error('Error during route creation:', error);
        throw error;
    }
};

export const updateRoute = async (id, routeData) => {
    try {
        const { data } = await axios.put(`${domainUrl}/api/v1/admin/route/${id}`, routeData, { withCredentials: true });
        return data;
    } catch (error) {
        console.error('Error during route update:', error);
        throw error;
    }
};

export const deleteRoute = async (id) => {
    try {
        await axios.delete(`${domainUrl}/api/v1/admin/route/${id}`, { withCredentials: true });
    } catch (error) {
        console.error('Error during route deletion:', error);
        throw error;
    }
}

