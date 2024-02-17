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
}

export function Todolist(props: PropsType) {

    const[newTaskTitle, setNewTaskTitle]=useState("");

    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>) => {
    
    return(<div>
            <h3>{props.title}</h3>
            <div>
            <input value={newTaskTitle} 
                    onChange={(e)=>{
                    setNewTaskTitle( e.currentTarget.value)
                    }}/>

            <button onClick={ ()=>{
                    props.addTask(newTaskTitle);
                    setNewTaskTitle("");
                    } }>+</button>
            </div>
            <ul>
                {props.tasks.map((t)=>{

                const onChangeHandler=(e:ChangeEvent<HTMLInputElement>) => {
                console.log (t.id + 'whant to change')
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
    
    