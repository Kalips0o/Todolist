import React, {ChangeEvent, useState} from "react";


type EditableSpanPropsType = {
    title: string
    onChange: (newValue:string)=>void
}

export function EditableSpan(props: EditableSpanPropsType) {

    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState("");


    const activateeditMode = () => {
        setEditMode(true);
        setTitle(props.title);
    };

    const activateVievMode = () => {
        setEditMode(false);
        props.onChange(title)
    }
    const oneChangeTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)


    return editMode ?
        <input value={title} onChange={oneChangeTitle} onBlur={activateVievMode} autoFocus/>
        : <span onDoubleClick={activateeditMode}>{props.title}</span>
}