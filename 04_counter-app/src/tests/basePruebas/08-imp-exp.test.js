import { getHeroeById, getHeroesByOwner } from "../../PruebasUnitarias/08-imp-exp";

describe('Pruebas en heroes', () => {    

    test('heroe por ID debe retornar un heroe',()=>{
        const id = 1; 
        const hero = getHeroeById(id); 
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    })

    test('heroe por ID debe retornar undefined',()=>{
        const id = 100; 
        const hero = getHeroeById(id); 
        expect(hero).toBeFalsy()
    })


    test('3 Elementos de marvel',()=>{

        const NumeroDeElementos = 3; 
        const heroesMarvel = getHeroesByOwner('DC');
        expect(NumeroDeElementos).toBe(heroesMarvel.length); 
        heroesMarvel.forEach(res=>{
            expect(res.owner).toBe('DC')
        })
        
    })

    test('3 Elementos de DC',()=>{

        const NumeroDeElementos = 2; 
        const heroesMarvel = getHeroesByOwner('Marvel');
        expect(NumeroDeElementos).toBe(heroesMarvel.length); 
        heroesMarvel.forEach(res=>{
            expect(res.owner).toBe('Marvel')
        })
    })
})