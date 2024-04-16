import {Dispatch} from "redux";
import {getAuthUserData} from "redux/auth-reducer";

const initialState = {
    status: "idle" as RequestStatusType,
    error: null as string | null,
    isInitialized: false as boolean,
}
export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-INITIALIZED':
            return {...state, isInitialized: action.isInitialized}
        default:
            return {...state}
    }
}

export const setAppError = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export const setAppStatus = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)

export const initializedSuccess = (isInitialized: boolean) => ({type: 'APP/SET-INITIALIZED', isInitialized} as const)

//thunks
export const initializeApp = ()=> (dispatch: Dispatch | any) => {

    const promiseAuthUserData =  dispatch(getAuthUserData())
    Promise.all([promiseAuthUserData]).then(()=>{
        dispatch(initializedSuccess(true))
    })
}

//types
type InitialStateType = typeof initialState
export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed"
export type SetAppErrorActionType = ReturnType<typeof setAppError>
export type SetAppStatusActionType = ReturnType<typeof setAppStatus>
export type SetIsInitializeActionType = ReturnType<typeof initializedSuccess>

type ActionsType =
    | SetAppErrorActionType
    | SetAppStatusActionType
    | SetIsInitializeActionType