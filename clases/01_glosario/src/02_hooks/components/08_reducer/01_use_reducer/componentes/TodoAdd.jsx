import React from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({ emitTodo }) => {

    const { description, changeValue, onReset } = useForm({
        description:''
    })
    const sendData = (e) => {
        e.preventDefault();

        const newTodo = {
            id:new Date().getTime(),
            done: false, 
            description: description
        }

        emitTodo(newTodo)
        onReset();
    }

  return (
    <div className="col-5">
        <h4>Agregar TODO</h4>
        <hr/>
        <form >
            <input
                type="text"
                placeholder="Que hay que hacer?"
                className="form-control"
                name='description'
                value={description}
                onChange={changeValue}
            />

            <button
                // type="submit"
                className="btn btn-outline-primary mt-1"
                onClick={(e)=>{sendData(e)}}
            >
                Agregar Elemento
            </button>
        </form>
    </div>  
  )
}
