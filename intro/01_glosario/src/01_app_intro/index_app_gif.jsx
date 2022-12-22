import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import "./styles.css";
export const Index_app_gif = () => {
  const [categorias, setCategories] = useState([]);
  const onAddCategory = (categoria) => {
    setCategories((data) => [...data, categoria]);
  };
  return (
    <>
      <AddCategory
        onNewCategory={(event) => onAddCategory(event)}
      ></AddCategory>
      <ol>
        {categorias.map((categoria, indice) => (
          <li key={indice}>{categoria}</li>
        ))}
      </ol>
    </>
  );
};

/*

LEGACY

export const Index_app_gif = () => {
  const [categorias, setCategories] = useState(["One Punch", "Breaking bad"]);
  const onAddCategory = () => {
    // PUSH MUTA EL OBJETO
    setCategories((data) => [...data, "Nuevo dato"]);
  };
  return (
    <>
      <AddCategory setCategories={setCategories}></AddCategory>
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categorias.map((categoria, indice) => (
          <li key={indice}>{categoria}</li>
        ))}
      </ol>
    </>
  );
};



*/
