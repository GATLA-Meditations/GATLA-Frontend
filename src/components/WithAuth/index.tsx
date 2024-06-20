import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getToken } from '@/service/store';

const WithAuth = (WrappedComponent: React.ComponentType) => {
    const ComponentWithAuth = (props: any) => {
        const router = useRouter();
        const [isLoading, setIsLoading] = React.useState(true);

        useEffect(() => {
            setIsLoading(true);
            const token = getToken();
            if (!token) {
                router.push('/login');
            } else {
                setIsLoading(false);
            }
        }, [router]);

        if (isLoading) return null;

        return <WrappedComponent {...props} />;
    };

    ComponentWithAuth.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    return ComponentWithAuth;
};

export default WithAuth;
