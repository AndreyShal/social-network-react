import React, {ChangeEvent, createRef, LegacyRef, RefObject} from 'react';
import './App.css';
// import Test1 from "./Test1";
import {BrowserRouter, Route} from "react-router-dom";
import store, {PostType, RootStateType, StoreType} from "./redux/state";
import {Header} from "./components/Header";
import {Navbar} from "./components/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {message} from "antd";


type AppProps = {
    store: StoreType
    state: RootStateType
    addPost: (postMessage: string) => void
    updateNewPostText: (newMessage: string) => void
}


function App(props: AppProps) {

    // let message = state.profilePage.posts[0].message;
    // let message2 = state.profilePage.posts[1].message;


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>

                    <Route
                        path={"/dialogs"}
                        render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                               messages={props.state.dialogsPage.messages}/>}
                    />
                    <Route
                        path={"/profile"}
                        render={() => <Profile posts={props.state.profilePage.posts} addPost={props.addPost}/>}
                    />
                    <Route path={"/hello"}
                           render={() => <HelloMessage message={props.state.profilePage.messageForNewPost} posts={props.state.profilePage.posts} newPostText={props.state.profilePage.messageForNewPost}
                                                       addPostCallback={props.addPost} updateNewPostTextCallback={props.updateNewPostText}/>}/>
                </div>

                {/*<Test1/>*/}
                {/*Hello, samurai! Let's go!*/}
                {/*<Route path={"/hello"} render={() => <HelloMessage message={message}/>}/>*/}
                {/*<Route path={"/bay"}  render={() => <BayMessage message={message2}/>}/>*/}
            </div>
        </BrowserRouter>
    );
}

export default App;

type MessageTypeProps = {
    newPostText: string
    message: string
    posts: Array<PostType>
    addPostCallback: (postCallback: string) => void
    updateNewPostTextCallback: (newText: string) => void
}

const HelloMessage = (props: MessageTypeProps) => {
    const textareaRef = createRef<HTMLTextAreaElement>();

    const addPost = () => {
        // props.addPostCallback(props.message)
        props.updateNewPostTextCallback("")
    }

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostTextCallback(e.currentTarget.value)
        // props.addPostCallback(e.currentTarget.value)
    }
    return (
        <div>
            <h1>{props.message}</h1>
            <hr/>
            <div><textarea ref={textareaRef} value={props.newPostText} onChange={newTextChangeHandler}></textarea></div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <hr/>
            {/*{props.posts.map(el => <p>{el.message}</p>)}*/}
            {props.newPostText}
        </div>
    )
}

const BayMessage: React.FC<MessageTypeProps> = (props) => {
    return <h1>{props.message}</h1>
}
