import { useEffect, useState } from "react";

export const SimpleForm = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
  });

  const changeValue = ({ target }) => {
    setForm((v) => ({ ...v, [target.name]: target.value }));
  };

  // USE EFECT cambio dependiendo del cambio de algun valor
  useEffect(() => {
    console.log("El usuario cambió");
  }, [form.username]);

  useEffect(() => {
    console.log("El email cambió");
  }, [form.email]);

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
    </>
  );
};
