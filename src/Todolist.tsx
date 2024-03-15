import React, { ChangeEvent, useState } from "react";
import { FilterValuesType } from "./App";


export type TaskType={
    id:string
    title:string
    isDone:boolean
}

type PropsType={
    title:string;
    tasks:Array<TaskType>
    removeTask: (taskId:string)=>void
    changeFilter: (value:FilterValuesType)=>void
    addTask:(title:string)=>void
    changeTaskStatus: (taskId:string,isDone:boolean)=>void
    filter:FilterValuesType
}

export function Todolist(props: PropsType) {
    const[newTaskTitle, setNewTaskTitle]=useState("");
   
    let[title, setTitle]=useState('')
    let[error, setError]=useState<string|null>(null)

    const addTask=()=>{
        if (title.trim()!==''){
            props.addTask(title.trim());
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

const onAllClickHandler= ()=>props.changeFilter("all");
const onActiveClickHandler= ()=>props.changeFilter("active");
const onCompletedClickHandler= ()=>props.changeFilter("complited");

return(<div>
        <h3>{props.title}</h3>
    <div>
        <input value={title} 
                onChange={onChangeHandler}
                className={error ?'error':''}
        />
        <button onClick={ addTask }>+</button>
    </div>
    <ul>
        {props.tasks.map((t)=>{
        const onClickHandler =() =>{props.removeTask(t.id)}
        const onChangeHandler=(e:ChangeEvent<HTMLInputElement>) => {
        props.changeTaskStatus(t.id, e.currentTarget.checked);
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
    
