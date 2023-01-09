import { useEffect } from "react"
import { TodoList , TodoAdd } from "./componentes";
import { useTodo } from "./hooks";

export const TodoApp = () => {

    const {
        todos, 
        handleDeleteTodo,
        handleNewTodo, 
        handleToggleTodo, 
        counterTodo, 
        pendientesTodo
    } = useTodo();


    return (

        <>
            <h1>Todo App</h1>
            <hr/>
            <p>Tareas: { counterTodo }</p>
            <p>Pendientes: { pendientesTodo }</p>
            <div className="row">
                <TodoList todo={todos} onDeleteTodo={ id => handleDeleteTodo(id) } onToggleTodo={handleToggleTodo}/>
                <TodoAdd emitTodo={(e)=>handleNewTodo(e)} />
            </div>
        </>
    )
}
