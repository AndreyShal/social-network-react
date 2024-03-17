import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleIsFetching,
    unfollow,
    UsersType,
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

type MapStatePropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type MapDispatchToProps = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (page: number) => void
    setUsersTotalCount: (page: number) => void
    toggleIsFetching: (isFetching: boolean) => void

}
export type UsersPropsType = MapStatePropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

    }
}

const mapDispatchToProps: MapDispatchToProps = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching
}

class UsersContainer extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.setUsersTotalCount(data.totalCount)
            this.props.toggleIsFetching(false)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.toggleIsFetching(false)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage} users={this.props.users} onPageChanged={this.onPageChanged}
                   follow={this.props.follow} unfollow={this.props.unfollow}/>
        </>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)