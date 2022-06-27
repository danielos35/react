test('Esta prueba no debe falla', ()=>{
    if(0 === 0){
        throw new Error('No puede dividir entre 0')
    }
})