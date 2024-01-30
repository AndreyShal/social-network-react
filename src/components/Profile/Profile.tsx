import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, PostType} from "../../redux/state";

type ProfileProps = {
    posts: PostType[]
    dispatch: (action: ActionType) => void
}

export const Profile = (props: ProfileProps) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} dispatch={props.dispatch}/>
        </div>
    )
}