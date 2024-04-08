import React from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import ErrorSnackbar from "./components/ErrorSnackbar/ErrorSnackbar";
import {connect} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {compose} from "redux";
import {Preloader} from "./components/common/Preloader/Preloader";
import {initializeApp} from "./redux/app-reducer";

class App extends React.Component<AppProps> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.isInitialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <ErrorSnackbar/>
                <HeaderContainer/>
                <Navbar/>
                <div className={"app-wrapper-content"}>

                    <Route
                        path={"/dialogs"}
                        render={() => <DialogsContainer/>}
                    />
                    <Route
                        path={"/profile/:userId?"}
                        render={() => <ProfileContainer/>}
                    />
                    <Route
                        path={"/users"}
                        render={() => <UsersContainer/>}
                    />
                    <Route
                        path={"/login"}
                        render={() => <Login/>}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): mapStateToProps => {
    return {
        isInitialized: state.app.isInitialized
    }
}
const mapDispatchToProps: mapDispatchToProps = {
    initializeApp
}

export default compose<React.ComponentType>(withRouter, connect(mapStateToProps, mapDispatchToProps))(App);

//types
type mapStateToProps = {
    isInitialized: boolean
}
type mapDispatchToProps = {
    initializeApp: () => void
}
type AppProps = mapDispatchToProps & mapStateToProps