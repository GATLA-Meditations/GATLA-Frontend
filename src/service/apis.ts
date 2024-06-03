import axios from 'axios';

const baseURL = 'http://localhost:3001';

const config = (token: string) => ({
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

const gatlaAxios = axios.create({
    baseURL,
});

gatlaAxios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error.response.status === 401 || error.response.status === 403) {
            localStorage.clear();
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export const getVideo = async (activityId: string) => {
    try {
        const response = await gatlaAxios.get(`/activity/${activityId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching video:', error);
        throw error;
    }
};
