import SvgClose from '../../../assets/icons/SvgClose';
import CustomInput from '../CustomInput';
import CustomDropdown from '../CustomDropdown';
import CustomInputRadio from '../CustomInputRadio';
import { useForm } from "react-hook-form"
import { useNewSavingsGoals } from '../../../services/useNewSavingsGoals';
import { useEffect, useState } from 'react';
import FormDashboardEgress from './FormDashboardEgress';
import FormDashboardIncome from './FormDashboardIncome';
const FormDashboard = ({ handleStateModal }) => {
    const { increaseDB, db } = useNewSavingsGoals();

    useEffect(() => {
        console.log("DB: ", db)
    }, [db])

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        reset,
        formState: { errors, isValid },
    } = useForm()

    const onSubmit = (dataForm) => {
        increaseDB(dataForm)
        handleStateModal()
    }

    const handleReset = () => {
        reset()
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
    const [changeClass, setChangeClass]=useState(true)

    
  
    function handleChangeClass() {
      
  
        setChangeClass(!changeClass)
      
      
    }
    const [formChange, setFormChange]=useState( <FormDashboardEgress/>     )

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='formDashboard-form' action="">

            <header className='formDashboard-header'>
                <h3>Nuevo</h3>

                <span onClick={handleStateModal}>
                    <SvgClose />
                </span>
            </header>
            <section className="formDashboard-modalTabs">
                        <button onClick={handleChangeClass}className={changeClass &&'blue'}> Ingreso</button>
                        <button onClick={handleChangeClass} className={!changeClass &&'red'} > Egreso</button>
            </section>

{changeClass=== true?
                 <>
                 <section className='formDashboard-section'>
 
                 <CustomInput
                     register={register}
                     name={"name_savings"}//VER EGRESO E INGRESO
                     placeholder={"Nombre del egreso"}
                     errors={errors}
                     setValue={setValue}
                     watch={watch}
                 />
 
                 <CustomDropdown
                     watch={watch}
                     setValue={setValue}
                     register={register}
                     name={"category_savings"}//VER EGRESO E INGRESO
                     dataOptions={category_savings}
                     placeholder={"Categoría"}
                 />
 
                 </section>
 
                 <section className='formDashboard-section-inputRadio'>
 
                 <p>¿Este ahorro será compartido con otra persona?</p>
 
                 <section className='formDashboard-subsection'>
 
                     <section className='formDashboard-section-inputRadio-options'>
                         <CustomInputRadio
                             register={register}
                             title={"Sí"}
                             name={"shared_savings"}//VER EGRESO E INGRESO
                             id={"shared_savings_yes"}
                             value={"si"}
                         />
 
                         <CustomInputRadio
                             register={register}
                             title={"No"}
                             name={"shared_savings"}//VER EGRESO E INGRESO
                             id={"shared_savings_no"}
                             value={"no"}
                         />
 
                     </section>
 
                     <CustomInput
                     register={register}
                     name={"amount_savings"}//VER EGRESO E INGRESO
                     placeholder={"Agregar persona"}
                     errors={errors}
                     setValue={setValue}
                     watch={watch}
                     />
 
                  </section>
 
 
                 </section>
 
                 <section className='formDashboard-section'>
                 <CustomInput
                     register={register}
                     name={"amount_savings"}//VER EGRESO E INGRESO
                     placeholder={"Monto del egreso"}
                     errors={errors}
                     setValue={setValue}
                     watch={watch}
 
                 />
               
                 </section>
                 </>
            :
            <>
            <section className='formDashboard-section'>

                <CustomInput
                    register={register}
                    name={"name_savings"}//VER EGRESO E INGRESO
                    placeholder={"Nombre del egreso"}
                    errors={errors}
                    setValue={setValue}
                    watch={watch}
                />

                <CustomDropdown
                    watch={watch}
                    setValue={setValue}
                    register={register}
                    name={"category_savings"}//VER EGRESO E INGRESO
                    dataOptions={category_savings}
                    placeholder={"Categoría"}
                />

            </section>

            <section className='formDashboard-section-inputRadio'>

                <p>¿Este ahorro será compartido con otra persona?</p>

                <section className='formDashboard-subsection'>

                    <section className='formDashboard-section-inputRadio-options'>
                        <CustomInputRadio
                            register={register}
                            title={"Sí"}
                            name={"shared_savings"}//VER EGRESO E INGRESO
                            id={"shared_savings_yes"}
                            value={"si"}
                        />

                        <CustomInputRadio
                            register={register}
                            title={"No"}
                            name={"shared_savings"}//VER EGRESO E INGRESO
                            id={"shared_savings_no"}
                            value={"no"}
                        />
                        
                    </section>
                    
                    <CustomInput
                    register={register}
                    name={"amount_savings"}//VER EGRESO E INGRESO
                    placeholder={"Agregar persona"}
                    errors={errors}
                    setValue={setValue}
                    watch={watch}
                    />

                 </section>
                    

            </section>

            <section className='formDashboard-section'>
                <CustomInput
                    register={register}
                    name={"amount_savings"}//VER EGRESO E INGRESO
                    placeholder={"Monto del egreso"}
                    errors={errors}
                    setValue={setValue}
                    watch={watch}

                />
                <CustomInput
                    register={register}
                    name={"amount_savings"}//VER EGRESO E INGRESO
                    placeholder={"Notas"}
                    errors={errors}
                    setValue={setValue}
                    watch={watch}

                />

                {/*<CustomDropdown
                    placeholder={"Indica el tiempo que querés ahorrar"}
                    watch={watch}
                    setValue={setValue}
                    register={register}
                    name={"time_savings"}//VER EGRESO E INGRESO
                    dataOptions={time_savings}
                />*/}
            </section> </>
         







               }
           {
            /*------------------------------------------------------------------------------------------------ */
           }
            <section className='formDashboard-section-buttons'>

                <button onClick={handleReset && handleStateModal} type='reset'>Cancelar</button>{/*Guido uso el reset para borrar info el handle lo cierra. Podria intentar que al borrar la data recien ahi pueda cerrar*/}
                <button disabled={!isValid} type="submit">Confirmar</button>

            </section>
        </form>
    )
}

export default FormDashboard

