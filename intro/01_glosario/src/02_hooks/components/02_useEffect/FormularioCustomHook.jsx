import { useEffect } from "react";
import { useForm } from "./hooks";
import { Message } from "./Message";

export const FormWithCustomHook = () => {
  const {
    formState: { username, email, password },
    changeValue,
    onReset,
  } = useForm({
    username: "",
    email: "",
    password: "",
  });

  return (
    <>
      <h1>Custoom hook</h1>
      <input
        type="text"
        className="form-control"
        placeholder="UserName"
        name="username"
        value={username}
        onChange={changeValue}
      />
      <br />
      <br />
      <input
        type="email"
        className="form-control"
        placeholder="d@d.com"
        name="email"
        value={email}
        onChange={changeValue}
      />
      <br />
      <br />
      <input
        type="password"
        className="form-control"
        placeholder="Constraseña"
        name="password"
        value={password}
        onChange={changeValue}
      />

      {username === "Daniel" && <Message />}
      <br />
      <br />
      <button onClick={onReset}>Reset</button>
    </>
  );
};
