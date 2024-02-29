import { Link, useNavigate } from "react-router-dom";

const Unauthorized = () => {
    const navigate = useNavigate();

    return (
        <section className="unauthorized">
            <h1 className="page__title">Unauthorized</h1>
            <p>You do not have an access to the requested page.</p>

            <button
                type="button"
                className="little__button"
                onClick={() => navigate(-1)}
            >
                Go Back
            </button>
        </section>
    )
}

export default Unauthorized;