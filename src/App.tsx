import React, { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';
import { v1 } from 'uuid';

export type FilteredValuesType = "all"|"complited"|"active";

function App() {

    let [tasks, setTasks]=useState<Array<TaskType>>([
{id:v1(), title:"HTML&CSS", isDone:true},
{id:v1(), title:"JS", isDone:true},
{id:v1(), title:"React", isDone:true},
    ]);
    console.log(tasks);

    

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
    task.isDone = isDone;}
  
}

let [filter,setFilter]= useState<FilteredValuesType>("all");
let tasksForTodolist = tasks;
if (filter ==="complited"){
    tasksForTodolist= tasks.filter(t=> t.isDone===true);
}
if (filter ==="active"){
    tasksForTodolist= tasks.filter(t=> t.isDone===false);
}


function changeFilter (value: FilteredValuesType){
    setFilter(value);
}

    return (
        <div className="App">
        <Todolist title="What to learn"
                  tasks={ tasksForTodolist}
                  removeTask={removeTask}
                  changeFilter={changeFilter}
                  addTask={addTask}/>
       </div>
    );
}   

export default App