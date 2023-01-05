import React from 'react'

export const TodoAdd = () => {
  return (
    <div className="col-5">
        <h4>Agregar TODO</h4>
        <hr/>
        <form>
            <input
                type="text"
                placeholder="Que hay que hacer?"
                className="form-control"
            />

            <button
                type="submit"
                className="btn btn-outline-primary mt-1"
            >
                Agregar Elemento
            </button>
        </form>
    </div>  
  )
}
