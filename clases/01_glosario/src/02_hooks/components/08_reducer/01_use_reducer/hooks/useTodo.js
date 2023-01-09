import { useReducer, useEffect } from "react";
import { todoReducer } from "./../todoReducer";

const initalState = [];
const init = () => {}; // Valores iniciales

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initalState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos) || []);
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] add todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] remove todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "[TODO] toggle todo",
      payload: id,
    });
  };

  return {
    todos,
    dispatch,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
  };
};
