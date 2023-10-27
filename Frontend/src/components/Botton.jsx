import Modal from "./Form/FormDashboard/Modal"
import { useState } from "react"
import FormDashboard from "./Form/FormDashboard/FormDashboard"
function Button({p}){
    const [stateModal, setStateModal] = useState(false);
    function handleStateModal(){
        setStateModal(!stateModal)    }
       
return(
    <>
    {p!==null ?
    <>
    <button className="addButton"  onClick={handleStateModal}>+ Nuevo</button>
    {stateModal && 
    <section className='newGoalModal-container'>
    <FormDashboard  handleStateModal={handleStateModal}/>
    
    <section onClick={handleStateModal} className='newGoalModal-background'>

    </section>
    </section>
    }</>
    :<button className="register-button">Inscribirse</button>}
    </>
)
}
export default Button