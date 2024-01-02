import React, {useState} from "react";
import {Post} from "./Post/Post";
import s from "./myPost.module.css"

export const MyPosts = () => {
    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div><textarea></textarea></div>
            <div><button>Add post</button></div>
        </div>
        <div className={s.posts}>
            <Post message={"I post 1"} likesCount={0}/>
            <Post message={"I post 2"} likesCount={10}/>
            <Post message={"I post 3"} likesCount={20}/>
        </div>
    </div>
}