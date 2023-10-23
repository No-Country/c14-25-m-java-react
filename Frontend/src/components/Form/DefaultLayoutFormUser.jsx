import SvgCustomHR from "../../assets/icons/SvgCustomHR";
import SvgFacebook from "../../assets/icons/SvgFacebook";
import SvgGoogle from "../../assets/icons/SvgGoogle";
import Logo from "./../../assets/logo.png";
import { Link } from "react-router-dom";

const DefaultLayoutFormUser = ({ children, title, subtitle, titleGoogle, titleFacebook, footerTitle, footerTitleLink, footerTitlePath }) => {

    return (
        <>
            <section className="defaultLayoutFormUser-container">

                <img src={Logo} alt="Logo de Presupuesto Claro" />

                <section className="defaultLayoutFormUser-container-form">

                    <section className="defaultLayoutFormUser-header">
                        <h2>{title}</h2>
                        <p>{subtitle}</p>
                    </section>

                    <section className="defaultLayoutFormUser-main">
                        {children}
                    </section>

                    <SvgCustomHR />

                    <section className="defaultLayoutFormUser-buttons">
                        <button type="button"><SvgGoogle />{titleGoogle}</button>
                        <button type="button"><SvgFacebook />{titleFacebook}</button>
                    </section>

                    <section className="defaultLayoutFormUser-footer">
                        {footerTitle}
                        <Link to={footerTitlePath}>{footerTitleLink}</Link>
                    </section>

                </section>

            </section>
        </>
    )
}

export default DefaultLayoutFormUser