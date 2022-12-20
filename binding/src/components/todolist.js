import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Todolist = props => {
const [val, setVal] = useState('');
const [value, setvalue] = useState([]);

const changeHandle =(e) =>{
    setVal(e.target.value)
}
const addFun = () => {
    setvalue([...value,val])
}
const deleteFun =(i)=>{
    console.log(i)
    value.splice(i,1)
    setvalue([...value])
   
}
    return <div>
        <input type='text' onChange={(e)=>changeHandle(e)}/>&nbsp;
        <button onClick={addFun}>Add-Todo</button>

        {value.map((val,i)=><h3>{val}<button onClick={()=>deleteFun(i)}>DELETE</button></h3>)}
    </div>;
};
export default Todolist;