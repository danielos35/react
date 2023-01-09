import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todo = [], onDeleteTodo}) => {
  return (
    <div className="col-7">
        <ul className="list-group">
            {
                todo.map((res)=>(
                    <TodoItem key={ res.id } todo={res} onDeleteTodo={id => onDeleteTodo(id)}/>
                ))
            }
        </ul>
    </div>
  )
}
