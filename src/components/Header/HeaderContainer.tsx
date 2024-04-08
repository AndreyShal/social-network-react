import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {logout, setAuthUserData} from "../../redux/auth-reducer";

const mapStateToProps = (state: AppStateType):MapStatePropsType => ({
    userId: state.auth.userId,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth,
})

const mapDispatchToProps: MapDispatchToProps = {
    setAuthUserData,
    logout
}

class HeaderContainer extends React.Component<HeaderPropsType> {
    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)

//types
type MapStatePropsType = {
    userId: null | number,
    login: null | string,
    email: null | string,
    isAuth: boolean
}

type MapDispatchToProps = {
    setAuthUserData: (userId:number, email:string, login:string, isAuth:boolean) => void
    logout: ()=> void
}

export type HeaderPropsType = MapStatePropsType & MapDispatchToProps