import NewGoalButton from "./NewGoalButton"

const DefaultSectionLayout = ({children, title, isButton}) => {
    return (
        <>
            <section className="defaultSectionLayout-container">

                <section className="defaultSectionLayout-title">
                    <h2>{title}</h2>
                    {
                        isButton?<NewGoalButton/>:null

                    }
                </section>

                <section className="defaultSectionLayout-main">
                    {children}
                </section>

            </section>
        </>
    )
}

export default DefaultSectionLayout