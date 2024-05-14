import React, {useState} from 'react';
import './styles.css';
import '../../app/globals.css';

interface CustomTextFieldProps {
    variant?: 'default' | 'error';
    placeholder?: string;
    label?: string;
    helperText?: string;
    name?: string;
    type?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomTextField = ({
                             variant = 'default',
                             placeholder,
                             label,
                             helperText,
                             name,
                             type,
                             onChange,
                         }: CustomTextFieldProps) => {

    const [inputValue, setInputValue] = useState(variant);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue('default');
        if (onChange) {
            onChange(e);
        }
    };

    return (
        <div className="customTextFieldContainer">
            {label && <label className="label h6">{label}</label>}
            <input
                className={`customTextField ${inputValue}`}
                placeholder={placeholder}
                onChange={handleInputChange}
                name={name}
                type={type}
            />
            {variant === 'error' && helperText && (
                <p className="helperText">{helperText}</p>
            )}
        </div>
    );
};

export default CustomTextField;
