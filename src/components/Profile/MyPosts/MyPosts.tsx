import React, {ChangeEvent} from "react";
import s from "./myPost.module.css"
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";


export const MyPosts = (props: MyPostsPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {
        let text = newPostElement.current?.value;
        if(text)  props.addPost(text)
    }

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onPostChange(e.currentTarget.value)
    }

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div><textarea ref={newPostElement} value={props.messageForNewPost} onChange={newTextChangeHandler}></textarea></div>
            <div>
                <button onClick={addPostHandler}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {
                props.posts.map((el) => {
                    return <Post key={el.id} message={el.message} likesCount={el.likesCount}/>
                })
            }
        </div>
    </div>
}