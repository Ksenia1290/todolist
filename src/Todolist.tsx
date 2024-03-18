import React, { ChangeEvent, useState } from "react";
import { FilterValuesType } from "./App";


export type TaskType={
    id:string
    title:string
    isDone:boolean
}

type PropsType={
    id:string
    title:string
    tasks:Array<TaskType>
    removeTask: (taskId:string,todolistId:string)=>void
    changeFilter: (value:FilterValuesType,todolistId:string)=>void
    addTask:(title:string,todolistId:string)=>void
    changeTaskStatus: (taskId:string,isDone:boolean,todolistId:string)=>void
    filter:FilterValuesType
    removeTodolist:(todolistId:string)=>void
}

export function Todolist(props: PropsType) {
    const[newTaskTitle, setNewTaskTitle]=useState("");
   
    let[title, setTitle]=useState('')
    let[error, setError]=useState<string|null>(null)

    const addTask=()=>{
        if (title.trim()!==''){
            props.addTask(title.trim(),props.id);
            setTitle('');
        }else{
            setError('Title is reguired');
        }
    }

//const onNewTitleChangeHandler= (e: ChangeEvent<HTMLInputElement>)=>{
 //   setNewTaskTitle(e.currentTarget.value)
//}
const onChangeHandler= (e: ChangeEvent<HTMLInputElement>)=>{
      setTitle(e.currentTarget.value)
   }
   

//const addnewTask =()=> {props.addTask(newTaskTitle);
   // setNewTaskTitle("");}

const onAllClickHandler= ()=>props.changeFilter("all",props.id);
const onActiveClickHandler= ()=>props.changeFilter("active",props.id);
const onCompletedClickHandler= ()=>props.changeFilter("complited",props.id);
const removeTodolist=()=>{
    props.removeTodolist(props.id);
}

return(<div>
        <h3>{props.title}<button onClick={removeTodolist}>x</button></h3>
    <div>
        <input value={title} 
                onChange={onChangeHandler}
                className={error ?'error':''}
        />
        <button onClick={ addTask }>+</button>
    </div>
    <ul>
        {props.tasks.map((t)=>{
        const onClickHandler =() =>{props.removeTask(t.id,props.id)}
        const onChangeHandler=(e:ChangeEvent<HTMLInputElement>) => {
        props.changeTaskStatus(t.id, e.currentTarget.checked,props.id);
        }
return  <li key={t.id} className={t.isDone? "is-done":''}>
        <input type="checkbox"
                onChange={onChangeHandler}
                checked={t.isDone}/> 
            <span>{t.title}</span>
            <button onClick={onClickHandler}>X</button>
        </li>
            })}
    </ul>
            <div>
                <button className={props.filter==="all"? 'active-filter':''}
                onClick={onAllClickHandler}>All</button>
                <button  className={props.filter==="active"? 'active-filter':''}
                onClick={onActiveClickHandler}>Active</button>
                <button  className={props.filter==="complited"? 'active-filter':''}
                onClick={onCompletedClickHandler}>Completed</button>
            </div>
    </div>
    );
    }
    
