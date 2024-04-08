import React from "react"
import { ChangeEvent, useState } from "react"

type AddItemFormPropsType={
    addItem:(title:string,todolistId:string)=>void
    id:string
}
export function AddItemForm (props: AddItemFormPropsType ){
    let[title, setTitle]=useState('')
    let[error, setError]=useState<string|null>(null)
     
    const onChangeHandler= (e: ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.currentTarget.value)
     }
     const addTask=()=>{
        if (title.trim()!==''){
            props.addItem(title.trim(),props.id);
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

