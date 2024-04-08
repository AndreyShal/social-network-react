import React, {ChangeEvent, ReactNode} from "react";

const FormControl = (props: FormControl) => {
    const hasError = props.touched && props.errors
    return (
        <>
            <div>
                {props.children}
            </div>
            {hasError && <div style={{color: "red"}}>{props.errors}</div>}
        </>
    )
}


export function Textarea(props: Textarea) {
    const hasError = props.touched && props.errors
    return (
        <FormControl errors={props.errors} touched={props.touched}>
            <textarea placeholder={props.placeholder ? props.placeholder : "Enter your message"} name={props.name}
                      value={props.value} onChange={props.onChange}
                      style={{border: hasError ? "1px solid red" : ""}}/>
        </FormControl>
    )
}

export function Input(props: Input) {
    const hasError = props.touched && props.errors
    return (
        <>
            <div>
                <input type={props.type} placeholder={props.placeholder ? props.placeholder : "Enter your message"}
                       name={props.name} value={props.value} onChange={props.onChange}
                       style={{border: hasError ? "1px solid red" : ""}}/>
            </div>
        </>
    )
}

//types
type FormControl = {
    children: ReactNode
    touched: boolean | undefined
    errors: string | undefined
}

type Textarea = {
    placeholder?: string
    name: string
    value: string
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    touched: boolean | undefined
    errors: string | undefined
}

type Input = {
    placeholder?: string
    type: string
    name: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    touched: boolean | undefined
    errors: string | undefined
}