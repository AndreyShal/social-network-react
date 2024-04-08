import s from "./dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPropsType} from "./DialogsContainer";
import {useFormik} from "formik";
import {Textarea} from "../common/Preloader/FormsControls/FormsControls";
import {maxLengthFn, requiredFn} from "../../utils/validators/validators";

export const Dialogs = (props: DialogsPropsType) => {
    const dialogs = props.dialogsPage.dialogs;
    const messages = props.dialogsPage.messages;

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
            <AddMessageForm addMessage={(value) => props.addMessage(value)}/>
        </div>
    )
}

type FormikErrorType = {
    newMessageBody?: string
}

type AddMessageForm = {
    addMessage: (value: string) => void
}

const AddMessageForm = (props: AddMessageForm) => {

    const formik = useFormik({
        initialValues: {
            newMessageBody: "",
        },
        validate: values => {
            const errors: FormikErrorType = {}
            const newMessageBody = values.newMessageBody
            if (requiredFn(newMessageBody)) {
                errors.newMessageBody = requiredFn(newMessageBody)
            }
            if (maxLengthFn(30)(newMessageBody)) {
                errors.newMessageBody = maxLengthFn(30)(newMessageBody)
            }
            return errors
        },
        onSubmit: values => {
            props.addMessage(values.newMessageBody)
            formik.resetForm()
        },
    });

    return <form onSubmit={formik.handleSubmit}>
        <div>
            <Textarea
                placeholder={"Enter your message"}
                name="newMessageBody"
                value={formik.values.newMessageBody}
                onChange={formik.handleChange}
            touched={formik.touched.newMessageBody} errors={formik.errors.newMessageBody}/>
            <button type={"submit"}>add message</button>
        </div>
    </form>
}