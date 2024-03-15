const initialState: InitialStateType = {
    id: null,
    login: null,
    email: null,
    isFetching: true
}

export const usersReducer = (state: InitialStateType = initialState, action: UsersReducerActionType): InitialStateType => {
    switch (action.type) {
        // case "FOLLOW": {
        //     const copyState = {
        //         ...state,
        //         users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: true} : el)
        //     }
        //     return copyState
        // }
        // case "UNFOLLOW": {
        //     const copyState = {
        //         ...state,
        //         users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: false} : el)
        //     }
        //     return copyState
        // }
        // case "SET_USERS": {
        //     return {
        //         ...state,
        //         users: [...action.payload.users]
        //     }
        // }
        // case "SET_CURRENT_PAGE": {
        //     return {
        //         ...state,
        //         currentPage: action.payload.currentPage
        //     }
        // }
        // case "SET_TOTAL_USERS_COUNT": {
        //     return {...state, totalUsersCount: action.payload.totalUsersCount}
        // }
        // case "TOGGLE_IS_FETCHING": {
        //     return {...state, isFetching: action.payload.isFetching}
        // }
        default:
            return state
    }
}

export const setUserData = () => {}

export const follow = (userId: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId
        }
    } as const
}

export const unfollow = (userId: number) => {
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
    id: null | number,
    login: null | string,
    email: null | string,
    isFetching: boolean
}
export type FollowType = ReturnType<typeof follow>
export type UnfollowType = ReturnType<typeof unfollow>
export type SetUsersType = ReturnType<typeof setUsers>
export type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export type SetTotalUsersCountType = ReturnType<typeof setUsersTotalCount>
export type ToggleIsFetchingType = ReturnType<typeof toggleIsFetching>
export type UsersReducerActionType = FollowType | UnfollowType | SetUsersType | SetCurrentPageType | SetTotalUsersCountType | ToggleIsFetchingType