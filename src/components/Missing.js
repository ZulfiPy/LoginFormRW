import { Link } from "react-router-dom";

const Missing = () => {
    return (
        <section className="missing">
            <h1 className="page__title">oops! page not found.</h1>
            <Link to="/" className="effect__link">Go to the Home page</Link>
        </section>
    )
}

export default Missing;