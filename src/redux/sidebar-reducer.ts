import {ActionType, SidebarType} from "./store";

const initialState = {

}

export const sidebarReducer = (state: SidebarType = initialState, action: ActionType) => {
    switch (action.type) {
        default: return state
    }
}