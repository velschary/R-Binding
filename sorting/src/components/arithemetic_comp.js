import React, { useState } from 'react';
import { addition, muliplication, substraction } from '../util/servicefile';

const Arithemeticcomp = props => {
    const [fval, setFval] = useState()
    const [sval, setSval] = useState()
    const [rval, setRval] = useState()
    const add=()=>{
        setRval((addition(fval,sval)))
    }
    const sub=()=>{
        setRval((substraction(fval,sval)))
    }
    const mul=()=>{
        setRval((muliplication(fval,sval)))
    }
    return <div className='arthclass'>
        <input type='number' onChange={(e)=>setFval(e.target.value)}/><br/><br/>
        <input type='number' onChange={(e)=>setSval(e.target.value)}/><br/><br/>
        <h4>Result Value@{rval}</h4>
        <button onClick={add}>ADDITION</button>&nbsp;
        <button onClick={sub}>SUBSTRACTION</button>&nbsp;
        <button onClick={mul}>MULTIPLICATION</button>
    </div>;
};

export default Arithemeticcomp;