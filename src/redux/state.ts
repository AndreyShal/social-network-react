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
}

type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

export type StoreType = {
    _state: RootStateType
    getState: ()=> RootStateType
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: (callback: RootStateType) => void) => void
    _callSubscriber: (state: RootStateType) => void
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
            ]
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    _callSubscriber(state: RootStateType) {
        console.log("state changed")
    },
    addPost(postMessage: string) {
        let newPost = {id: new Date().getTime(), message: postMessage, likesCount: 0};
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.messageForNewPost = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.messageForNewPost = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer: (callback: RootStateType) => void) {
        this._callSubscriber = observer
    },

}

export default store;