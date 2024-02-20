import { Link, useNavigate } from "react-router-dom";

const User = () => {
    const navigate = useNavigate();

    return (
        <section className="user">
            <h1 className="page__title">Users page</h1>

            <Link to="/" className="effect__link">Go to the <span className="bold">Home</span> page</Link>
            <br />

            <button
                className="page__main__button"
                type="button"
                onClick={() => navigate('/customers')}
            >
                VIEW CUSTOMERS
            </button>
        </section>
    )
}

export default User;