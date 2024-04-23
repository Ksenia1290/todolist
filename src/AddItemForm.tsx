import { Button } from "@mui/material"
import { ChangeEvent, useState } from "react"

type AddItemFormPropsType={
    addItem:(title:string)=>void
}
export function AddItemForm (props: AddItemFormPropsType ){
    let[title, setTitle]=useState('')
    let[error, setError]=useState<string|null>(null)
     
    const onChangeHandler= (e: ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.currentTarget.value)
     }
     const addTask=()=>{
        if (title.trim()!==''){
            props.addItem(title.trim());
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
    <Button onClick={ addTask } variant={'contained'}>+</Button>

    {error &&<div className="error-message">{error}</div>}
</div>
}

