import React, {useEffect} from 'react'
import TodoList from './Todo/TodoList'
import Context from './Todo/context'
// import AddTodo from './Todo/AddTodo'
import Loading from './Todo/Loading'
import Modal from './Todo/Modal/modal'

const AddTodo = React.lazy(() => import('./Todo/AddTodo'))

export default function Fourth(props){

    let [todos, setTodos] = React.useState([]);
    let [loading, setLoading] = React.useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(json => {
                setTimeout( () => {setTodos(json); setLoading(false)}, 2000)
            })
    }, [])

    const onChangeCheckbox = (id) => {
        setTodos(todos.map(item => {
            if(item.id === id)
                item.complited = !item.complited
            return item
            })
        )
    }

    const onClickDelete = (id) => {
        setTodos(todos.filter(item => item.id !== id))
    }

    const onAddTodo = (value) => {
        setTodos(todos.concat([{id: new Date(), complited: false, title: value}]));
    }

    return (
        <Context.Provider value={{onClickDelete}}>
            <div className="wrapper">
                <h1>hello, world</h1>
                <Modal />
                <React.Suspense fallback={<Loading/>}>
                    <AddTodo onAddTodo={onAddTodo}/>
                </React.Suspense>
                { loading && <Loading />}
                { todos.length ?  
                <TodoList todos={todos} onToggle={onChangeCheckbox}/> :
                loading ? null : <p>Todos empty . . .</p> }
            </div>
        </Context.Provider>
    );
}