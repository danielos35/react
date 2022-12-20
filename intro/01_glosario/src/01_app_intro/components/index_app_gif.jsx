import { useState } from "react";
import "./styles.css";
export const Index_app_gif = () => {
  const [categorias, setCategories] = useState(["One Punch", "Breaking bad"]);
  return (
    <>
      <h1>GIF</h1>
      <ol>
        {categorias.map((categoria, indice) => (
          <li key={indice}>{categoria}</li>
        ))}
      </ol>
    </>
  );
};
