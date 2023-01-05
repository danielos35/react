import React from 'react'

export const TodoList = ({todo = []}) => {
  return (
    <div className="col-7">
        <ul className="list-group">
            {
                todo.map((res)=>(
                    <li key={res} className="list-group-item d-flex justify-content-between">
                        <span className="align-self-center">
                            Item 1
                        </span>
                        <button className="btn btn-danger">
                            Eliminar
                        </button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
