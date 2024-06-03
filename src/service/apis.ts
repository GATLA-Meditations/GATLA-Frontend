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

export const login = async (data: any) => {
    try {
        const response = await gatlaAxios.post('/auth/login', data);
        return response.data.token;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
};