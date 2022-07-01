import { getSaludo } from "../../PruebasUnitarias/02-template-string";

describe('Pruebas 02-template-string', () => { 
    
    test('getSaludo debe de retornar "Hola Daniel"',()=>{
        const name = 'Daniel';
        const mensaje = getSaludo(name); 
        expect(mensaje).toBe(`Hola ${name}`) 
    })

})