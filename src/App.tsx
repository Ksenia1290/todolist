import React, { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';

export type FilteredValuesType = "all"|"complited"|"active";

function App() {

    let [tasks, setTasks]=useState<Array<TaskType>>([
{id:1, title:"HTML&CSS", isDone:true},
{id:2, title:"JS", isDone:true},
{id:3, title:"React", isDone:true},
    ]);

    let [filter,setFilter]= useState<FilteredValuesType>("all");

function removeTask(id:number){
let filteredTasks = tasks.filter( t => t.id !==id)
setTasks(filteredTasks);
}

let tasksForTodolist = tasks;
if (filter ==="complited"){
    tasksForTodolist= tasks.filter(t=> t.isDone===true);
}
if (filter ==="active"){
    tasksForTodolist= tasks.filter(t=> t.isDone===false);
}


    return (
        <div className="App">
        <Todolist title="What to learn"
         tasks={ tasksForTodolist}
         removeTask={removeTask}/>
       </div>
    );
}   

export default App