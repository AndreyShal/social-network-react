import s from "./dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {
    DialogPageType,
} from "../../redux/store";
import {ChangeEvent, createRef} from "react";

type DialogsPropsType = {
    dialogsPage: DialogPageType
    addMessage: (text: string) => void
    onChangePost: (text: string) => void

}

export const Dialogs = (props: DialogsPropsType) => {
    const {dialogs, messages, newMessageBody} = props.dialogsPage;
    const textareaRef = createRef<HTMLTextAreaElement>();

    const addMessageHandler = () => {
        if (!textareaRef.current) return
        props.addMessage(textareaRef.current.value)
    }

    const onChangePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangePost(e.currentTarget.value)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs.map((el) => {
                    return <DialogItem key={el.id} id={el.id} name={el.name}/>
                })}
            </div>
            <div className={s.messages}>
                {messages.map(el => {
                    return <Message key={el.id} message={el.message}/>
                })}
            </div>
            <div>
                <textarea ref={textareaRef} value={newMessageBody} onChange={onChangePostHandler}/>
                <button onClick={addMessageHandler}>add message</button>
            </div>
        </div>
    )
}