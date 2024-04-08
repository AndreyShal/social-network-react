import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: true,
    followingInProgress: [],
    fake: 10
}

export const usersReducer = (state: InitialStateType = initialState, action: UsersReducerActionType): InitialStateType => {
    switch (action.type) {
        case "FAKE": return {...state, fake: state.fake + 1}
        case "FOLLOW": {
            const copyState = {
                ...state,
                users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: true} : el)
            }
            return copyState
        }
        case "UNFOLLOW": {
            const copyState = {
                ...state,
                users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: false} : el)
            }
            return copyState
        }
        case "SET_USERS": {
            return {
                ...state,
                users: [...action.payload.users]
            }
        }
        case "SET_CURRENT_PAGE": {
            return {
                ...state,
                currentPage: action.payload.currentPage
            }
        }
        case "SET_TOTAL_USERS_COUNT": {
            return {...state, totalUsersCount: action.payload.totalUsersCount}
        }
        case "TOGGLE_IS_FETCHING": {
            return {...state, isFetching: action.payload.isFetching}
        }
        case "TOGGLE_IS_FOLLOWING_PROGRESS": {
            return {
                ...state,
                followingInProgress: action.payload.isFetching ?
                    [...state.followingInProgress, action.payload.userId] :
                    state.followingInProgress.filter(el => el !== action.payload.userId)
            }
        }
        default:
            return state
    }
}

export const setFake = () => ({type: "FAKE"} as const)

export const followSuccess = (userId: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId
        }
    } as const
}

export const unfollowSuccess = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userId
        }
    } as const
}

export const setUsers = (users: UsersType[]) => {
    return {
        type: 'SET_USERS',
        payload: {
            users
        }
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        payload: {
            currentPage
        }
    } as const
}


export const setUsersTotalCount = (totalUsersCount: number) => {
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        payload: {
            totalUsersCount
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

export const toggleFollowingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
        payload: {
            isFetching,
            userId
        }
    } as const
}

//thanks
export const getUsers = (page: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))

    usersAPI.getUsers(page, pageSize).then(res => {
        const data = res.data;
        dispatch(setCurrentPage(page));
        dispatch(setUsers(data.items))
        dispatch(setUsersTotalCount(data.totalCount))
        dispatch(toggleIsFetching(false))
    })
}

export const follow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId).then(res => {
            const data = res.data
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
    }
}
export const unfollow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unFollow(userId).then(res => {
            const data = res.data
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
    }
}


//types
export type UserLocation = {
    city: string, country: string
}
export type UsersType = {
    "name": string,
    "id": number,
    "uniqueUrlName": null | string,
    "photos": {
        "small": null | string,
        "large": null | string
    },
    "status": null | string,
    "followed": boolean
}
export type InitialStateType = {
    users: UsersType[],
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
    fake: number
}
export type FollowType = ReturnType<typeof followSuccess>
export type UnfollowType = ReturnType<typeof unfollowSuccess>
export type SetUsersType = ReturnType<typeof setUsers>
export type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export type SetTotalUsersCountType = ReturnType<typeof setUsersTotalCount>
export type ToggleIsFetchingType = ReturnType<typeof toggleIsFetching>
export type ToggleFollowingProgressType = ReturnType<typeof toggleFollowingProgress>
export type UsersReducerActionType =
    FollowType
    | UnfollowType
    | SetUsersType
    | SetCurrentPageType
    | SetTotalUsersCountType
    | ToggleIsFetchingType
    | ToggleFollowingProgressType
| ReturnType<typeof setFake>