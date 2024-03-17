import styles from "./users.module.css";
import userPhoto from "../../assests/images/user.jpg";
import React from "react";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";

type UsersProps = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UsersType[]
    onPageChanged: (pageNumber: number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}

const Users = (props: UsersProps) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (<div>
        <div>
            {pages.map((p) => {
                const setSelected = () => {
                    props.onPageChanged(p)
                }
                return <span key={p} className={props.currentPage === p ? styles.selectedPage : ""}
                             onClick={setSelected}>{p} </span>
            })}
        </div>
        {props.users.map(u => {

            const FollowChange = () => {
                usersAPI.follow(u.id).then(data => {
                    if (data.resultCode) {
                        props.follow(u.id)
                    }
                })
            }

            const UnFollowChange = () => {
                usersAPI.unFollow(u.id).then(data => {
                    if (data.resultCode) {
                        props.unfollow(u.id)
                    }
                })
            }

            return (
                <div key={u.id}>
            <span>
                <div>
                    <NavLink to={`/profile/${u.id}`}>
                    <img src={u.photos.small ? u.photos.small : userPhoto}
                         className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed ? <button onClick={UnFollowChange}>Unfollow</button> :
                        <button onClick={FollowChange}>Follow</button>}
                </div>
            </span>
                    <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
                </div>
            )
        })}
    </div>)
}

export default Users