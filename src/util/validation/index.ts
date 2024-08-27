export const validateStrongPassword = (password: string) => {
    const strongPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return strongPassword.test(password);
};
