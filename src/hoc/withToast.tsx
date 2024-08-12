import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

export interface WithToastProps {
    showToast: (
        message: string,
        type?: 'success' | 'error' | 'img',
        imgSrc?: string
    ) => void;
}

const htmlForImg = (message: string, imgSrc: string) => {
    return (
        <div className={'toast-with-img-container'}>
            <img src={imgSrc} className={'img-style'} alt={'toast-image'} />
            <p className={'h6'}>{message}</p>
        </div>
    );
};

const options = {
    ['imgToastOption']: {
        progressClassName: 'purple-progress-bar',
    },
};

const withToast = (WrappedComponent: React.ComponentType<any>) => {
    // eslint-disable-next-line react/display-name
    return (props: any) => {
        const showToast = (
            message: string,
            type: 'success' | 'error' | 'img',
            imgSrc: string
        ) => {
            switch (type) {
                case 'success':
                    toast.success(message);
                    break;
                case 'error':
                    toast.error(message);
                    break;
                case 'img':
                    toast(
                        htmlForImg(message, imgSrc),
                        options['imgToastOption']
                    );
                    break;
                default:
                    toast(message);
                    break;
            }
        };

        return (
            <>
                <WrappedComponent {...props} showToast={showToast} />
                <ToastContainer />
            </>
        );
    };
};

export default withToast;
