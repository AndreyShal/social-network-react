import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";


export const selectGetUsers = (state: AppStateType) => {
    return state.usersPage.users
}

export const selectGetUsersSuperSelector = createSelector(selectGetUsers,(users)=> {
    return users.filter(u=>true)
})
export const selectGetPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const selectGetTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}
export const selectGetCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const selectGetIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const selectGetFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}