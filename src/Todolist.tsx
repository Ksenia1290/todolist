import React, { ChangeEvent, useState } from "react";
import { FilteredValuesType } from "./App";
import { title } from "process";

export type TaskType={
    id:string
    title:string
    isDone:boolean
}

type PropsType={
    title:string;
    tasks:Array<TaskType>
    removeTask: (id:string)=>void
    changeFilter: (value:FilteredValuesType)=>void
    addTask:(title:string)=>void
    changeTaskStatus: (taskId:string,isDone:boolean)=>void
}

export function Todolist(props: PropsType) {
    const[newTaskTitle, setNewTaskTitle]=useState("");

const onNewTitleChangeHandler= (e: ChangeEvent<HTMLInputElement>)=>{
    setNewTaskTitle(e.currentTarget.value)
}

const addnewTask =()=> {props.addTask(newTaskTitle);
    setNewTaskTitle("");
}
const onAllClickHandler= ()=>props.changeFilter("all");
const onActiveClickHandler= ()=>props.changeFilter("active");
const onCompletedClickHandler= ()=>props.changeFilter("complited");

return(
    <div>
        <h3>{props.title}</h3>
    <div>
        <input value={newTaskTitle} 
                onChange={onNewTitleChangeHandler}
        />
        <button onClick={ addnewTask }>+</button>
    </div>
    <ul>
        {props.tasks.map((t)=>{
        const onChangeHandler=(e:ChangeEvent<HTMLInputElement>) => {
        props.changeTaskStatus(t.id, e.currentTarget.checked);
        }

return  <li><input type="checkbox"
            onChange={onChangeHandler}
            checked={t.isDone}
            /> 
            <span>{t.title}</span>
            <button onClick={() =>
            {props.removeTask(t.id)}}>X</button>
        </li>
                    })}
    </ul>
            <div>
                <button onClick={onAllClickHandler}>All</button>
                <button onClick={onActiveClickHandler}>Active</button>
                <button onClick={onCompletedClickHandler}>Completed</button>
            </div>
    </div>
    );
    }
    
