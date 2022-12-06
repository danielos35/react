import { render } from "@testing-library/react"
import {FirstApp} from '../firstApp'

describe('Pruebas en componente firstApp', ()=>{

    test('Debe de hacer match con el snapShot',()=>{
        render(<FirstApp/>)
    })

})