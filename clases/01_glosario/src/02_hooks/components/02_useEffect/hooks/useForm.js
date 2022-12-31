import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setForm] = useState(initialForm);
  const changeValue = ({ target }) => {
    setForm((v) => ({ ...v, [target.name]: target.value }));
  };

  const onReset = () => {
    setForm((v) => (v = initialForm));
  };

  return {
    formState,
    changeValue,
    onReset,
  };
};
