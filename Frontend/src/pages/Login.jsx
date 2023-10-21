import { Link } from "react-router-dom"
import CustomInput from "../components/Form/CustomInput"
import DefaultLayoutFormUser from "../components/Form/DefaultLayoutFormUser"
import { useForm } from "react-hook-form"

const Login = () => {

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <DefaultLayoutFormUser
        title={"Iniciar sesión"}
        subtitle={"Accede a tu cuenta para organizar tus finanzas."}
        titleGoogle={"Iniciar sesión con Google"}
        titleFacebook={"Iniciar sesión con Facebook"}
        footerTitle={"¿No tienes cuenta?"}
        footerTitleLink={"Crea una."}
        footerTitlePath={"/"}
      >

        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <section className="defaultLayoutFormUser-container-inputLink">
            <CustomInput
              register={register}
              placeholder={"Correo electrónico"}
              name={"login_email"}
              style={{ width: "100%" }}
              type={"email"}
            />

            <Link to={""}>
              ¿Olvidaste tu correo?
            </Link>

          </section>

          <section className="defaultLayoutFormUser-container-inputLink">
            <CustomInput
              register={register}
              placeholder={"Contraseña"}
              name={"login_password"}
              style={{ width: "100%" }}
              type={"password"}
            />

            <Link to={""}>
              ¿Olvidaste tu contraseña?
            </Link>

          </section>

          <code>
            <pre>
              {JSON.stringify(watch(), null, 2)}
            </pre>
          </code>
        </form>

        <button type="submit" className="defaultLayoutFormUser-buttonSubmit">
          Acceder
        </button>

      </DefaultLayoutFormUser>
    </>
  )
}

export default Login