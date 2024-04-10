import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

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

export type ProfileType = {
    "aboutMe": string,
    "contacts": {
        "facebook": null | string,
        "website": null | string,
        "vk": null | string,
        "twitter": null | string,
        "instagram": null | string,
        "youtube": null | string,
        "github": null | string,
        "mainLink": null | string,
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string,
    "fullName": string,
    "userId": number,
    "photos": {
        "small": string,
        "large": string
    }

}
export type ProfilePageType = {
    posts: Array<PostType>
    profile: null | ProfileType
    status: string
}

export type ProfileReducerActionType = AddPostActionType | SetUserProfile | SetStatus | DeletePostActionsType
export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type DeletePostActionsType = ReturnType<typeof deletePost>
export type SetUserProfile = ReturnType<typeof setUserProfile>
export type SetStatus = ReturnType<typeof setStatus>