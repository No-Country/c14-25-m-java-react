import SvgClose from '../../assets/icons/SvgClose';
import CustomInput from './CustomInput';
import CustomDropdown from './CustomDropdown';
import CustomInputRadio from './CustomInputRadio';
import { useForm } from "react-hook-form"
import { useNewSavingsGoals } from '../../services/useNewSavingsGoals';
import { useEffect } from 'react';
import CustomInputFile from './CustomInputFile';

const FormNewSavingsGoals = ({ handleStateModal }) => {
    const { increaseDB, db } = useNewSavingsGoals();

    useEffect(() => {
        console.log("DB: ", db)
    }, [db])

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors, isValid },
    } = useForm()

    const onSubmit = (dataForm) => {
        increaseDB(dataForm)
        handleStateModal()
    }

    const handleReset = () => {
        setValue("name_savings", null)
        setValue("shared_savings", null)
        setValue("amount_savings", null)
        setValue("time_savings", null)
        setValue("category_savings", null)
    }

    const category_savings = [
        'Vacaciones',
        'Refacción',
        'Casa',
        'Educación',
        'Emergencias',
        'Retiro',
        'Casamiento',
        'Personalizar'
    ];

    const time_savings = [
        '1 Mes',
        '3 Meses',
        '6 Meses',
        '12 Meses'
    ]

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='newSavingsGoals-form' action="">

            <header className='newSavingsGoals-header'>
                <h3>Nuevo ahorro</h3>

                <span onClick={handleStateModal}>
                    <SvgClose />
                </span>
            </header>

            <section className='newSavingsGoals-section'>

                <CustomInput register={register} name={"name_savings"} placeholder={"Nombre del ahorro"} />
                <CustomDropdown watch={watch} setValue={setValue} register={register} name={"category_savings"} dataOptions={category_savings} placeholder={"Categoría"} />

            </section>

            <section className='newSavingsGoals-section-inputRadio'>

                <p>¿Este ahorro será compartido con otra persona?</p>

                <section className='newSavingsGoals-subsection'>
                    
                    <section className='newSavingsGoals-section-inputRadio-options'>
                        <CustomInputRadio register={register} title={"Sí"} name={"shared_savings"} id={"shared_savings_yes"} value={"si"} />
                        <CustomInputRadio register={register} title={"No"} name={"shared_savings"} id={"shared_savings_no"} value={"no"} />
                    </section>

                    <CustomInputFile title={"Subir imagen"} register={register} setValue={setValue} name={"image_savings"} />

                </section>

            </section>

            <section className='newSavingsGoals-section'>
                <CustomInput register={register} name={"amount_savings"} placeholder={"Monto que querés ahorrar"} />
                <CustomDropdown placeholder={"Indica el tiempo que querés ahorrar"} watch={watch} setValue={setValue} register={register} name={"time_savings"} dataOptions={time_savings} />
            </section>

            <section className='newSavingsGoals-section-buttons'>

                <button onClick={handleReset} type='reset'>Cancelar</button>
                <button disabled={!isValid} type="submit">Confirmar</button>

            </section>
        </form>
    )
}

export default FormNewSavingsGoals

/**
 * 
        <code>
            <pre>
                {JSON.stringify(watch(),null,2)}
            </pre>
        </code>
 * 
 **/