import React from "react"


type EditableSpanPropsType={
    editMode: boolean
    title:string
}
export function EditableSpan(props:EditableSpanPropsType){
   return props.editMode
    ? <input value={props.title}/>
    : <span>{props.title}</span>
}