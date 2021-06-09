import React from 'react'
import PropTypes from 'prop-types'
import Context from './context'

let styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '5px',
        marginBottom: '.3rem'
    },
    input: {
        marginRight: '1rem'
    },
    button: {
        backgroundColor: '#ccc',
        color: '#fff',
        border: 'none',
        borderRadius: '30%',
        cursor: 'pointer'
    }
}

function TodoItem({todo, index, onToggle}){
    const {onClickDelete} = React.useContext(Context);
    let classes = [];
    todo.complited && classes.push('done');
    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input type="checkbox" checked={todo.complited} onChange={() => onToggle(todo.id)} style={styles.input}/>
                <b>{index + 1}</b>
                &nbsp;
                {todo.title}
            </span>
            <button style={styles.button} onClick={() => onClickDelete(todo.id)}>&times;</button>
        </li>
    );
}

TodoItem.propTypes = {
    index: PropTypes.number.isRequired,
    todo: PropTypes.object.isRequired,
    onToggle: PropTypes.func.isRequired,
}

export default TodoItem