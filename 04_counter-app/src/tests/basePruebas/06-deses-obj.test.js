import { usContext } from "../../PruebasUnitarias/06-deses-obj"

describe('probar valores por defecto', ()=>{
    test('tarea, como valor por defecto',()=>{

        const valor = usContext('12','13', 12);
        expect(valor.rango).toBe('Capitán')

    })
})