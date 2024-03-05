import React from "react";
import {addPostActionCreator, PostType, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    posts: PostType[]
    messageForNewPost: string
}

type MapDispatchToProps = {
    onPostChange: (text: string) => void
    addPost: (text: string) => void
}
export type MyPostsPropsType = MapStatePropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        onPostChange: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: (text: string) => {
            if (text) dispatch(addPostActionCreator(text))
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)