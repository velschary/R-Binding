import React, {useState} from 'react';

const Todoobject = props => {
const [state, setState] = useState('');

const array = [
    {
    name:'rajendra',gender:'male',status:true
    },
    {
    name:'swapna',gender:'female',status:false
    },
    {
    name:'chary',gender:'male',status:true
    },
    {
    name:'swa',gender:'female',status:false
    },
    {
    name:'chayswa',gender:'male',status:false
    }

]
    return <div>
        {array.map((val)=><h4 className={val.gender==='male'?'male':'female'}>
        <div className={val.status===true?'online':'offline'}></div>
            {val.name}<img src={val.gender==='male'?'https://thumbs.dreamstime.com/b/unknown-man-profile-avatar-vector-male-office-icon-potrait-175425661.jpg':'https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png'} />
            </h4>)}
    </div>;
};
export default Todoobject;