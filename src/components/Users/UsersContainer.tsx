import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {follow, getUsers, toggleFollowingProgress, unfollow,} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    selectGetCurrentPage,
    selectGetFollowingInProgress,
    selectGetIsFetching,
    selectGetPageSize,
    selectGetTotalUsersCount,
    selectGetUsersSuperSelector
} from "../../redux/users-selectors";

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: selectGetUsersSuperSelector(state),
        pageSize: selectGetPageSize(state),
        totalUsersCount: selectGetTotalUsersCount(state),
        currentPage: selectGetCurrentPage(state),
        isFetching: selectGetIsFetching(state),
        followingInProgress: selectGetFollowingInProgress(state)
    }
}

const mapDispatchToProps: MapDispatchToProps = {
    follow,
    unfollow,
    toggleFollowingProgress,
    getUsers
}

class UsersContainer extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        console.log("render USERS")
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} users={this.props.users} onPageChanged={this.onPageChanged}
                   follow={this.props.follow} unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
                  ></Users>
        </>
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(UsersContainer)

//types
type MapStatePropsType = {
    users: any
    pageSize: ReturnType<typeof selectGetPageSize>
    totalUsersCount: ReturnType<typeof selectGetTotalUsersCount>
    currentPage: ReturnType<typeof selectGetCurrentPage>
    isFetching: ReturnType<typeof selectGetIsFetching>
    followingInProgress: ReturnType<typeof selectGetFollowingInProgress>
}

type MapDispatchToProps = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void

}
export type UsersPropsType = MapStatePropsType & MapDispatchToProps