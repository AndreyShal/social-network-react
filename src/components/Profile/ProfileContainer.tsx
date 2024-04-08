import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, ProfileType, updateStatus} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    console.log('mapStateToProps PROFILE')
    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    })
}

const mapDispatchToProps: MapDispatchToProps = {
    getProfile,
    getStatus,
    updateStatus
}

class ProfileContainer extends React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
    }


    componentDidMount() {
        let userId: number | string | null = this.props.match.params.userId;
        if (!userId) {
            // userId = 30679
            userId = this.props.authorizedUserId
            if (!userId) this.props.history.push("/login")
        } else {
            userId = Number(userId)
        }

        userId && this.props.getProfile(userId)
        userId && this.props.getStatus(userId)
    }

    render() {
        console.log("render PROFILE")
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                         updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}


export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withRouter, withAuthRedirect)(ProfileContainer)

//types

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}

type MapDispatchToProps = {
    getProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}

export type OwnPropsType = MapStatePropsType & MapDispatchToProps
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType