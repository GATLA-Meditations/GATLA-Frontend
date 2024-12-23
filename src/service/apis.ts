import axios from 'axios';
import {
    QuestionnaireAnswers,
    QuestionProps,
} from '@/pages/questionnaire/[id]';
import {Notification, FriendAchievement} from '@/util/types';

const baseURL =
    process.env.NEXT_PUBLIC_BASE_URL || 'https://api.renacentia.org';

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

export const sendVideoTime = async (activityId: string, time: number) => {
    try {
        await gatlaAxios.put(`/user/view-time/${activityId}/${time}`);
    } catch (error) {
        console.error('Error sending video time:', error);
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
        const response = await gatlaAxios.put('/user/image', { url: avatar });
        return response;
    } catch (error) {}
};

export const chooseBackground = async (background: string) => {
    try {
        await gatlaAxios.put('/user/background', { url: background });
    } catch (error) {
        console.log(error);
    }
};

export const getShopItems = async () => {
    try {
        const response = await gatlaAxios.get('/shop/all-items-user');
        const items = response.data.items;
        return items.map((item: any) => ({
            isLocked: !item.owns,
            id: item.itemId,
            type: item.type,
            previewPicture: item.content_url,
            price: item.price,
            name: item.name,
        }));
    } catch (error) {
        console.log(error);
    }
};

export const buyItem = async (id: string) => {
    try {
        await gatlaAxios.put(`/shop/buy-item/${id}`);
    } catch (error) {
        console.log(error);
    }
};

export const getProgressAndUnlocks = async () => {
    try {
        const response = await gatlaAxios.get('/user/personalization-tokens');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getNotificationSettings = async () => {
    try {
        const response = await gatlaAxios.get('/notification/settings');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const updateNotificationSettings = async (settings: any) => {
    try {
        await gatlaAxios.put('/notification/settings', settings);
    } catch (error) {
        console.log(error);
    }
};

export const getUserNotifications = async (page: string, pageSize: string): Promise<Notification[]> => {
    try {
        const response = await gatlaAxios.get(
            `user/notifications?page=${page}&pageSize=${pageSize}`
        );
        return response.data.data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const saveUserNotificationToken = async (data: any) => {
    try {
        const response = await gatlaAxios.post('/notification/token', data);
    } catch (error) {
        console.log(error);
    }
};

export const getAfterModuleQuestions = async () => {
    try {
        const response = await gatlaAxios.get('/module-question/questions');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const postAfterModuleQuestions = async (data: any) => {
    try {
        const response = await gatlaAxios.post(
            '/module-question/answers',
            data
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const checkForAfterModuleQuestions = async () => {
    try {
        const response = await gatlaAxios.get('/module-question/isTime');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getFriendsAchievements = async (): Promise<FriendAchievement[]> => {
    try{
        const response = await gatlaAxios.get('/friends/notifications');
        return response.data;
    }catch (error){
        console.log(error);
        return [];
    }
};

export const congratulateFriend = async (friendId:string, message: string) => {
    try{
        const response = await gatlaAxios.post(`/friends/congratulate-friend/${friendId}`, {message});
        return response.data;
    }
    catch (error){
        console.log(error);
    }
    
};
