import s from "../dialogs.module.css"
import clsx from "clsx";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogItemPropsType) => {
    let path = `/dialogs/${props.id}`;
    return <div className={clsx(s.dialog,s.active)}><NavLink to={path}>{props.name}</NavLink></div>
}
