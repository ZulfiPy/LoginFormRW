import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useLogout from "../hooks/useLogout";

const LinkPage = () => {
    const { auth } = useAuth();
    const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/login');
    }

    return (
        <section className="linkpage">
            <h1 className="page__title">Link Page</h1>

            <Link to="/" className="effect__link">Go to the Home page</Link>
            <br />

            <Link to="/admin" className="effect__link">Go to the Admin page</Link>
            <br />

            <Link to="/editor" className="effect__link">Go to the Editor page</Link>
            <br />

            <Link to="/lounge" className="effect__link">Go to the Lounge</Link>

            {auth?.accessToken
                ? (
                    <>
                        <button
                            className="page__main__button"
                            type="button"
                            onClick={signOut}
                        >
                            SIGN OUT
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            className="page__main__button"
                            type="button"
                            onClick={() => navigate('/login')}
                        >
                            SIGN IN
                        </button>
                    </>
                )}
        </section>
    )
}

export default LinkPage;