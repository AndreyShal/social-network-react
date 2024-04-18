import {addMessageActionCreator, DialogPageType} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import React from "react";


type MapStatePropsType = {
    dialogsPage: DialogPageType
    isAuth: boolean
}

type MapDispatchToProps = {
    addMessage: (text: string) => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
})

// const mapStateToPropsForRedirect = (state: AppStateType): {isAuth: boolean} => ({
//     isAuth: state.auth.isAuth
// })

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        addMessage: (text: string) => {
            dispatch(addMessageActionCreator(text))
        },
    }
}
export default compose<React.ComponentType>(connect(mapStateToProps,mapDispatchToProps),withAuthRedirect)(Dialogs)