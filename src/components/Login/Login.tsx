import React from 'react';
import {useFormik} from 'formik';

export const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            formik.resetForm()
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input placeholder={"Login"}
                       type="text"
                       name="login"
                       onChange={formik.handleChange}
                       value={formik.values.login}/>
            </div>
            <div>
                <input placeholder={"Password"}
                       type="text"
                       name="password"
                       onChange={formik.handleChange}
                       value={formik.values.password}/>
            </div>
            <div>
                <input type={"checkbox"} name={"rememberMe"} onChange={formik.handleChange} checked={formik.values.rememberMe}/> remember me
            </div>
            <div>
                <button type={"submit"}>Login</button>
            </div>
        </form>
    )
}


export const Login = () => {
    return (<div>
        <h1>Login</h1>
        <LoginForm/>
    </div>)
}