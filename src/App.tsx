import React from 'react';
import './App.css';
import { Todolist } from './Todolist';

function App() {

    let tasks1=[
{id:1, title:"HTML&CSS", isDone:true},
{id:1, title:"JS", isDone:true},
{id:1, title:"React", isDone:true},
    ]

    return (
        <div className="App">
        <Todolist title="What to learn" tasks={tasks1}/>
       </div>
    );
}   

export default App