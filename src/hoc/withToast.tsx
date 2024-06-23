import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const withToast = (WrappedComponent: React.ComponentType<any>) => {
    return (props: any) => {
        const showToast = (
            message: string,
            type: 'success' | 'error'
        ) => {
            switch (type) {
            case 'success':
                toast.success(message);
                break;
            case 'error':
                toast.error(message);
                break;
            default:
                toast(message);
                break;
            }
        };

        return (
            <>
                <WrappedComponent {...props} toast={showToast} />
                <ToastContainer />
            </>
        );
    };
};

export default withToast;
