/*

ESTADO: 


- Cuando cambia el estado, el componente vuelve a ejecutarse. 
- Esto se debe a que React siempre mantiene todos los datos del componente actualizados.
- React está muy bien optimizado. 



USESTATE

- React trata de no hacer mutaciones y es por ello que que se debe de evitar el uso del push para trabjar con este hook. 
- En estos casos se recomienda el uso de spread operator mas el dato a agregar [...datos, nuevos datos].
- O usar el callBack que puede ser enviado a las funciones de setState =  setState(datos=>[...datos, nuevoDato]).
- Ejemplo en 05_buscadorGif en buscador.jsx


FORMULARIO CON ONCHANGES

- Para el uso de formularios, en los inputs debemos de manejar los onchance, lo cuales escucharan cuando el componente cambie de estado. 
- Para cambiar el valor de un input debemos de mandar dentro de la función onChange una callback y asignarlo mediante la propiedad event.target.value
- Ejemplo en 05_buscadorGif/componentes/agregarCategoria.jsx

*/
