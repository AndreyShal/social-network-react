import React, {ChangeEvent, createRef, LegacyRef, RefObject} from 'react';
import './App.css';
// import Test1 from "./Test1";
import {BrowserRouter, Route} from "react-router-dom";
import store, {ActionType, PostType, RootStateType, StoreType} from "./redux/store";
import {Header} from "./components/Header";
import {Navbar} from "./components/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {message} from "antd";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


type AppProps = {}


function App(props: AppProps) {

    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>

                    <Route
                        path={"/dialogs"}
                        render={() => <DialogsContainer/>}
                    />
                    <Route
                        path={"/profile"}
                        render={() => <Profile/>}
                    />
                </div>
            </div>
    );
}

export default App;