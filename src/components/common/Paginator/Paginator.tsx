import styles from "../../../components/Users/users.module.css";
import React from "react";

type UsersProps = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
}

export const Paginator = ({totalUsersCount, pageSize, onPageChanged, currentPage}: UsersProps) => {

    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (<div>
        <div>
            {pages.map((p) => {
                const setSelected = () => {
                    onPageChanged(p)
                }
                return <span key={p} className={currentPage === p ? styles.selectedPage : ""}
                             onClick={setSelected}>{p} </span>
            })}
        </div>
    </div>)
}