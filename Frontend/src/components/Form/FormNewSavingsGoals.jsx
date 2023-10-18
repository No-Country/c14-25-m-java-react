import SvgClose from '../../assets/icons/SvgClose';
import CustomInput from './CustomInput';
import CustomDropdown from './CustomDropdown';
import CustomInputRadio from './CustomInputRadio';

const FormNewSavingsGoals = ({ handleStateModal }) => {
    return (
        <form className='newSavingsGoals-form' action="">

            <header className='newSavingsGoals-header'>
                <h3>Nuevo ahorro</h3>

                <span onClick={handleStateModal}>
                    <SvgClose />
                </span>
            </header>

            <section className='newSavingsGoals-section'>

                <CustomInput name={"name_savings"} placeholder={"Nombre del ahorro"} />
                <CustomDropdown placeholder={"Categoría"} />

            </section>

            <section className='newSavingsGoals-section-inputRadio'>

                <p>¿Este ahorro será compartido con otra persona?</p>

                <section className='newSavingsGoals-section-inputRadio-options'>
                    <CustomInputRadio title={"Sí"} name={"shared_savings"} id={"shared_savings_yes"} value={"si"} />
                    <CustomInputRadio title={"No"} name={"shared_savings"} id={"shared_savings_no"} value={"no"} />
                </section>

            </section>

            <section className='newSavingsGoals-section'>
                <CustomInput name={"savings_name"} placeholder={"Monto que querés ahorrar"} />
                <CustomDropdown placeholder={"Indica el tiempo que querés ahorrar"} />
            </section>

            <section className='newSavingsGoals-section-buttons'>

                <button type='reset'>Cancelar</button>
                <button type="submit">Confirmar</button>
                
            </section>

        </form>
    )
}

export default FormNewSavingsGoals