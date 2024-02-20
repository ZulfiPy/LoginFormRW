import { Link } from "react-router-dom";

const Lounge = () => {
    return (
        <section className="lounge">
            <h1 className="page__title">Lounge</h1>

            <p>this is the page where the employees can access(user, editor and admin)</p>

            <Link to="/" className="effect__link">Go to the <span className="bold">Home</span> page</Link>
            <button className="page__main__button" type="button">USER MODULES</button>
        </section>
    )
}

export default Lounge;