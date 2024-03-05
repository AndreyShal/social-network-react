import {AddPostActionType, UpdateNewPostTextActionType} from "./profile-reducer";

export type SidebarType = {}

const initialState = {}

export const sidebarReducer = (state: SidebarType = initialState, action: SidebarReducerActionType) => {
    switch (action.type) {
        default:
            return state
    }
}

export type SidebarReducerActionType = {type: ""}