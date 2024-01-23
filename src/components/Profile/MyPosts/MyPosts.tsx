import React from "react";
import s from "./myPost.module.css"
import {PostType} from "../../../redux/state";
import {Post} from "./Post/Post";


type MyPostsProps = {
    posts: PostType[]
    addPost: (postMessage: string) => void
}

export const MyPosts = (props: MyPostsProps) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        let text = newPostElement.current?.value;
        if(text) props.addPost(text)
    }

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div><textarea ref={newPostElement}></textarea></div>
            <div>
                <button onClick={addPost}>Add post</button>
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