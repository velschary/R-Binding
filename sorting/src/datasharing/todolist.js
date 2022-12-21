import React, { useState } from 'react';
import Todos from './todos';

const Todolist = props => {
    const [val, setVal]=useState("")
    const [value, setValue]=useState(["rajendra"])
    const addTodo =()=>{
        setValue([...value,val])
    }
    const deleteTodo =(i)=>{
        value.splice(i, 1)
        setValue([...value])
    }
    return <div className='todolistclass'>
        <h1>iam todolist component</h1>
        <button onClick={props.alertFun}>calling app from todolist</button><br/><br/>
        <input type="text" onChange={(e)=>setVal(e.target.value)}/>&nbsp;
        <button onClick={addTodo}>Add Todo</button>
        {value.map(
            (value, index)=><Todos value={value} index={index} deleteTodo={deleteTodo}/>
        )}
    </div>;
};

export default Todolist;