import {addMessageActionCreator, DialogPageType, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


type MapStatePropsType = {
    dialogsPage: DialogPageType
}

type MapDispatchToProps = {
    addMessage: (text: string) => void
    onChangePost: (text: string) => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
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