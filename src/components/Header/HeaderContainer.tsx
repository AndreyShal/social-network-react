import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {authMe, setAuthUserData} from "../../redux/auth-reducer";

type MapStatePropsType = {
    userId: null | number,
    login: null | string,
    email: null | string,
    isAuth: boolean
}

type MapDispatchToProps = {
    setAuthUserData: (userId:number, email:string, login:string) => void
    authMe: () => void
}

export type HeaderPropsType = MapStatePropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType):MapStatePropsType => ({
    userId: state.auth.userId,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth,
})

const mapDispatchToProps: MapDispatchToProps = {
    setAuthUserData,
    authMe
}

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        this.props.authMe()
        console.log(this.props.userId ? this.props.userId : "no userId")
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)