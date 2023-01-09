import { useEffect, useReducer } from "react"
import { TodoList , TodoAdd } from "./componentes";

import { todoReducer} from "./todoReducer";

const initalState =  []
const init = () => {
    return JSON.parse(localStorage.getItem('todos') || []);
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

  
    return (

        <>
            <h1>Todo App</h1>
            <hr/>

            <div className="row">
                <TodoList todo={todos}/>
                <TodoAdd emitTodo={(e)=>handleNewTodo(e)} />
            </div>
        </>
    )
}
