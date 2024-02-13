
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import gradBg from "../assets/img/beautiful-colorful-gradient-background-combination-of-bright-colors-soft-and-smooth-texture-used-for-background-free-vector.jpg"

const Login = () => {
    return (
        <div className="auth">
            <img src={gradBg} alt="img" className="auth__bg" />

            <form className="auth__form">
                <h1 className="auth__title">Login</h1>

                <div className="auth__inputs">

                    <div className="auth__box">
                        <label htmlFor="username">Username:</label>
                        <div className="auth__input__box">
                            <input type="text" placeholder="username" required className="auth__input" />
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    </div>

                    <div className="auth__box">
                        <label htmlFor="password">Password:</label>
                        <div className="auth__input__box">
                            <input type="password" placeholder="password" required className="auth__input" />
                            <FontAwesomeIcon icon={faKey} />
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