import { useContext } from "react"
import { json } from "react-router-dom";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

  /**
   * En caso de que yengamos dos contextos con el mismo nombre, suministraría el mas cercano
   * Se debe suministrar el contexto de donde proviene la data 
   * 
   * */

  const { user, setUser_context, clean_context } = useContext(UserContext);
  return (
    <div>
      <p>{JSON.stringify(user, null, 3)}</p>
      <button className="btn btn-primary" onClick={() => setUser_context()}>Traer usuario</button>
      <button className="btn btn-danger" onClick={() => clean_context()}>Limpiar usuario</button>
    </div>
  )
}
