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

            <Link to="/" className="effect__link">Go to the <span className="bold">Home</span> page</Link>
            <br />

            <Link to="/admin" className="effect__link">Go to the <span className="bold">Admin</span> page</Link>
            <br />

            <Link to="/editor" className="effect__link">Go to the <span className="bold">Editor</span> page</Link>
            <br />

            <Link to="/lounge" className="effect__link">Go to the <span className="bold">Lounge</span></Link>

            {auth?.accessToken
                ? (
                    <>
                        <button
                            className="little__button"
                            type="button"
                            onClick={signOut}
                        >
                            Sign Out
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            className="little__button"
                            type="button"
                            onClick={() => navigate('/login')}
                        >
                            Sign In
                        </button>
                    </>
                )}
        </section>
    )
}

export default LinkPage;