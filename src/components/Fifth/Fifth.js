import React, { useEffect, useState } from 'react'
import AddTodo from './AddTodo'
import TodoListItem from './TodoListItem'
import Context from './context'
import Loading from './loading'

const Fifth = () => {
    let [state, setState] = useState([]);
    let [loading, setLoading] = useState(true)

    function addItemToState(event, value){
        event.preventDefault();
        value.trim() && 
        setState(state => state.concat([{
            id: new Date().getTime(),
            completed: false,
            title: value.trim()
        }]));
    };

    useEffect( () => {
        
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(response=>response.json())
            .then(response=>{
                setTimeout( () => {setState(response);setLoading(false)}, 2000)})
    }, []);

    function changeCompletedStatus(id){
        setState(state.map(i => {i.id === id && (i.completed = !i.completed); return i}))
    }

    function onButtonClick(id){
        setState(state.filter(i => i.id !== id))
    }

    return (
        <div className="wrapper">
            <h2>Repeat Todo</h2>
            <Context.Provider value={{changeCompletedStatus, onButtonClick}}>
                <AddTodo onAddTodoSubmit={addItemToState}/>
                {loading && <Loading />}
                {(!state.length && !loading) && <p>No Todos</p>}
                <TodoListItem state={state} />
            </Context.Provider>
        </div>
    )
}

export default Fifth;