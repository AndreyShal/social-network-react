import React, {useState} from 'react';
import './App.css';
// import Test1 from "./Test1";
import {BrowserRouter, Route} from "react-router-dom";
import state from "./redux/state";
import {Header} from "./components/Header";
import {Navbar} from "./components/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";


function App() {

    let message = state.profilePage.posts[0].message;
    let message2 = state.profilePage.posts[1].message;


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/dialogs"} component={Dialogs}/>
                    <Route path={"/profile"} component={Profile}/>
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

type MessageType = {
    message: string
}

const HelloMessage: React.FC<MessageType> = (props) => {
    return <h1>{props.message}</h1>
}


const BayMessage: React.FC<MessageType> = (props) => {
    return <h1>{props.message}</h1>
}
