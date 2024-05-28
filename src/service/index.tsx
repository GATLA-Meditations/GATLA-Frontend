import axios from 'axios';

const baseURL = process.env.SERVER_URL || 'http://localhost:3001';

const token = localStorage.getItem('token');

const config = (token: string | null) => ({
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

const server = axios.create({
    baseURL,
});

export const getTreatment = async (id: string) => {
    try {
        const response = await axios.get(`/treatment/${id}`, config(token));
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getModules = async (id: string) => {
    try {
        const response = await axios.get(`/module/${id}`, config(token));
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
