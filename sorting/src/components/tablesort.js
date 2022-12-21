import React from 'react';
import PropTypes from 'prop-types';

const Tablesort = props => {
    const students = [
        {
            name:'rajendra',
            age:25
        },
        {
            name:'chary',
            age:25
        },
        {
            name:'srikanth',
            age:26
        },
        {
            name:'rajendra',
            age:25
        },
        {
            name:'akshay',
            age:27
        },
        {
            name:'aravind',
            age:21
        }
    ]

    // students.sort(
    //     (a,b)=>{
    //         return a.name>b.name?1:-1
    //     }
    // )

    const nameFun=()=>{
        students.sort((a,b)=>a.name>b.name?1:-1)
    }
    const ageFun=()=>{
        students.sort(
            (a,b)=>{
                return a.age>b.age?1:-1
            }
        )
    }
   
    return <div>
        <table className='tablediv'>
            <thead>
                <tr>
                    <td>S.NO</td>
                    <td>NAME</td>
                    <td>AGE</td>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((student, i)=><tr>
                        <td>{i+1}</td>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                    </tr>)
                }
            </tbody>
        </table>
        <button onClick={nameFun}>SORT NAME</button>
        <button onClick={ageFun}>SORT AGE</button>
    </div>;
};

export default Tablesort;