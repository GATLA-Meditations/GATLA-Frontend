import React from 'react';
import './styles.css';
import { Formik, Field, Form } from 'formik';
import './styles.css';
import CustomTextField from '@/components/CustomTextField';
import Button from '@/components/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
