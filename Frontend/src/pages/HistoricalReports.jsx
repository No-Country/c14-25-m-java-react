import { Helmet } from "react-helmet";
import List from "../components/Card/List";
import { useAmountDashboard } from "../services/useAmountDashboard";
import { useForm } from "react-hook-form";
import CustomInput from "../components/Form/CustomInput";
import CustomDropdown from "../components/Form/CustomDropdown";
import CustomInputRadio from "../components/Form/CustomInputRadio";

const HistoricalReports = () => {
  const { dbE, increaseDBE, dbI, increaseDBI } = useAmountDashboard();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    resetField,
    formState: { errors, isValid },
  } = useForm()

  const onSubmit = (dataForm) => {
    console.log(dataForm)
  }

  return (
    <>
      <Helmet>
        <title>Reportes historicos | Presupuesto claro</title>
      </Helmet>

      <form onSubmit={handleSubmit(onSubmit)} className="historicalReports-search-container">

        <section className=''>

          <CustomInput
            register={register}
            name={"name_savings"}
            placeholder={"Buscar por nombre"}
            errors={errors}
            setValue={setValue}
            watch={watch}
          />

          <CustomDropdown
            watch={watch}
            setValue={setValue}
            register={register}
            name={"category_savings"}
            dataOptions={["Ingreso", "Egreso", "Total"]}
            placeholder={"Categoría"}
          />

        </section>

        <section className=''>
          <CustomInputRadio
            register={register}
            title={"Ingreso"}
            name={"historical_radio"}
            id={"historical_ingreso"}
            value={"ingreso"}
          />

          <CustomInputRadio
            register={register}
            title={"Egreso"}
            name={"historical_radio"}
            id={"historical_egreso"}
            value={"egreso"}
          />

          <CustomInputRadio
            register={register}
            title={"Total"}
            name={"historical_radio"}
            id={"historical_total"}
            value={"total"}
          />
        </section>

        <button className="" type="submit">
          Buscar
        </button>
      </form>

      <List amount={dbI} download={true} />
    </>

  )
}

export default HistoricalReports