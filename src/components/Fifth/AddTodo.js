import React, { useState } from 'react'

export default function AddTodo(props) {
    let [value, setValue] = useState('');
    return (
        <form onSubmit={ (e) => {props.onAddTodoSubmit(e, value); setValue('')} }>
            <input type='text' onChange={ (e) => setValue(e.target.value) } value={ value } />
            <button type='submit'>AddTodo</button>
        </form>
    )
}