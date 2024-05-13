import React, { useState } from 'react';
import './styles.css';
import '../../app/globals.css';

interface CustomTextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: 'default' | 'error';
    placeholder?: string;
    label?: string;
    helperText?: string;
}

const CustomTextField = ({variant, placeholder, label, helperText}: CustomTextFieldProps) => {
    const [inputVariant, setInputVariant] = useState(variant);

    const handleInputChange = () => {
        setInputVariant('default');
    };

    return (
        <div className="customTextFieldContainer">
            {label && <label className="label h6">{label}</label>}
            <input className={'customTextField ' + inputVariant} placeholder={placeholder} onChange={handleInputChange}/>
            {inputVariant === 'error' && helperText && <p className="helperText">{helperText}</p>}
        </div>
    );
};

export default CustomTextField;