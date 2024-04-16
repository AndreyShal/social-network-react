import {authApi} from "../api/api";
import {Dispatch} from "redux";
import {setAppError} from "./app-reducer";
import {AppDispatchType, AppThunk} from "../redux/redux-store";
import {ThunkDispatch} from "redux-thunk";

const initialState: InitialStateType = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: true
}

const SET_USER_DATA = "AUTH/SET_USER_DATA"
const TOGGLE_IS_FETCHING = "AUTH/TOGGLE_IS_FETCHING"

export const authReducer = (state: InitialStateType = initialState, action: AuthReducerActionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.payload.data}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.payload.isFetching}
        }
        default:
            return state
    }
}

export const setAuthUserData = (userId:number | null, email:string | null, login:string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {
            data: {userId, email,login, isAuth}
        }
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: {
            isFetching
        }
    } as const
}

//thanks
export const getAuthUserData= ()  => async (dispatch: Dispatch) => {
    try {
        const res = await authApi.authMe();
        const data = res.data
        if(data.resultCode === 0) {
            const {id, email, login} = data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
        return res
    } catch (e) {
       console.log(e)
    }

}

export const login  = (email: string, password: string, rememberMe:boolean):AppThunk => async (dispatch) => {
    const res = await authApi.login(email,password,rememberMe);
        const data = res.data
        if(data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            const message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error"
            dispatch(setAppError(message))
        }
}

export const logout = () =>async (dispatch: Dispatch) => {
    const res =await authApi.logout()
        const data = res.data
        if(data.resultCode === 0) {
            dispatch(setAuthUserData(null,null,null,false))
        }
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