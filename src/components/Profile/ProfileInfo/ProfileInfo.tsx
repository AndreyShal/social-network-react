import React, {ChangeEvent, useState} from "react";
import s from "./profileInfo.module.css"
import {ContactType, ProfileSave, ProfileType, updateStatus} from "redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from './ProfileStatus'
import userPhoto from "../../../assests/images/user.jpg";
import {ProfileDataForm} from "components/Profile/ProfileInfo/ProfileDataForm";

type ProfileInfoProps = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
    saveProfile: (profile: ProfileSave) => void
}

export const ProfileInfo = React.memo(({profile, ...props}: ProfileInfoProps) => {
    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    console.log(props.isOwner)
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const goToEditMode = (active: boolean) => {
        setEditMode(active)
    }
    return (
        <div>
            <div>
                <img src={"https://www.designmantic.com/blog/wp-content/uploads/2013/09/Logo-Unique-718x300.jpg"}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} alt={profile.photos.large} className={s.mainPhoto}/>
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

                {editMode ? <ProfileDataForm profile={profile} saveProfile={props.saveProfile} goToEditMode={goToEditMode}/> : <ProfileData profile={profile} isOwner={props.isOwner} goToEditMode={goToEditMode}/>}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
})

type ProfileData = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: (active: boolean)=> void
}

const ProfileData = ({profile, isOwner, goToEditMode}: ProfileData) => {
    return (
        <div>
            <div onClick={()=>goToEditMode(true)}><button>edit</button></div>
            <div>
                <div>
                    <b>Full name</b>: {profile.fullName}
                </div>
                <div>
                    <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
                </div>
                {profile.lookingForAJob &&
                  <div><b>My professional skills</b>: {profile.lookingForAJobDescription}</div>}
            </div>
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map((key: string) => {
                    const keys = profile.contacts[key as keyof typeof profile.contacts] as keyof ContactType
                return <Contact key={key} contactTitle={key}
                                contactValue={keys}/>
            })}
            </div>
        </div>
    )
}


export const Contact = ({contactTitle, contactValue}: { contactTitle: string, contactValue:  keyof  ContactType }) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue ? contactValue : ""}</div>
}
