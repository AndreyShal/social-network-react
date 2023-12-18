import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={'content'}>
            <div><img src={"https://www.designmantic.com/blog/wp-content/uploads/2013/09/Logo-Unique-718x300.jpg"}/></div>
            <div>ava + description</div>
            <MyPosts/>
        </div>
    )
}