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

            <Link to="/admin" className="effect__link"><span className="bold">Admin</span> page</Link>
            <br />

            <Link to="/editor" className="effect__link"><span className="bold">Editor</span> page</Link>
            <br />

            <Link to="/user" className="effect__link"><span className="bold">User</span> page</Link>
            <br />

            <Link to="/linkpage" className="effect__link"><span className="bold">Link</span>  page</Link>
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