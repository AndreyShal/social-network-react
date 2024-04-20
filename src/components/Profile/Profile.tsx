import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileSave, ProfileType} from "../../redux/profile-reducer";
import {NavLink} from "react-router-dom";

type ProfileProps = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
    saveProfile: (profile: ProfileSave) => void
}

export const Profile = (props: ProfileProps) => {
    return (
        <div>
            <ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status}
                         updateStatus={props.updateStatus} savePhoto={props.savePhoto} saveProfile={props.saveProfile}/>
            <NavLink to={`/profile/${30953}`}>'asdfasdf'</NavLink>
            <MyPostsContainer/>
        </div>
    )
}