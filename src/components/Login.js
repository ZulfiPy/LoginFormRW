import { useState, useRef, useEffect, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEye, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { axiosPrivate } from "../api/axios";

const Login = () => {
    const userRef = useRef(false);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [errorMsg, setErrorMsg] = useState('');
    const [displayPassword, setDisplayPassword] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    const handleDisplayPassword = () => {
        setDisplayPassword(!displayPassword);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosPrivate.post('/auth',
                JSON.stringify({ username, password })
            );

            setUsername('');
            setPassword('');

            console.log('login successfull', response);
        } catch (err) {
            console.log('error while logging in', err);
            if (!err?.response) {
                setErrorMsg('No Server Response');
            } else if (err?.response.status === 401) {
                setErrorMsg(err.response.data?.message)
            } else {
                setErrorMsg('Login Failed');
            }
        }
    }

    return (
        <div className="auth">
            <section className="auth__section">
                <h1 className="auth__title" >Login</h1>

                <p className={errorMsg ? "auth__errMsg" : "offScreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    {errorMsg}
                </p>


                <form className="auth__form" onSubmit={handleLogin}>

                    <div className="auth__inputs">

                        <div className="auth__box">
                            <label htmlFor="username">Username:</label>
                            <div className="auth__input__box">
                                <input
                                    type="text"
                                    placeholder="username"
                                    required
                                    className="auth__input"
                                    autoComplete="off"
                                    ref={userRef}
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                        </div>

                        <div className="auth__box">
                            <label htmlFor="password">Password:</label>
                            <div className="auth__input__box">
                                <input
                                    type={!displayPassword ? "password" : "text"}
                                    placeholder="password"
                                    required
                                    className="auth__input"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className={!displayPassword ? 'login__password__hide' : 'login__password__display'}
                                    onClick={handleDisplayPassword}
                                >
                                    <FontAwesomeIcon icon={faEye} />
                                </button>
                            </div>
                        </div>

                        <div className="login__check">
                            <div className="login__check-box">
                                <input type="checkbox" className="login__check-input" id="user-check" />
                                <label htmlFor="user-check" className="login__check-label">Remember Me</label>
                            </div>

                            <a href="true" className="login__forgot">Forgot Password?</a>
                        </div>

                        <button
                            type="submit"
                            className="auth__button"
                        >
                            Login
                        </button>

                        <div className="auth__log__reg">
                            Don't have an account? <a href="true">Register</a>
                        </div>

                    </div>
                </form>
            </section>
        </div>
    );
};

export default Login