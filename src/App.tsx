import React, { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';

function App() {

    let tasks=[
{id:1, title:"HTML&CSS", isDone:true},
{id:1, title:"JS", isDone:true},
{id:1, title:"React", isDone:true},
    ]

useState(tasks);

function removeTask(id:number){
tasks = tasks.filter( t=>(t.id !==id))
}


    return (
        <div className="App">
        <Todolist title="What to learn"
         tasks={tasks}
         removeTask={removeTask}/>
       </div>
    );
}   

export default App