import { useReducer } from "react"
import { TodoList , TodoAdd } from "./componentes";

import { todoReducer} from "./todoReducer";

export const TodoApp = () => {

    const initalState =  [
        {
            id:new Date().getTime(),
            description:'hacer pan', 
            don: false
        },
        {
            id:new Date().getTime() * 3,
            description:'hacer arroz', 
            don: false
        },
    ]

    const handleNewTodo = (data) => {
        console.log(data);
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
