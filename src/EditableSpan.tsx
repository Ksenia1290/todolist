import React, { useState } from "react"


type EditableSpanPropsType={
    
    title:string
}
export function EditableSpan(props:EditableSpanPropsType){
let [editMode,setEditMode]= useState(true)

const activateEditMode=()=>setEditMode(true)

   return editMode
    ? <input value={props.title}/>
    : <span onDoubleClick={activateEditMode}>{props.title}</span>
}