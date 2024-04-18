import React, {ChangeEvent} from "react";
import s from "./profileInfo.module.css"
import {ProfileType} from "redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from './ProfileStatus'
import userPhoto from "../../../assests/images/user.jpg";

type ProfileInfoProps = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File)=>void
}

export const ProfileInfo = React.memo((props: ProfileInfoProps) => {
    if (!props.profile) {
        return <Preloader/>
    }
    console.log(props.isOwner)
    const onMainPhotoSelected = (e:ChangeEvent<HTMLInputElement>) => {
        if(e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    return (<div>
            <div>
                <img src={"https://www.designmantic.com/blog/wp-content/uploads/2013/09/Logo-Unique-718x300.jpg"}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div className={s.descriptionBlock}>
                <p>{props.profile.aboutMe}</p>
                <p>{props.profile.userId}</p>
                <img src={props.profile.photos.large || userPhoto} alt={props.profile.photos.large} className={s.mainPhoto}/>
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
            </div>
        </div>
    )
})