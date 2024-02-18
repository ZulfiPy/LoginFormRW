import { Link, useNavigate } from "react-router-dom";

const Unauthorized = () => {
    const navigate = useNavigate();

    return (
        <section className="unauthorized">
            <h1 className="page__title">Unauthorized</h1>
            <p>You do not have an access to the requested page.</p>

            <button
                className="page__main__button"
                type="button"
                onClick={() => navigate('/linkpage')}
            >
                Go the Link page
            </button>
        </section>
    )
}

export default Unauthorized;