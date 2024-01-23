import s from "./dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogType, MessageType} from "../../redux/state";

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export const Dialogs = (props: DialogsPropsType) => {
    const {dialogs, messages} = props;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs.map((el) => {
                    return <DialogItem key={el.id} id={el.id} name={el.name} />
                })}
            </div>
            <div className={s.messages}>
                {messages.map(el => {
                    return <Message key={el.id} message={el.message}/>
                })}
            </div>
        </div>
    )
}