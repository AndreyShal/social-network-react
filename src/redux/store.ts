import {
    AddPostActionType,
    profileReducer,
    ProfileReducerActionType,
    UpdateNewPostTextActionType
} from "./profile-reducer";
import {
    AddMessageActionType,
    dialogsReducer,
    DialogsReducerActionType,
    UpdateNewMessageBodyActionType
} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostType>
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}

export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

export type ActionType = ProfileReducerActionType | DialogsReducerActionType

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void

    getState: ()=> RootStateType
    subscribe: (observer: (callback: RootStateType) => void) => void

    dispatch: (action: ActionType) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: 'it camasutra',
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11},
            ]
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
            ],
            newMessageBody: "",
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    _callSubscriber(state: RootStateType) {
        console.log("state changed")
    },
    subscribe(observer: (callback: RootStateType) => void) {
        // renderTree(state)
        this._callSubscriber = observer
    },
    dispatch(action: ActionType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state);
    }
}

export default store;