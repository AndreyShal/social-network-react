import React from "react";
import s from "./profileInfo.module.css"
import {ProfileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoProps = {
    profile?: ProfileType
}

export const ProfileInfo = ({profile}: ProfileInfoProps) => {
    if(!profile) {
        return <Preloader/>
    }
    return (<div>
            <div><img src={"https://www.designmantic.com/blog/wp-content/uploads/2013/09/Logo-Unique-718x300.jpg"}/>
            </div>
            <div className={s.descriptionBlock}>
                <p>{profile.aboutMe}</p>
                <img src={profile.photos.large} alt={profile.photos.large}/>
                ava + description
            </div>
        </div>
    )
}