import { useEffect, useReducer } from "react"
import { TodoList , TodoAdd } from "./componentes";

import { todoReducer} from "./todoReducer";

const initalState =  []
const init = () => {
    console.log(localStorage.getItem('todos'));
    // return JSON.parse(localStorage.getItem('todos') || []);
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initalState, init);

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos) || []);
    },[todos])

    const handleNewTodo = (todo) => {
        const action = {
            type:'[TODO] add todo',
            payload:todo
        }

        dispatch(action);
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: "[TODO] remove todo", 
            payload: id
        })
    }

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: "[TODO] toggle todo", 
            payload: id
        })
    }

  
    return (

        <>
            <h1>Todo App</h1>
            <hr/>

            <div className="row">
                <TodoList todo={todos} onDeleteTodo={ id => handleDeleteTodo(id) } onToggleTodo={handleToggleTodo}/>
                <TodoAdd emitTodo={(e)=>handleNewTodo(e)} />
            </div>
        </>
    )
}
