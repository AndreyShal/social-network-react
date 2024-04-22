import React from 'react';
import {useFormik} from 'formik';
import {Input} from "../common/Preloader/FormsControls/FormsControls";
import {maxLengthFn, requiredFn} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";


export const LoginForm = (props: LoginForm) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            captcha: ''
        },
        validate: values => {
            const errors: FormikErrorType = {}
            if (requiredFn(values.email)) {
                errors.email = requiredFn(values.email)
            }
            if (maxLengthFn(30)(values.email)) {
                errors.email = maxLengthFn(30)(values.email)
            }
            if (requiredFn(values.password)) {
                errors.password = requiredFn(values.password)
            }
            if (maxLengthFn(30)(values.password)) {
                errors.password = maxLengthFn(30)(values.password)
            }
            return errors
        },
        onSubmit: values => {
            props.login(values.email, values.password, values.rememberMe, values.captcha)
            formik.resetForm()
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <Input placeholder={"Email"}
                       type="text"
                       {...formik.getFieldProps('email')}
                       touched={formik.touched.email} errors={formik.errors.email}
                />
            </div>
            <div>
                <Input placeholder={"Password"}
                       type="password"
                       {...formik.getFieldProps('password')}
                       touched={formik.touched.password} errors={formik.errors.password}/>
            </div>
            <div>
                <input type={"checkbox"} name={"rememberMe"} onChange={formik.handleChange}
                       checked={formik.values.rememberMe}/> remember me
            </div>
            {props.captchaUrl && <div>
              <img src={props.captchaUrl} alt={"captchaUrl"}/>
              <Input placeholder={"Symbols from image"}
                     type="text"
                     {...formik.getFieldProps('captcha')}
                     touched={formik.touched.captcha} errors={formik.errors.captcha}/>
            </div>}
            <div>
                <button type={"submit"}>Login</button>
            </div>
        </form>
    )
}

type Login = MapDispatchToProps & MapStateToProps


const Login = (props: Login) => {

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (<div>
        <h1>Login</h1>
        <LoginForm login={props.login} captchaUrl={props.captchaUrl}/>
    </div>)
}

const MapDispatchToProps: MapDispatchToProps = {
    login,
}

const MapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Login)

//types
type LoginForm = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
    captchaUrl: null | string
}

type FormikErrorType = {
    email?: string
    password?: string
}

type MapDispatchToProps = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type  MapStateToProps = {
    isAuth: boolean
    captchaUrl: null | string
}
