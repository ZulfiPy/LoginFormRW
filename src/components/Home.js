import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

const Home =  () => {
    const logout = useLogout();
    
    const signOut = async () => {
        await logout();
    }

    return (
        <section className="home">
            <h1 className="page__title">Home</h1>

            <p>You do not have an access to the requested page.</p>

            <Link to="/admin" className="effect__link">Admin page</Link>
            <br />

            <Link to="/editor" className="effect__link">Editor page</Link>
            <br />

            <Link to="/linkpage" className="effect__link">Link page</Link>
            <br />

            <button
                className="page__main__button"
                type="button"
                onClick={signOut}
            >
                Sign Out
            </button>
        </section>
    )
}

export default Home;