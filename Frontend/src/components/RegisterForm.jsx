import Button from './Button'
import { useState } from 'react'
function RegisterForm(){
    const [nombre, setNombre] = useState('')
    const [apllido, setApllido] = useState('')
    const [email, setEmail] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [confirmC, setConfirmC] = useState('')

    return(
        <>
         <div className="RegisterForm">
                    <h2>Crear cuenta</h2>
                    <form  className="form">                        
                        <input type="text" placeholder="Nombre" />                      
                        <input type="text"placeholder="Apellido" />                                                               
                        <input type="email"  placeholder="Email" />                       
                        <input type="password" placeholder="Contraseña" />
                        <input type="password" placeholder="Confirmar contraseña" />
                        <Button p={null}/>
                     </form>
                     

        </div>
        </>
    )
}
export default RegisterForm