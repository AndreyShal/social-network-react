import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import {Header} from "./components/Header";
import {Navbar} from "./components/Navbar";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


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
                        path={"/profile/:userId"}
                        render={() => <ProfileContainer/>}
                    />
                    <Route
                        path={"/users"}
                        render={() => <UsersContainer/>}
                    />
                </div>
            </div>
    );
}

export default App;