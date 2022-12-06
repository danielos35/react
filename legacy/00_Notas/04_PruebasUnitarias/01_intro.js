/*
¿QUE SON LAS PRUEBAS UNITARIAS?
- No son un perdida de tiempo.
- Probar puede demorar el mismo tiempo que tardó en desarrollarse la aplicación. 

TIPOS DE PRUEBAS
- Pruebas Unitarias.
-- Estas enfocadas en pequeñas funcionalidades de la aplicación (en pequeñas pruebas de la misma), (por ejemplo probar una llanta de un carro)

- Pruebas de integración.
-- Estan enfocadas en como reaccionan grandes piezas en conjunto. (Probar las llantas con el resto del carro )

CARACTERISTICAS 
- Faciles de escribir.
- Faciles de leer. 
- Confiables. 
- Rapidas. 
- Principalmente unitarias. 

AAA (Arrange, Act, Assert).

- Arrange: paso en el que establecemos el estado inicial.
--- Incializamos variables.
--- Importaciones necesarias.
--- Preparamos el ambiente a probar.

- Actuar: Donde aplicamos acciones o estimulos al sujeto de pruebas. 
--- Llamamos metodos.
--- Simulamos clicks.
--- Realizar acciones sobre el paso anterior. 

- Assert: Observar el comportamiento resultante. 
--- Los resultados son los esperados. 
--- Que algo cambie.


MITOS
- Hacen que mi aplicación no tenga errores. 
- Las pruebas no pueden fallar (pueden arrojar falsos positivos). 
- Las pruebas hacen lenta la aplicación (las pruebas no hacen parte de la aplicación que vamos a desplegar). 
- Es una perdida de tiempo. 
- Hay que probar todo. (Probar siempre la ruta critica).


NOTAS
-  Cuando hayamos exportado un archivo, recurso o modulo, ese recurso debe de estár también en nuestro archivo de testing.

*/ 