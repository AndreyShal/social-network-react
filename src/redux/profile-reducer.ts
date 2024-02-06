import {ActionType, PostType, ProfilePageType} from "./store";

const initialState = {
    messageForNewPost: 'it camasutra',
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11},
    ]
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType) => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: PostType = {id: new Date().getTime(), message: action.payload.newPost, likesCount: 0};
            return {...state, messageForNewPost: "", posts: [newPost, ...state.posts]}
        }
        case "UPDATE-NEW-POST-TEXT": {
            return {...state, messageForNewPost: action.payload.newText}
        }
        default:
            return state
    }
}

export type ProfileReducerActionType = AddPostActionType | UpdateNewPostTextActionType

export type AddPostActionType = ReturnType<typeof addPostActionCreator>

export const addPostActionCreator = (newPost:string) => {
    return {
        type: 'ADD-POST',
        payload: {
            newPost
        }
    } as const
}

export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>

export const updateNewPostTextActionCreator = (newText:string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        payload: {
            newText
        }
    } as const
}
