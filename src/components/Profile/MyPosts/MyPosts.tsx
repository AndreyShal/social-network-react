import React, {useState} from "react";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return <div>My posts
        <div><textarea></textarea>
            <button>Add post</button>
        </div>
        <div>
            <Post message={"I post 1"}/>
            <Post message={"I post 2"}/>
            <Post message={"I post 3"}/>
        </div>
    </div>
}