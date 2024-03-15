import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType | null
}

type MapDispatchToProps = {
    setUserProfile: (profile: ProfileType) => void
}

export type OwnPropsType = MapStatePropsType & MapDispatchToProps
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})

const mapDispatchToProps: MapDispatchToProps = {
    setUserProfile
}

class  ProfileContainer extends  React.Component<PropsType> {
    constructor(props: PropsType) {
        super(props);
    }

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = "2"
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {withCredentials: true})
            .then(response => {
                console.log(response.data)
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export  default  connect(mapStateToProps, mapDispatchToProps) (WithUrlDataContainerComponent)