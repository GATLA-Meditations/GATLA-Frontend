import React, { useState } from 'react';
import './styles.css';
import { Formik, Field, Form } from 'formik';
import CustomTextField from '@/components/CustomTextField';
import Button from '@/components/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { login } from '@/service/apis';
import { setToken } from '@/service/store';
import { useRouter } from 'next/router';
import logo from '../../assets/Logo/logo.png';
import Image from 'next/image';
import Loader from '@/components/Loader';

interface FormValues {
    patientCode: string;
    password: string;
}

const LoginPage = () => {
    const router = useRouter();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (values: FormValues) => {
        setIsLoading(true);
        try {
            const token = await login(values);
            setToken(token);
            router.push('/home');
        } catch (error) {
            console.log(error);
            setError('Verifica el código o la contraseña');
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <Box className="loginPageContainer">
            <Box className="headerContainer">
                <Image src={logo} alt="logo" width={100} height={150} />
                <Typography className="title h3 bold">Renacentia</Typography>
                <Typography className="subtitle">
                    Comienza tu bienestar personal
                </Typography>
            </Box>
            {error && (
                <Typography
                    className="body1"
                    sx={{ color: 'red', marginBottom: '1vh' }}
                >
                    {error}
                </Typography>
            )}
            <Formik
                initialValues={{ patientCode: '', password: '' }}
                onSubmit={handleSubmit}
            >
                <Form className="inputContainer">
                    <Field
                        as={CustomTextField}
                        placeholder="código de gatla"
                        label="Código"
                        name="patientCode"
                    />
                    <Field
                        as={CustomTextField}
                        placeholder="contraseña123"
                        label="Contraseña"
                        type="password"
                        name="password"
                    />
                    <Box className="forgotPassword">
                        <Typography>Has olvidado la </Typography>
                        <Typography className="bold">contraseña?</Typography>
                    </Box>
                    <Box className="buttonContainer">
                        <Button variant="green" size="medium" type="submit">
                            Iniciar Sesión
                        </Button>
                    </Box>
                </Form>
            </Formik>
        </Box>
    );
};

export default LoginPage;
