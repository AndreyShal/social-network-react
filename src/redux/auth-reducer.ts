const initialState: InitialStateType = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: true
}

export const authReducer = (state: InitialStateType = initialState, action: AuthReducerActionType): InitialStateType => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {...state, ...action.payload.data, isAuth: true}
        }
        case "TOGGLE_IS_FETCHING": {
            return {...state, isFetching: action.payload.isFetching}
        }
        default:
            return state
    }
}

export const setAuthUserData = (userId:number, email:string, login:string) => {
    return {
        type: 'SET_USER_DATA',
        payload: {
            data: {userId, email,login}
        }
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        payload: {
            isFetching
        }
    } as const
}

//types
export type InitialStateType = {
    userId: null | number,
    login: null | string,
    email: null | string,
    isAuth: boolean
    isFetching: boolean
}
export type SetAuthUserDataType = ReturnType<typeof setAuthUserData>
export type ToggleIsFetchingType = ReturnType<typeof toggleIsFetching>
export type AuthReducerActionType = SetAuthUserDataType | ToggleIsFetchingType