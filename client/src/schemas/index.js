import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    firstName: Yup.string().min(2).max(25).required('Please enter first name'),
    lastName: Yup.string().min(2).max(25).required('Please enter last name'),
    email: Yup.string().email().required('Enter email'),
    password: Yup.string().min(6).required('Enter password'),
    confirm_password: Yup.string().required().oneOf([Yup.ref('password'), null], 'Password must match')
})

export const signInSchema = Yup.object({
    email: Yup.string().email().required('Enter email'),
    password: Yup.string().min(6).required('Enter password'),
})