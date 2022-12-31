import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
  });

  const changeValue = ({ target }) => {
    setForm((v) => ({ ...v, [target.name]: target.value }));
  };

  // USE EFECT cambio dependiendo del cambio de algun valor
  /**
   * PARTES DEL USE EFECT
   * - Callback, accion a realizar
   * - Dependencia, accion a realizar
   * - Returno (Funciona como el ngOndestroy)
   * */

  useEffect(() => {}, [form.username]);

  useEffect(() => {}, [form.email]);

  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder="UserName"
        name="username"
        value={form.username}
        onChange={changeValue}
      />
      <br />
      <br />
      <input
        type="email"
        className="form-control"
        placeholder="d@d.com"
        name="email"
        value={form.email}
        onChange={changeValue}
      />

      {form.username === "Daniel" && <Message />}
    </>
  );
};
