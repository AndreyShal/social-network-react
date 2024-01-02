import s from "./dialogs.module.css"
import clsx from "clsx";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: string
}

const DialogItem = (props: DialogItemPropsType) => {
    let path = `/dialogs/${props.id}`;
    return <div className={clsx(s.dialog,s.active)}><NavLink to={path}>{props.name}</NavLink></div>
}

type MessagePropsType = {
    message: string
}
const Message = (props: MessagePropsType) => {
    return <div className={s.dialog}>{props.message}</div>
}
export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={"Dimych"} id={"1"}/>
                <DialogItem name={"Andrey"} id={"2"}/>
                <DialogItem name={"Sveta"} id={"4"}/>
                <DialogItem name={"Sasha"} id={"5"}/>
                <DialogItem name={"Viktor"} id={"6"}/>
                <DialogItem name={"Valera"} id={"7"}/>
            </div>
            <div className={s.messages}>
                <Message message={"Hi"}/>
                <Message message={"How is your"}/>
                <Message message={"Hi"}/>
            </div>
        </div>
    )
}