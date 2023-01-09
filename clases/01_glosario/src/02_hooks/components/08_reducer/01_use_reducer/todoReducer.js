export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] add todo":
      return [...initialState, action.payload];

    case "[TODO] remove todo":
      return initialState.filter((todo) => todo.id !== action.payload);

    default:
      return initialState;
  }
};
