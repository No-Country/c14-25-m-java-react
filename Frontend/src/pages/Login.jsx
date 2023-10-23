import { Link, redirect } from "react-router-dom"
import CustomInput from "../components/Form/CustomInput"
import DefaultLayoutFormUser from "../components/Form/DefaultLayoutFormUser"
import { useForm } from "react-hook-form"
import { useUsersDB } from "../services/useUsersDB"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react"

const Login = () => {

  const { db, increaseDB, validateUser } = useUsersDB()

  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("userLogged")) {
      navigate("/");
    }
  }, [])
  
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    formState: { errors, isValid },
  } = useForm()

  const regularExpressions = {
    isEmail: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  }

  const onSubmit = (data) => {
    if (!regularExpressions.isEmail.test(data.login_email)) {
      setError("login_email", { type: "custom", message: "Ingrese correctamente su email." })
    }
    else if (data.login_password.length < 8) {
      setError("login_password", { type: "custom", message: "La contraseña debe ser mayor o igual a 8 caracteres." })
    }
    else {
      console.log("Logeado correctamente", validateUser(data, db))
      const userLogged = validateUser(data, db);

      if (userLogged) {
        localStorage.setItem("userLogged", JSON.stringify(userLogged))
        navigate("/")
      }
      else {
        console.log("ERROR ")
      }
    }
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
        footerTitlePath={"/register"}
      >

        <form action="" onSubmit={handleSubmit(onSubmit)}>

          <section className="defaultLayoutFormUser-container-inputLink">
            <CustomInput
              register={register}
              placeholder={"Correo electrónico"}
              name={"login_email"}
              style={{ width: "100%" }}
              type={"email"}
              setValue={setValue}
              errors={errors}
              watch={watch}
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
              setValue={setValue}
              errors={errors}
              watch={watch}

            />

            <Link to={""}>
              ¿Olvidaste tu contraseña?
            </Link>

          </section>


          <button type="submit" className="defaultLayoutFormUser-buttonSubmit">
            Acceder
          </button>
        </form>

      </DefaultLayoutFormUser>
    </>
  )
}

export default Login