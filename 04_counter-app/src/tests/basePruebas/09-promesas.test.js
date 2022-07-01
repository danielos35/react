import { getHeroeByIdAsync } from "../../PruebasUnitarias/09-promesas";

describe('Datos asincronos',()=>{
    test('Debe retornar un heroe por defecto', (done) => {
        const id = 1; 
        getHeroeByIdAsync(id).then(hero=>{
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            })
            done()
        })
        
        })
})

describe('Obtener error si heroe no existe',()=>{
    test('Debe retornar un heroe por defecto', (done) => {
        const id = 100; 
        getHeroeByIdAsync(id)
            .then(hero=>{
                // Espera que esto nunca exista
                expect(hero).toBeFalsy()
                done()
            })
            .catch(err=>{
                console.log(err);
                expect(err).toBe('No se pudo encontrar el héroe')
                done()
            }
        )
    })
})