/**
 * REDUCER
 *
 * - Es una función comun y corriente que NO puede ser asincronta
 *
 * - Debe ser una función pura
 * -- Debe de poder resolver todo lo que se le ingrese sin necesidad de llamar otras funciones
 * -- No debe de realizar tareas asincronas.
 * -- Debe de retornar siempre un estado nuevo.
 * -- No debe de llamar el localStorage o sessionStorage
 * -- NO debe de requerir mas que una acción que puede tener un argumento
 *
 *
 * - Debe retornar siempre un nuevo estado
 * - Usualmente recibe dos argumento (El estado inicial y la acción que quiero ejecutar)
 * */


//EJEMPLO 

const initialTools = [
  {
    id: 1,
    todo: "Comprar pan",
    done: "false",
  },
];

const todoReducer = (state = initialTools, action) => {
  return state;
};


/**
 * CICLO DE VIDA DE UN REDUCER
 * - Estado inicial
 * - Mostrar componente
 * - Accción para no modificar el estado directamente
 * */
