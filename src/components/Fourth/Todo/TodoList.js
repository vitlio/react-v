import React from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function TodoList(props){
    return (
        <div>
            <ul style={styles.ul}>
                {props.todos.map((todo, idx) => <TodoItem key={todo.id} todo={todo} index={idx} onToggle={props.onToggle} />)}
            </ul>
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TodoList;