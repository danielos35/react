export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "ABC":
      return new Error("Accion no implementada");

    default:
      return initialState;
  }
};
