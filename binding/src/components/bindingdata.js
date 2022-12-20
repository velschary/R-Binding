import React from 'react';

const Bindingdata = props => {
    const title = "React_Application"
    const array= ['akshay','srikanth','rajendra']
    const numArr = [1,2,3,4,5]
    const object = [{name:'raj',age:25},{name:'akshay',age:27},{name:'srikanth',age:26}]

    const valFun=(v)=>{
        alert(v)
    }

    const indexFun=(v)=>{
        alert(v)
    }
    return <div>
        <h1>{title}</h1>

        <h1>{array}</h1>

        <li>{array[0]}</li>
        <li>{array[1]}</li>
        <li>{array[2]}</li>

        {array.map((arr)=><h3>{arr}</h3>)}
        
        {object.map((obj)=><h3>{obj.name}--{obj.age}</h3>)}

        {numArr.map((val)=><button onClick={()=>valFun(val)}>{val}</button>)}<br/><br/>

        {numArr.map((val,i)=><button onClick={()=>indexFun(i)}>{val}</button>)}<br/><br/>
        
    </div>;
};
export default Bindingdata;