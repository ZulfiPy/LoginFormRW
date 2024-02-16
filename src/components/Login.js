import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEye } from '@fortawesome/free-solid-svg-icons';
import gradBg from "../assets/img/beautiful-colorful-gradient-background-combination-of-bright-colors-soft-and-smooth-texture-used-for-background-free-vector.jpg"

const Login = () => {
    const [displayPassword, setDisplayPassword] = useState(false);

    const handleDisplayPassword = () => {
        setDisplayPassword(!displayPassword);
    };

    return (
        <div className="auth">
            <img src={gradBg} alt="img" className="auth__bg" />

            <form className="auth__form">
                <h1 className="auth__title">Login</h1>

                <div className="auth__inputs">

                    <div className="auth__box">
                        <label htmlFor="username">Username:</label>
                        <div className="auth__input__box">
                            <input type="text" placeholder="username" required className="auth__input" id="username" />
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    </div>

                    <div className="auth__box">
                        <label htmlFor="password">Password:</label>
                        <div className="auth__input__box">
                            <input type={!displayPassword ? "password" : "text"} placeholder="password" required className="auth__input" id="password" />
                            <button type="button" className={!displayPassword ? 'login__password__hide' : 'login__password__display'} onClick={handleDisplayPassword}>
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

                    <button type="submit" className="auth__button">Login</button>

                    <div className="auth__log__reg">
                        Don't have an account? <a href="true">Register</a>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default Login