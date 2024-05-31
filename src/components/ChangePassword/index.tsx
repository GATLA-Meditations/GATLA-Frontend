import React from 'react';
import './styles.css';
import '@/app/globals.css';
import CustomTextField from '@/components/CustomTextField';
import Button from '@/components/Button';

interface ChangePassword {}

const ChangePassword = () => {
    return (
        <div className={'container'}>
            <div className={'titleContainer'}>
                <p className={'title'}>Cambiar Contraseña</p>
                <div>
                    <CustomTextField
                        label={'Nueva contraseña'}
                        placeholder={'Nueva contraseña'}
                        type="password"
                    />
                    <CustomTextField
                        label={'Repetir contraseña'}
                        placeholder={'Repetir contraseña'}
                        type="password"
                    />

                    <div className={'elements_container'}>
                        <Button variant={'green'} size={'medium'}>
                            Confirmar
                        </Button>
                        <Button variant={'red'} size={'medium'}>
                            Cancelar
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;
