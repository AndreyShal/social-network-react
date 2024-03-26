import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";
import {NavLink} from "react-router-dom";

type ProfileProps = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

export const Profile = (props: ProfileProps) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <NavLink to={`/profile/${30953}`}>'asdfasdf'</NavLink>
            <MyPostsContainer/>
        </div>
    )
}