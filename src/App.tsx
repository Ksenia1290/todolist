import { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';
import { v1 } from 'uuid';
import { AddItemForm } from './AddItemForm';
import { AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';


export type FilterValuesType = "all"|"complited"|"active";
type TodolistType={
    id:string
    title:string
    filter:FilterValuesType
}
type TasksStateType={
    [key:string]:Array<TaskType>
}

function App() {
function removeTask(id:string,todolistId:string){
let tasks = tasksObj[todolistId];
let filteredTasks = tasks.filter( t => t.id !==id);
tasksObj[todolistId]=filteredTasks;
setTasks({...tasksObj});}

function addTask(title:string,todolistId:string) {
    let newTask = {id:v1(), title: title, isDone:false}
    let tasks = tasksObj[todolistId];
    let newTasks = [newTask,...tasks];
    tasksObj[todolistId]=newTasks;
    setTasks({...tasksObj});
}

function changeStatus(taskId:string,isDone:boolean,todolistId:string){
//достанем нужный мвссив по todolistId
let tasks = tasksObj[todolistId];   
//найдем нужную таску 
let task =  tasks.find( (t) => t.id ===taskId )
//изменим таску ,если она нашлась
if(task){ 
   task.isDone = isDone;
//засетаем в стейт копию объекта чтобы React отреагировал перерисовкой
setTasks({...tasksObj});
}}

function changeTaskTitle(taskId:string,newTitle:string,todolistId:string){
    let tasks = tasksObj[todolistId];   
    let task =  tasks.find( (t) => t.id ===taskId )
    if(task){ 
        task.title = newTitle;
    setTasks({...tasksObj});
}}

function changeFilter (value: FilterValuesType,todolistId:string){
   let todolist=todolists.find(tl=>tl.id===todolistId);
   if(todolist){
    todolist.filter=value;
    setTodolists([...todolists]);
}}

function changeTodolistTitle(id:string,newTitle:string){
    const todolist= todolists.find(tl=>tl.id===id);
    if(todolist){
     todolist.title=newTitle;
     setTodolists([...todolists]);
    }}

function addTodolist(title:string){
        let todolist:TodolistType= {
            id:v1(),
            filter:'all',
            title:title
        }
    setTodolists([todolist,...todolists]);
    setTasks({
        ...tasksObj,
        [todolist.id]:[]
    })}
    
let todolistId1=v1();
let todolistId2=v1();
let [todolists,setTodolists]= useState <Array<TodolistType>>([
    {id:todolistId1,title:"What to learn",filter:"active"},
    {id:todolistId2,title:"What to buy",filter:"complited"}
]);

let removeTodolist= (todolistId:string)=>{
    let filteredTodolist=todolists.filter(tl => tl.id !==todolistId)
    setTodolists(filteredTodolist);
    delete tasksObj[todolistId];
    setTasks({...tasksObj});
}
 

let [tasksObj, setTasks]=useState<TasksStateType>({
    [todolistId1]:[
        {id:v1(), title:"HTML&CSS", isDone:true},
        {id:v1(), title:"JS", isDone:true},
        {id:v1(), title:"React", isDone:true}
    ],
    [todolistId2]:[
        {id:v1(), title:"Book", isDone:false},
        {id:v1(), title:"Milk", isDone:true},
    ],           
});

    return (
        <div className="App">
          <AppBar position=  'absolute' >
              <Toolbar>
                <IconButton edge='start' color='inherit' aria-label='menu'>
                    <Menu/>
                </IconButton>
                <Typography variant='h6'>
                    News
                </Typography>
                <Button color='inherit'>Login</Button>
              </Toolbar>
          </AppBar>
          <Container fixed style={{padding:'30px'}}>
            <Grid container style={{padding:'10px'}}>
               <AddItemForm  addItem={addTodolist}/>
            </Grid>
            <Grid container spacing={2}  >
             {
             todolists.map((tl)=>{
                let tasksForTodolist = tasksObj[tl.id];
                if (tl.filter ==="complited"){
                    tasksForTodolist= tasksForTodolist.filter(t=> t.isDone===true);
                }
                if (tl.filter ==="active"){
                    tasksForTodolist= tasksForTodolist.filter(t=> t.isDone===false);
                }
                return <Grid item >
                    <Paper style={{padding:'10px'}}>
                <Todolist 
                key={tl.id}
                id={tl.id}
                title={tl.title}
                tasks={ tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeTaskStatus={changeStatus}
                changeTaskTitle={changeTaskTitle}
                filter={tl.filter}
                removeTodolist={removeTodolist}
                changeTodolistTitle={changeTodolistTitle}
                />
                </Paper>
                </Grid>
             })
             }
             </Grid>
        </Container>
    </div>
    );
}   

export default App