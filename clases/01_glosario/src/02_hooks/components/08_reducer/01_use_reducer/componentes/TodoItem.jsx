export const TodoItem = ( { todo, onDeleteTodo, onToggleTodo}) => {

  const  eliminar = () => {
    onDeleteTodo(todo.id)
  }

  return (
    <li className="list-group-item d-flex justify-content-between">
        <span 
          className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : ''}`}
          onClick={()=>{onToggleTodo(todo.id)}}
        >
            {todo.description}
        </span>
        <button 
          className="btn btn-danger"
          onClick={()=>{eliminar()}}
          >

            Eliminar
        </button>
    </li>
  )
}
