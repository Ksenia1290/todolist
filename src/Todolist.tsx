import React, { ChangeEvent, useState } from "react";
import { FilteredValuesType } from "./App";

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

    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
}

    return(<div>
            <h3>{props.title}</h3>
            <div>
            <input value={newTaskTitle} 
                    onChange={onChangeHandler}/>

            <button onClick={ ()=>{
                    props.addTask(newTaskTitle);
                    setNewTaskTitle("");
                    } }>+</button>
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
                    <button onClick={() => {props.removeTask(t.id)}}>X</button>
                    </li>
                    })}
                    </ul>
                    <div>
                        <button onClick={()=>{props.changeFilter("all")}}>All</button>
                        <button onClick={()=>{props.changeFilter("active")}}>Active</button>
                        <button onClick={()=>{props.changeFilter("complited")}}>Completed</button>
                    </div>
                </div>
            
        );
    }
    

    function setTitle(value: string) {
        throw new Error("Function not implemented.");
    }
    