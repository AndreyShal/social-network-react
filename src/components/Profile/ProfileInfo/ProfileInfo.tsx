import React from "react";
import s from "./profileInfo.module.css"

export const ProfileInfo = () => {
    return (<div>
            <div><img src={"https://www.designmantic.com/blog/wp-content/uploads/2013/09/Logo-Unique-718x300.jpg"}/>
            </div>
            <div className={s.descriptionBlock}>ava + description</div>
        </div>
    )
}