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

export const getActualModule = async () => {
    try {
        const response = await gatlaAxios.get('/user/actual-module', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getQuestionnarieById = async (id: string) => {
    try {
        const response = await gatlaAxios.get(`questionnaire/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getVideo = async (activityId: string) => {
    try {
        const response = await gatlaAxios.get(`/activity/${activityId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching video:', error);
        throw error;
    }
};

export const getModuleById = async (id: string) => {
    try {
        // const token = localStorage.getItem('token')!!;
        const response = await gatlaAxios.get(`/module/${id}`);
        return response.data;
    } catch (error) {
        console.error('Coudnt find module');
        throw error;
    }
};

export const getActivityById = async (id: string) => {
    try {
        const token = localStorage.getItem('token')!!;
        const response = await gatlaAxios.get(`/activity/${id}`, config(token));
        return response.data;
    } catch (error) {
        console.error('Coudnt find module');
        throw error;
    }
};

export const login = async (data: any) => {
    try {
        const response = await gatlaAxios.post('/auth/login', data);
        return response.data.token;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const changePassword = async (data: any) => {
    try {
        const response = await gatlaAxios.put('/user/changepass', data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.status;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
