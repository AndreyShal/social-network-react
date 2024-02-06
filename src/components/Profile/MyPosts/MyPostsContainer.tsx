import React from "react";
import {ActionType, RootStateType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost
    }
}

const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
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