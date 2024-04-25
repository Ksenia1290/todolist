import { ChangeEvent } from "react";
import { FilterValuesType } from "./App";
import { AddItemForm } from "./AddItemForm";
import { EditableSpan } from "./EditableSpan";
import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

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
    changeTaskStatus:(taskId:string,isDone:boolean,todolistId:string)=>void
    changeTaskTitle:(taskId:string,newTitle:string,todolistId:string)=>void
    filter:FilterValuesType
    removeTodolist:(todolistId:string)=>void
    changeTodolistTitle:(id:string,newTitle:string)=>void
}

export function Todolist(props: PropsType) {
const onAllClickHandler= ()=>props.changeFilter("all",props.id);
const onActiveClickHandler= ()=>props.changeFilter("active",props.id);
const onCompletedClickHandler= ()=>props.changeFilter("complited",props.id);
const removeTodolist=()=>{props.removeTodolist(props.id)};
const changeTodolistTitle=(newTitle:string)=>{
    props.changeTodolistTitle(props.id,newTitle)}
const addTask=(title:string)=>{ props.addTask(title,props.id)}
//value={props.title} 
return(<div>
        <h3><EditableSpan title={props.title} onChange={changeTodolistTitle}/>
        
        <IconButton aria-label='delete' onClick={removeTodolist}>
            <Delete/>
            </IconButton>
        </h3>
        <AddItemForm addItem={addTask}/>
    <ul>
        {props.tasks.map((t)=>{
        const onClickHandler =() =>{props.removeTask(t.id,props.id)}
        const onChangeStatusHandler=(e:ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue=e.currentTarget.checked;
        props.changeTaskStatus(t.id, newIsDoneValue,props.id);
        }
        const onChangeTitleHandler=(newValue:string) => {
        props.changeTaskTitle(t.id, newValue,props.id);
        }


return  <li key={t.id} className={t.isDone? "is-done":''}>
           <input type="checkbox"
                  onChange={onChangeStatusHandler}
                  checked={t.isDone}/> 
           <EditableSpan title={t.title} 
                         onChange={onChangeTitleHandler}/>
           <button onClick={onClickHandler}>X</button>
           <IconButton onClick={onClickHandler}>
            <Delete/>
           </IconButton>
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
   