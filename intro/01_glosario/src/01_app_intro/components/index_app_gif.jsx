import { useState } from "react";
import "./styles.css";
export const Index_app_gif = () => {
  const [categorias, setCategories] = useState(["One Punch", "Breaking bad"]);
  const onAddCategory = () => {
    // PUSH MUTA EL OBJETO
    setCategories((data) => [...data, "Nuevo dato"]);
  };
  return (
    <>
      <h1>GIF</h1>
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categorias.map((categoria, indice) => (
          <li key={indice}>{categoria}</li>
        ))}
      </ol>
    </>
  );
};
