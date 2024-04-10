import React from "react";
import s from "./profileInfo.module.css"
import {ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from './ProfileStatus'

type ProfileInfoProps = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo = React.memo((props: ProfileInfoProps) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (<div>
            <div>
                <img src={"https://www.designmantic.com/blog/wp-content/uploads/2013/09/Logo-Unique-718x300.jpg"}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div className={s.descriptionBlock}>
                <p>{props.profile.aboutMe}</p>
                <p>{props.profile.userId}</p>
                <img src={props.profile.photos.large} alt={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    )
})