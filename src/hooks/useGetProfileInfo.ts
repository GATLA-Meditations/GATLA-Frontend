import { useState, useEffect } from 'react';
import { getUserProfile } from '@/service/apis';
import { User } from '@/util/types';

export const useGetProfileInfo = () => {
    const [profile, setProfile] = useState<User>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const userProfile: User = await getUserProfile();
                setProfile(userProfile);
            } catch (err) {
                setError('Failed to fetch profile');
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    return { profile, loading, error };
};
