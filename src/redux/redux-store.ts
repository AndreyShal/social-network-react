import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'
import {useDispatch} from "react-redux";


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
// export type AppDispatchType = ThunkDispatch<AppStateType, unknown, AnyAction>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store