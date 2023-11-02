
function Modal({closeModal}){
        return(
            <div className="modalBackground">
                <div className="modalContainer">
                    <div>
                    <h3>Nuevo</h3>
                    <button onClick={()=>{closeModal(false)}}>X</button>
                    </div>
                    <section className="modalTabs">
                        <button >              Ingreso            </button>
                        <button  >              Egreso            </button>
                    </section>
                    <form action="" className="modalForm">
                        <input type="datetime-local" placeholder="26/10/2023 15:42 " />

                        
                        <input list="cars" placeholder="Categoria"/>
                         <datalist id="cars" >
                             <option value="Comida" />
                             <option value="Renta" />
                             <option value="Educacion" />
                             <option value="Transporte" />
                             <option value="Ocio" />
                         </datalist>
                         <div className="compartido">
                        <label>¿Este ahorro será compartido con otra persona?</label>
                        <input type="checkbox" name="" id="" />
                        <label >Si</label>
                        <input type="checkbox" name="" id="" />
                        <label >No</label>                     
                        <input type="text" placeholder="Agregar persona"/>
                        </div>


                        <input type="text" placeholder="Monto"/>
                        <input type="text" placeholder="Notas"/>
                    </form>   
                    <section className="cancel">              
                    <button onClick={()=>{closeModal(false)}}>Cancel</button>
                    <button>Confirmar</button>
                    </section>   
                    
                </div>
           
            </div>
            )
}
export default Modal