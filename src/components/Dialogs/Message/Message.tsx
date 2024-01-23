import s from "../dialogs.module.css";

type MessagePropsType = {
    message: string
}
export const Message = (props: MessagePropsType) => {
    return <div className={s.dialog}>{props.message}</div>
}