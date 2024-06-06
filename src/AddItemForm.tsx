import { Button, TextField } from "@mui/material"
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

    <TextField value={title} 
               variant={'outlined'}
               label={'Type value'}
               onChange={onChangeHandler}
               error={!!error} /*конвертация !! псевдоистина и псевдолож*/
               helperText={error}
    />
    <Button onClick={ addTask } variant={'contained'} color={'primary'}>+</Button>
</div>
}

 