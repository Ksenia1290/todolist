import React from "react"
import { ChangeEvent, useState } from "react"

type AddItemFormPropsType={
    addTask:(title:string,todolistId:string)=>void
    id:string
}
export function AddItemForm(props: AddItemFormPropsType ){
    let[title, setTitle]=useState('')
    const onChangeHandler= (e: ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.currentTarget.value)
     }
     let[error, setError]=useState<string|null>(null)
     const addTask=()=>{
        if (title.trim()!==''){
            props.addTask(title.trim(),props.id);
            setTitle('');
        }else{
            setError('Title is reguired');
        }
    }
    return  <div>
    <input value={title} 
            onChange={onChangeHandler}
            className={error ?'error':''}
    />
    <button onClick={ addTask }>+</button>
</div>
}

