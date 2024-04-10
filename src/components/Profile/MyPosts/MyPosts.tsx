import React from "react";
import s from "./myPost.module.css"
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {useFormik} from "formik";
import {maxLengthFn, requiredFn} from "../../../utils/validators/validators";
import {Textarea} from "../../common/Preloader/FormsControls/FormsControls";


export const MyPosts = React.memo((props: MyPostsPropsType)=> {

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <AddNewPostForm addPost={props.addPost}/>
        <div className={s.posts}>
            {
                props.posts.map((el) => {
                    return <Post key={el.id} message={el.message} likesCount={el.likesCount}/>
                })
            }
        </div>
    </div>
})

type AddNewPostForm = {
    addPost: (value: string) => void
}

type FormikErrorType = {
    newPostBody?: string
}

const AddNewPostForm = (props: AddNewPostForm) => {
    const formik = useFormik({
        initialValues: {
            newPostBody: "",
        },
        validate: values => {
            const errors: FormikErrorType = {}
            if (requiredFn(values.newPostBody)) {
                errors.newPostBody = requiredFn(values.newPostBody)
            }
            if (maxLengthFn(30)(values.newPostBody)) {
                errors.newPostBody = maxLengthFn(30)(values.newPostBody)
            }
            return errors
        },
        onSubmit: values => {
            props.addPost(values.newPostBody)
            formik.resetForm()
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <div>
                <Textarea placeholder={"Enter your message"} name={"newPostBody"} value={formik.values.newPostBody}
                          onChange={formik.handleChange} touched={formik.touched.newPostBody} errors={formik.errors.newPostBody}/>
                </div>
                <div>
                    <button type={"submit"}>Add post</button>
                </div>
            </div>
        </form>)
}