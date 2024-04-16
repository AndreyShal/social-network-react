import React from "react";
import {UsersType} from "../../redux/users-reducer";
import {Paginator} from "../../components/common/Paginator/Paginator";
import {User} from "./User";

type UsersProps = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UsersType[]
    onPageChanged: (pageNumber: number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    followingInProgress: number[]
}

const Users = ({users, ...props}: UsersProps) => {

    return (<div>
        <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} onPageChanged={props.onPageChanged}
                   currentPage={props.currentPage} portionSize={10}/>
        <div>
            {users.map(u => {
                return <User key={u.id} user={u} follow={props.follow} unfollow={props.unfollow}
                             followingInProgress={props.followingInProgress}/>
            })}
        </div>
    </div>)
}

export default Users