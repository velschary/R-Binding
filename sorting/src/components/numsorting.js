import React from 'react';

const Sorting = props => {
    const name = 'rajeNDRA'
    console.log(name)
    console.log(name.toLocaleLowerCase())
    console.log(name.toUpperCase())

    const arr = [11,10,1,12,3,2,6,9,8,6,4]
    console.log(arr)
    console.log(arr.sort())

    const funsort = arr.sort(
        (a,b)=>a>b?1:-1
        //(a,b)=>a-b
    )
    console.log(funsort)

    const num=12345.12345
    console.log(num.toFixed(2)) 

    return <div>
    </div>;
};
export default Sorting; 