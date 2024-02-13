import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faLock, faA, faB, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import gradBg from "../assets/img/beautiful-colorful-gradient-background-combination-of-bright-colors-soft-and-smooth-texture-used-for-background-free-vector.jpg"

const Register = () => {

    return (
        <div className="auth">
            <img src={gradBg} alt="img" className="auth__bg" />

            <form className="auth__form">
                <h1 className="auth__title">Register</h1>

                <div className="auth__inputs">

                    <div className="auth__box">
                        <label htmlFor="username">Username:</label>
                        <div className="auth__input__box">
                            <input type="text" id="username" placeholder="username" required className="auth__input" autoComplete="off" />
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    </div>

                    <div className="auth__box">
                        <label htmlFor="password">Password:</label>
                        <div className="auth__input__box">
                            <input type="password" id="password" placeholder="password" required className="auth__input" />
                            <FontAwesomeIcon icon={faKey} />
                        </div>
                    </div>

                    <div className="auth__box">
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <div className="auth__input__box">
                            <input type="password" id="confirmPassowrd" placeholder="confirm password" required className="auth__input" />
                            <FontAwesomeIcon icon={faLock} />
                        </div>
                    </div>

                    <div className="auth__box">
                        <label htmlFor="firstname">First Name:</label>
                        <div className="auth__input__box">
                            <input type="text" id="firstname" placeholder="first name" required className="auth__input" />
                            <FontAwesomeIcon icon={faA} />
                        </div>
                    </div>

                    <div className="auth__box">
                        <label htmlFor="lastname">Last Name:</label>
                        <div className="auth__input__box">
                            <input type="text" id="lastname" placeholder="last name" required className="auth__input" />
                            <FontAwesomeIcon icon={faB} />
                        </div>
                    </div>

                    <div className="auth__box">
                        <label htmlFor="birthData">Birth Date:</label>
                        <div className="auth__input__box">
                            <input type="text" id="birthDate" placeholder="birth date" required className="auth__input" />
                            <FontAwesomeIcon icon={faCalendarDays} />
                        </div>
                    </div>

                    <button type="submit" className="auth__button" disabled >Register</button>

                    <div className="auth__log__reg">
                        Already registered? <a href="true">Sign In</a>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register;