import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reducer";
import {usersAPI} from "../../api/api";

type MapStatePropsType = {
    userId: null | number,
    login: null | string,
    email: null | string,
    isAuth: boolean
}

type MapDispatchToProps = {
    setAuthUserData: (userId:number, email:string, login:string) => void
}

export type HeaderPropsType = MapStatePropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType):MapStatePropsType => ({
    userId: state.auth.userId,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

const mapDispatchToProps: MapDispatchToProps = {
    setAuthUserData
}

class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        usersAPI.authMe().then(data=> {
            if(data.resultCode === 0) {
                const {id, email, login} = data.data
                this.props.setAuthUserData(id, email, login)
            }
        })
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)