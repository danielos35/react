import { useReducer } from "react"
import { TodoList , TodoAdd } from "./componentes";

import { todoReducer} from "./todoReducer";

export const TodoApp = () => {

    const initalState =  []

    const handleNewTodo = (todo) => {
        const action = {
            type:'[TODO] add todo',
            payload:todo
        }

        dispatch(action);
    }


    const [todos, dispatch] = useReducer(todoReducer,initalState);
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
