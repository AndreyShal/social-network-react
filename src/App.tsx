import React from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route, withRouter} from "react-router-dom";
import {Navbar} from "components/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import ErrorSnackbar from "./components/ErrorSnackbar/ErrorSnackbar";
import {connect, Provider} from "react-redux";
import store, {AppStateType} from "./redux/redux-store";
import {compose} from "redux";
import {initializeApp} from "redux/app-reducer";
import {Preloader} from "components/common/Preloader/Preloader";
import {WithSuspense} from "hoc/withSuspense";
// import ProfileContainer from "components/Profile/ProfileContainer";
const ProfileContainer = React.lazy(() => import('components/Profile/ProfileContainer'))
const DialogsContainer = React.lazy(() => import('components/Dialogs/DialogsContainer'))

class App extends React.Component<AppProps> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.isInitialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <ErrorSnackbar/>
                <HeaderContainer/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route exact
                        path={"/"}
                        render={()=> <Redirect to={"/profile"}/>}/>
                    <Route
                        path={"/dialogs"}
                        render={WithSuspense(DialogsContainer)}/>
                    <Route
                        path={"/profile/:userId?"}
                        render={WithSuspense(ProfileContainer)}/>
                    <Route
                        path={"/users"}
                        render={() => <UsersContainer/>}
                    />
                    <Route exact
                        path={"/login"}
                        render={() => <Login/>}
                    />
                    <Route path={'*'} render={()=> <div>404 NOT FOUND</div>}/>
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

const AppContainer = compose<React.ComponentType>(withRouter, connect(mapStateToProps, mapDispatchToProps))(App);

export const SamuraiJSApp = (props: any) => {
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