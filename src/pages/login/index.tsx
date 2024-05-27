import React from 'react';
import './styles.css';
import { Field, Form, Formik } from 'formik';
import CustomTextField from '@/components/CustomTextField';
import Button from '@/components/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';

interface FormValues {
    email: string;
    password: string;
}

const LoginPage = () => {
    const handleSubmit = (values: FormValues) => {
        console.log(values);
    };

    return (
        <Box className="loginPageContainer">
            <Box className="headerContainer">
                <h1>Logo</h1>
                <Typography className="title h3 bold">Renacentia</Typography>
                <Typography className="subtitle">
                    Comienza tu bienestar personal
                </Typography>
            </Box>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
            >
                <Form className="inputContainer">
                    <Field
                        as={CustomTextField}
                        placeholder="usuario@gmail.com"
                        label="Email"
                        name="email"
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
                        {/*CAMBIAR*/}
                        <Link href="/home" style={{ textDecoration: 'none' }}>
                            <Button variant="green" size="medium" type="submit">
                                Iniciar Sesión
                            </Button>
                        </Link>
                    </Box>
                </Form>
            </Formik>
        </Box>
    );
};

export default LoginPage;
