const initialState = {
    messageForNewPost: 'it camasutra',
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11},
    ],
    profile: null
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerActionType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: PostType = {id: new Date().getTime(), message: action.payload.newPost, likesCount: 0};
            return {...state, messageForNewPost: "", posts: [newPost, ...state.posts]}
        }
        case "UPDATE-NEW-POST-TEXT": {
            return {...state, messageForNewPost: action.payload.newText}
        }
        case "SET_USER_PROFILE": {
            return {...state, profile: action.payload.profile}
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

export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        payload: {
            newText
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
        "userId": 2,
        "photos": {
            "small": string,
            "large": string
        }

}
export type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostType>
    profile: null | ProfileType
}

export type ProfileReducerActionType = AddPostActionType | UpdateNewPostTextActionType | SetUserProfile
export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>
export type SetUserProfile = ReturnType<typeof setUserProfile>