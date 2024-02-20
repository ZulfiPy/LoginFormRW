import { Link } from "react-router-dom";

const Admin = () => {
    return (
        <section className="admin">
            <h1 className="page__title">Admins page</h1>


            <Link to="/" className="effect__link">Go to the <span className="bold">Home</span> page</Link>
            <button className="page__main__button" type="button">ADMIN MODULES</button>
        </section>
    )
}

export default Admin;