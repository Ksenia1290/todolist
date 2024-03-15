import React, { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';
import { v1 } from 'uuid';

export type FilterValuesType = "all"|"complited"|"active";
type TodolistType={
    id:string
    title:string
    filter:FilterValuesType
}
function App() {

    let [tasks, setTasks]=useState<Array<TaskType>>([
{id:v1(), title:"HTML&CSS", isDone:true},
{id:v1(), title:"JS", isDone:true},
{id:v1(), title:"React", isDone:true},
    ]);
   

 let [filter,setFilter]= useState<FilterValuesType>("all");
 

function removeTask(id:string){
let filteredTasks = tasks.filter( t => t.id !==id)
setTasks(filteredTasks);
}

function addTask(title:string) {
    let newTask = {id:v1(), title: title, isDone:false}
    let newTasks = [newTask,...tasks];
    setTasks(newTasks);
}

function changeStatus(taskId:string,isDone:boolean){
let task =  tasks.find( (t) => t.id ===taskId )
if(task){ 
    task.isDone = isDone;
}
setTasks([ ...tasks ]);
}

function changeFilter (value: FilterValuesType){
    setFilter(value);
}

let todolists:Array<TodolistType>=[
    {id:v1(),title:"What to learn",filter:"active"},
    {id:v1(),title:"What to buy",filter:"complited"}
]
    return (
        <div className="App">
             {
             todolists.map((tl)=>{
                let tasksForTodolist = tasks;
                if (filter ==="complited"){
                    tasksForTodolist= tasks.filter(t=> t.isDone===true);
                }
                if (filter ==="active"){
                    tasksForTodolist= tasks.filter(t=> t.isDone===false);
                }
                return <Todolist 
                title={tl.title}
                tasks={ tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeTaskStatus={changeStatus}
                filter={tl.filter}
                />
             })
             }
        
    </div>
    );
}   

export default App