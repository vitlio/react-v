import React, {useState} from 'react'
import PropTypes from 'prop-types'

function useInputValue(defaultValue = ''){
    let [value, setValue] = useState(defaultValue);
    return {
        value: value,
        onChange: e => setValue(e.target.value),
        clear: () => setValue('')
    }
}

function AddTodo(props) {
const input = useInputValue('');
    
const onFormSubmit = e => {
    e.preventDefault();
    if(input.value.trim()){
        props.onAddTodo(input.value.trim());
    }
    input.clear();
    return null;
}
    return(
        <form className="addtodo" onSubmit={e => onFormSubmit(e)}>
            <input type="text" {...input}/>
            <button type="submit" >Add todo</button>
        </form>
    );
}

AddTodo.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
}

export default AddTodo;