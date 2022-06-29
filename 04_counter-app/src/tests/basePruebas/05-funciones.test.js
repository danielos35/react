import { getUser, getUsuarioActivo } from "../../PruebasUnitarias/05-funciones"

describe('Pruebas 05-funciones.js', () => {

    test('getUser debe retornar un objeto', ()=>{
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser(); 
        expect(testUser).toStrictEqual(user)
    })

    test('Obtener el objeto con el nombre deseado',()=>{
        const name = "Daniel"; 
        const usuarioActivo = getUsuarioActivo(name); 
        expect(usuarioActivo.username).toBe(name);
    })
})