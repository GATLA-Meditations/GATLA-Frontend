import React from 'react';
import './styles.css';
import '@/app/globals.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'grey' | 'green' | 'red' | 'common';
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}

const Button = ({
    children,
    variant,
    size,
    onClick,
    disabled,
    className,
}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={
                disabled
                    ? `button body2bold disabled ${size}`
                    : 'button body2bold' +
                      ' ' +
                      variant +
                      ' ' +
                      size +
                      ' ' +
                      className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
