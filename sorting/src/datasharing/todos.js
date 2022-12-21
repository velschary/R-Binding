import React from 'react';
import PropTypes from 'prop-types';

const Todos = props => {
    return <div>
        <h4>{props.value}&nbsp;<button onClick={()=>props.deleteTodo(props.index)}>DELETE</button></h4>
    </div>;
};
export default Todos;