import React, { useState } from 'react'
import ListItem from './ListItem';

export default function TodoList() {
//* STATES PART
const [list,setList] = useState([]);
const [newTask,setNewTask] = useState("");



//*function part
const getTask = (e) => {
    setNewTask(e.target.value)
}

const addTask = (e) => {
    e.preventDefault();

    if (newTask.length === 0){
        alert('empty input please provide task name');
    }
    else if(list.includes(newTask)){
        alert('duplicated task');
    }
    else if(list.length === 5){
        alert('max tasks is 5, enough for today');
    }
    else{
        setList([...list,newTask]);

    }
    
    document.getElementById('form').reset();
    setNewTask('')
}



//* display part
  return (
    <div className='container text-center m-3'>
        <h1>Today's tasks</h1>
        <h3>( To do ) </h3>
        <h4>NUMBER OF TASKS REMAINING : 
            {
                list.length === 0 ? "5" :
                list.length === 1 ? "4" :
                list.length === 2 ? "3" :
                list.length === 3 ? "2" :
                list.length === 4 ? "1" : "0"
            }
        </h4>
        <form id='form'>
        <input type='text' placeholder='add new task' className='form-control' onChange={(e)=>getTask(e)}/>
        <button className='btn btn-primary mt-2' onClick={addTask}>submit new task</button>

        </form>
        
        
    
        {
            list.map((t,index)=>(
                <ListItem task={t} key={index}/>
            ))
        }

    </div>
  )
}
