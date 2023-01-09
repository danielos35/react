import { useEffect } from "react"
import { TodoList , TodoAdd } from "./componentes";
import { useTodo } from "./hooks/useTodo";

export const TodoApp = () => {

    const {
        todos, 
        handleDeleteTodo,
        handleNewTodo, 
        handleToggleTodo
    } = useTodo();


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
