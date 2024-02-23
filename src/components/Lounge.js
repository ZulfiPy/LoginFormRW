import { Link, useNavigate } from "react-router-dom";

const Lounge = () => {
    const navigate = useNavigate();

    return (
        <section className="lounge">
            <h1 className="page__title">Lounge</h1>

            <Link to="/" className="effect__link">Go to the <span className="bold">Home</span> page</Link>
            <button
                className="page__main__button"
                type="button"
                onClick={() => navigate('/customers')}
            >
                USER MODULES
            </button>
        </section>
    )
}

export default Lounge;