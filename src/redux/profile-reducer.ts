import {Dispatch} from "redux";
import {profileAPI} from "../api/api";
import {getUsers} from "redux/users-reducer";
import {AppStateType, AppThunk} from "redux/redux-store";
import {setAppError} from "redux/app-reducer";

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11},
    ],
    profile: null,
    status: ""
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerActionType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost: PostType = {id: new Date().getTime(), message: action.payload.newPost, likesCount: 0};
            return {...state, posts: [...state.posts, newPost]}
        }
        case "DELETE-POST": {
            return {...state, posts: state.posts.filter(el => el.id !== action.payload.id)}
        }
        case "SET_USER_PROFILE": {
            return {...state, profile: action.payload.profile}
        }
        case "PROFILE/SET-STATUS": {
            return {...state, status: action.payload.status}
        }
        case "PROFILE/SAVE-PHOTO-SUCCESS": {
            if (state.profile) {
                return {...state, profile: {...state.profile, photos: {...action.payload.photos}}}
            } else {
                return state
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = (newPost: string) => {
    return {
        type: 'ADD-POST',
        payload: {
            newPost
        }
    } as const
}
export const deletePost = (id: number) => {
    return {
        type: 'DELETE-POST',
        payload: {
            id
        }
    } as const
}

export const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET_USER_PROFILE',
        payload: {
            profile
        }
    } as const
}

export const setStatus = (status: string) => ({type: 'PROFILE/SET-STATUS', payload: {status}} as const)
export const savePhotoSuccess = (photos: {
    "small": string,
    "large": string
}) => ({type: 'PROFILE/SAVE-PHOTO-SUCCESS', payload: {photos}} as const)

//thanks

export const getProfile = (userId: number) => async (dispatch: Dispatch) => {
    const res = await profileAPI.getProfile(userId)
    const data = res.data
    dispatch(setUserProfile(data))
}

export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
    try {
        const res = await profileAPI.getStatus(userId)
        dispatch(setStatus(res.data))
    } catch (e) {
        console.log(e)
    }
}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    try {
        const res = await profileAPI.updateStatus(status)
        if (res.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    } catch (error: any) {
        // const rrr = (error:{ message: string })=>{
        //     dispatch(setAppError(error.message ? error.message : "Some error occurred" ))
        // }
        // error && rrr(error)
        dispatch(setAppError(error.message ? error.message : "Some error occurred" ))
    }
}

export const savePhoto = (photo: File) => async (dispatch: Dispatch) => {
    try {
        const res = await profileAPI.savePhoto(photo)
        if (res.data.resultCode === 0) {
            dispatch(savePhotoSuccess(res.data.data.photos))
        }
    } catch (e) {
        console.log(e)
    }
}

export const saveProfile = (profile: ProfileSave):AppThunk => async (dispatch, getState) => {
    // // eslint-disable-next-line no-debugger
    // debugger
    const userId = getState().auth.userId
    try {
        const res = await profileAPI.saveProfile(profile)
        if (res.data.resultCode === 0) {
            // console.log(res)
            userId && dispatch(getProfile(userId))
        } else {
            dispatch(setAppError(res.data.messages[0]))
        }
    } catch (e) {
        console.log(e)
    }
}


//types
export type PostType = {
    id: number
    message: string
    likesCount: number
}

enum ContactKeys {
    "facebook" ="facebook",
    "website"="website",
    "vk" = "vk",
    "twitter" = "twitter",
    "instagram" = "instagram",
    "youtube" = "youtube",
    "github" = "github",
    "mainLink" = "mainLink",
}
export type ContactType = Record<ContactKeys, string>
export type ProfileType = {
    "aboutMe": string,
    "contacts": ContactType,
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string,
    "fullName": string,
    "userId": number,
    "photos": {
        "small": string,
        "large": string
    }
}

export type ProfileSave = Partial<{
    "aboutMe": string,
    "contacts": Partial<ContactType>,
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string,
    "fullName": string,
    "userId": number,
}>

export type ProfilePageType = {
    posts: Array<PostType>
    profile: null | ProfileType
    status: string
}

type ProfileTypeNotPhotos = Omit<ProfileType, "photos">

export type ProfileReducerActionType =
    AddPostActionType
    | SetUserProfile
    | SetStatus
    | DeletePostActionsType
    | SavePhotoSuccess
export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type DeletePostActionsType = ReturnType<typeof deletePost>
export type SetUserProfile = ReturnType<typeof setUserProfile>
export type SetStatus = ReturnType<typeof setStatus>
export type SavePhotoSuccess = ReturnType<typeof savePhotoSuccess>
