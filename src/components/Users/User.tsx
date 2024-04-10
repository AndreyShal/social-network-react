import styles from "./users.module.css";
import userPhoto from "../../assests/images/user.jpg";
import React from "react";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersProps = {
    user: UsersType
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    followingInProgress: number[]
}

export const User = ({user,...props}: UsersProps) => {

    const FollowChange = () => {
        props.follow(user.id)
    }

    const UnFollowChange = () => {
        props.unfollow(user.id)
    }

    return (
        <div>
            <span>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                    <img src={user.photos.small ? user.photos.small : userPhoto}
                         className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                          onClick={UnFollowChange}>Unfollow</button> :
                        <button disabled={props.followingInProgress.some(id => id === user.id)}
                                onClick={FollowChange}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
        </div>
    )
}