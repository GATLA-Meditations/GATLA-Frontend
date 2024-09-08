import { Achievement } from '@/components/Achievements';

export interface User {
    patientCode: string;
    image: string;
    background: string;
    achievements: Achievement[];
}
