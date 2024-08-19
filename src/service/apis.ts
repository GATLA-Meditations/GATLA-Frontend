import axios from 'axios';
import { store } from 'next/dist/build/output/store';
import { getToken } from '@/service/store';
import {
    QuestionnaireAnswers,
    QuestionProps,
} from '@/pages/questionnaire/[id]';

const baseURL = 'http://localhost:3001';

const config = (token: string) => ({
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

const gatlaAxios = axios.create({
    baseURL,
});

gatlaAxios.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

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
        const response = await gatlaAxios.get('/user/actual-module');
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
        const response = await gatlaAxios.get(`/activity/${id}`);
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
        const response = await gatlaAxios.put('/user/changepass', data);
        return response.status;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const submitQuestionnaire = async (answers: QuestionnaireAnswers) => {
    try {
        await gatlaAxios.post('/submission', answers);
    } catch (error) {
        console.log(error);
    }
};

export const getUserProfile = async () => {
    try {
        const response = await gatlaAxios.get('/user/profile');
        return response.data;
    } catch (error) {}
};

export const getUserStats = async () => {
    try {
        const response = await gatlaAxios.get('/user/homestats');
        return response.data;
    } catch (error) {}
};

export const getUserItems = async () => {
    try {
        const response = await gatlaAxios.get('/user/shop-items');
        return response.data.items;
    } catch (error) {}
};

export const updateUserAvatar = async (avatar: string) => {
    try {
        const response = await gatlaAxios.put('/user/image', {url: avatar});
        return response;
    } catch (error) {}
};

export const chooseBackground = async (background: string) => {
    try {
        await gatlaAxios.put('/user/background', { background });
    } catch (error) {
        console.log(error);
    }
};
