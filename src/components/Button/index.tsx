import React from "react";
import "./styles.css";
import "@/app/globals.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "grey" | "green";
    size?: "small" | "medium" | "large";
    onClick?: () => void;
    disabled?: boolean;
}

const Button = ({children, variant, size, onClick, disabled}: ButtonProps) => {
    return (
        <button onClick={onClick}
                className={"button body2bold" + " " + variant + " " + size}
                disabled={disabled}>
            {children}
        </button>
    )
}

export default Button;