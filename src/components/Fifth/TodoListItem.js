import React from 'react'
import TodoItem from './TodoItem'

const TodoListItem = (props) => {

    return(
        <ul style={{padding: 0}}>
            {props.state.map((item, idx) => <TodoItem key={item.id} idx={idx} item={item}/>)}
        </ul>
    );

}

export default TodoListItem;