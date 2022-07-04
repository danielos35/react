import { getImagen } from "../../PruebasUnitarias/11-async-await"

describe('Pruebas 11-async-await', () => { 

    test('Debe retornar la URL', async () => { 
        const url = await getImagen(); 
        console.log(url);

        expect(typeof url).toBe('string')
     })


 })