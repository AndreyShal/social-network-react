import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {follow, getUsers, toggleFollowingProgress, unfollow, UsersType,} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapStatePropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

type MapDispatchToProps = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void

}
export type UsersPropsType = MapStatePropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
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