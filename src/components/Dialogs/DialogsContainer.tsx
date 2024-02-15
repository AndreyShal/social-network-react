import {addMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {ActionType, RootStateType} from "../../redux/store";
import {AppStateType} from "../../redux/redux-store";

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        onChangePost: (text: string) => {
            dispatch(updateNewMessageBodyActionCreator(text))
        },
        addMessage: (text: string) => {
            dispatch(addMessageActionCreator(text))
        },
    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)