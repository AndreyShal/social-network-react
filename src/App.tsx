import React from 'react';
import './App.css';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import ErrorSnackbar from "./components/ErrorSnackbar/ErrorSnackbar";
import {connect, Provider} from "react-redux";
import store, {AppStateType} from "./redux/redux-store";
import {compose} from "redux";
import {Preloader} from "./components/common/Preloader/Preloader";
import {initializeApp} from "./redux/app-reducer";
// import {Preloader} from "src/components/common/Preloader/Preloader";

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

const AppContainer  = compose<React.ComponentType>(withRouter, connect(mapStateToProps, mapDispatchToProps))(App);

export const SamuraiJSApp = (props:any)=> {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

//types
type mapStateToProps = {
    isInitialized: boolean
}
type mapDispatchToProps = {
    initializeApp: () => void
}
type AppProps = mapDispatchToProps & mapStateToProps