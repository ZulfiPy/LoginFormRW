import { Link, useNavigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import useAuth from "../hooks/useAuth";

const Home = () => {
    const { auth } = useAuth();
    const logout = useLogout();
    const navigate = useNavigate();

    const signOut = async () => {
        await logout();
        navigate('/login');
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

            {auth?.accessToken ?
                (
                    <button
                        className="little__button"
                        type="button"
                        onClick={signOut}
                    >
                        Sign Out
                    </button>
                ) : (
                    <button
                        className="little__button"
                        type="button"
                        onClick={() => navigate('/login')}
                    >
                        Sign In
                    </button>

                )}
        </section>
    )
}

export default Home;