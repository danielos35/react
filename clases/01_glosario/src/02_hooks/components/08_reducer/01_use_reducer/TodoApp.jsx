import { useReducer } from "react"
import { todoReducer } from "./todoReducer";

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


    const [todos, dispatch] = useReducer(todoReducer,initalState);
    return (

        <>
            <h1>Todo App</h1>
            <hr/>

            <div className="row">
     
                <div className="col-7">
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between">
                            <span className="align-self-center">
                                Item 1
                            </span>
                            <button className="btn btn-danger">
                                Eliminar
                            </button>
                        </li>
                    </ul>
                </div>
     
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
            </div>
        </>
    )
}
