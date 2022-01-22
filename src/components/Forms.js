import './App.css';
import React, {useState} from 'react';
import firebase from '../util/firebase';

export default function Form(){
    //to prevent refreshing every single time..
    e.preventDefault();
    const [taskName,setTaskName] = useState="";
    const createTask = (e) =>{
        const taskRef = firebase.database().ref("Tasks");
        const create ={
            taskName,
            completed: false,
        }
        //send it to database
        taskRef.push(create)
}
    const handleChange = (e) => {
        setTaskName(e.target.value);
}
  return (
    <div className="App">
       <form onSubmit={createTask}>
           <input
            type="text"
            placeholder="Enter a task.."
            className="task-input"
            value={taskName}
            required
            onChange={handleChange}
           />
           <button className="button-add" type="submit">Create</button>
       </form>
    </div>
  );
}