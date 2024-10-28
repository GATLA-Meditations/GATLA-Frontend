import { Achievement } from '@/components/Achievements';

export interface User {
    patientCode: string;
    image: string;
    background: string;
    achievements: Achievement[];
}

export interface FriendAchievement {
    id: string;
    title: string;
    description: string;
    user: {
        id: string;
        patient_code:string;
        image: string;
    }
}

export interface NotificationInfo {
    content:string;
    title:string;
    createdAt:string;
    id:string;
}

export interface Notification {
    notificationInfo: NotificationInfo;
    read:boolean;
}