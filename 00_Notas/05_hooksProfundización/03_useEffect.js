/*

USE EFECT
-  Este hook es llamado cada vez que se cambie el estado de cada uno de los componentes
- Argumento #1: callback de lo que queremos ejecutar
- Argumento #2: Dependencia, condiciones por la que se va a disparar el use efect (si colocamos un [], solo se disparará una vez)


RECOMENDACIONES
- Se recomienda usar diferentes efectos secundarios por cada accion que vaya a ser disparada 

VALOR RETORNO 
- Se ejecuta al final de la ejecución del useEfect.
- Como uso nos puede servir para desuscribirnos de algún observable
*/ 