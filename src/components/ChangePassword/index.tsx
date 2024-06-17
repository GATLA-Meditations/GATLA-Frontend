import React, { useEffect, useState } from 'react';
import './styles.css';
import '@/app/globals.css';
import CustomTextField from '@/components/CustomTextField';
import Button from '@/components/Button';
import { CircularProgress } from '@mui/material';
import { validateStrongPassword } from '@/util/validation';
import { CheckCircleOutline, ErrorOutline } from '@mui/icons-material';
import { changePassword } from '@/service/apis';

interface ChangePassword {
    closeModal: () => void;
}

const ChangePassword = ({ closeModal }: ChangePassword) => {
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [passwordInput, setPasswordInput] = useState('');
    const [passwordRepeatInput, setPasswordRepeatInput] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        const handleEnableButton = () => {
            if (passwordInput === '' || passwordRepeatInput === '') {
                setIsButtonDisabled(true);
                return;
            }
            if (
                passwordInput === passwordRepeatInput &&
                validateStrongPassword(passwordInput)
            ) {
                setIsButtonDisabled(false);
            }
            else {
                setIsButtonDisabled(true);
            }
        };
        handleEnableButton();
    }, [passwordInput, passwordRepeatInput]);

    const handlePasswordInputChange = (event: any) => {
        setPasswordInput(event.target.value);
    };

    const handlePasswordRepeatInputChange = (event: any) => {
        setPasswordRepeatInput(event.target.value);
    };

    const handlePasswordChange = async () => {
        setIsLoading(true);
        const data = {
            password: passwordInput,
        };
        try {
            await changePassword(data).then(() => {
                setIsLoading(false);
                setSuccess(true);
            });
        } catch (error) {
            setIsLoading(false);
            setError(true);
        }
    };

    return (
        <div className={'background'}>
            <div className={'container'}>
                {isLoading ? (
                    <CircularProgress size="10vh" className="loading-style" />
                ) : success ? (
                    <div className={'success-style'}>
                        <CheckCircleOutline fontSize="inherit" />
                        <Button
                            variant={'green'}
                            size={'medium'}
                            onClick={closeModal}
                        >
                            Volver
                        </Button>
                    </div>
                ) : error ? (
                    <div className={'error-style'}>
                        <ErrorOutline fontSize="inherit" />
                        <Button
                            variant={'red'}
                            size={'medium'}
                            onClick={closeModal}
                        >
                            Volver
                        </Button>
                    </div>
                ) : (
                    <div className={'titleContainer'}>
                        <p className={'title'}>Cambiar Contraseña</p>
                        <div>
                            <CustomTextField
                                label={'Nueva contraseña'}
                                placeholder={'Nueva contraseña'}
                                type="password"
                                onChange={handlePasswordInputChange}
                            />
                            <CustomTextField
                                label={'Repetir contraseña'}
                                placeholder={'Repetir contraseña'}
                                type="password"
                                onChange={handlePasswordRepeatInputChange}
                                variant={isButtonDisabled ? 'error' : 'default'}
                                helperText='La contraseña es muy débil o no coincide.'
                            />

                            <div className={'elements_container'}>
                                <Button
                                    variant={
                                        isButtonDisabled ? 'grey' : 'green'
                                    }
                                    size={'medium'}
                                    disabled={isButtonDisabled}
                                    onClick={handlePasswordChange}
                                >
                                    Confirmar
                                </Button>
                                <Button
                                    variant={'red'}
                                    size={'medium'}
                                    onClick={closeModal}
                                >
                                    Cancelar
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChangePassword;
