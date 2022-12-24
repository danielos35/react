import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import "./styles.css";
export const Index_app_gif = () => {
  const [categorias, setCategories] = useState([]);
  const onAddCategory = (categoria) => {
    if (categorias.includes(categoria)) return;
    setCategories((data) => [...data, categoria]);
  };
  return (
    <>
      <AddCategory
        onNewCategory={(event) => onAddCategory(event)}
      ></AddCategory>
      <ol>
        {/* NUNCA USAR EL INDICE DEL MAP */}
        {categorias.map((categoria) => (
          <GifGrid key={categoria} categoria={categoria} />
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
