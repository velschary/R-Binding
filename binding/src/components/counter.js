import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Counter = props => {
    const [val, setVal]=useState(props.val)
    const [step, seStep]=useState(props.step)
const inc =()=>{
    setVal(val+step)
}
const dec =()=>{
    setVal(val-step)
}

    return <div>
        <h1>count--::{val}</h1>
        <button onClick={inc}>INCREMENT</button>
        <button onClick={dec}>DEsCREMENT</button>
    </div>;
};
export default Counter;