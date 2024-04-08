export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

const initialState = {
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
}

export const dialogsReducer = (state: DialogPageType = initialState, action: DialogsReducerActionType): DialogPageType => {
    switch (action.type) {
        case "ADD-MESSAGE": {
            const newMessage: MessageType = {id: 6, message: action.payload.newMessage}
            return {...state, messages: [newMessage, ...state.messages]}
        }
        default:
            return state
    }
}

export type DialogsReducerActionType = AddMessageActionType

export type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
export const addMessageActionCreator = (newMessage: string) => {
    return {
        type: 'ADD-MESSAGE',
        payload: {
            newMessage
        }
    } as const
}

// export type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyActionCreator>

// export const updateNewMessageBodyActionCreator = (newText: string) => {
//     return {
//         type: 'UPDATE-NEW-MESSAGE-BODY',
//         payload: {
//             newText
//         }
//     } as const
// }