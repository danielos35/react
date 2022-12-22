import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputValue = ({ target }) => {
    setInputValue((inputValue) => (inputValue = target.value));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue);
    setInputValue((valor) => (valor = ""));
  };

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          placeholder="Buscar Gif"
          value={inputValue}
          onChange={(e) => onInputValue(e)}
        />
      </form>
    </>
  );
};

/* 

LEGACY

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("value");
  const onInputValue = ({ target }) => {
    setInputValue((inputValue) => (inputValue = target.value));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    setCategories((categories) => [...categories, inputValue]);
    setInputValue((valor) => (valor = ""));
  };

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          placeholder="Buscar Gif"
          value={inputValue}
          onChange={(e) => onInputValue(e)}
        />
      </form>
    </>
  );
};


*/
