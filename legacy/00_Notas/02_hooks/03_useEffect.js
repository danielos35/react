/*
USE EFFECT

- Se utiliza para disparar efectos secundarios, siendo este algun proceso que se quiera ejecutar cuando algo suceda 


ARGUMENTOS

1 Argumento: CallBack. 


2 Argumento: lista de dependencias (condiciones con las cuales se quiera volver a ejecutar un callbacks)
useEffect()
-- En caso de pasar como argumento un arreglo vacio [], el callback (primer argumento) solo se ejecutará la primera vez, que se crea y se construlle el componente

3 Return: esta destinado a limpiar en caso de que el codigo tenga algun tipo de observable



NOTAS 

useeffect debe de regresar una función NO una promesa, es por eso que estas no pueden ser manejadas de manera asincrona
*/ 