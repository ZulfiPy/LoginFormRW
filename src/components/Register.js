import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faLock, faA, faB, faCalendarDays, faInfoCircle, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import gradBg from "../assets/img/beautiful-colorful-gradient-background-combination-of-bright-colors-soft-and-smooth-texture-used-for-background-free-vector.jpg"
import { useState, useEffect, useRef } from "react";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
const BIRTHDATE_REGEX = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.([0-9]{4})$/

const Register = () => {
    const [username, setUsername] = useState('');
    const [validUsername, setValidUsername] = useState(false);
    const [usernameFocus, setUsernameFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState("");
    const [validConfirmPassword, setValidConfirmPassword] = useState(false);
    const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);

    const [validMatch, setValidMatch] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [birthDate, setBirthDate] = useState('');
    const [validBirthDate, setValidBirthDate] = useState(false);
    const [birthDateFocus, setBirthDateFocus] = useState(false);

    const userRef = useRef(null);

    useEffect(() => {
        userRef.current.focus()
    }, []);

    useEffect(() => {
        setValidUsername(USER_REGEX.test(username));
    }, [username]);

    useEffect(() => {
        setValidPassword(PASSWORD_REGEX.test(password));
    }, [password]);

    useEffect(() => {
        setValidConfirmPassword(PASSWORD_REGEX.test(confirmPassword));
        setValidMatch(password === confirmPassword);
    }, [confirmPassword, password]);

    useEffect(() => {
        setValidBirthDate(BIRTHDATE_REGEX.test(birthDate));
    }, [birthDate]);

    return (
        <div className="auth">

            <form className="auth__form">
                <h1 className="auth__title">Register</h1>

                <div className="auth__inputs">

                    <div className="auth__box">
                        <label htmlFor="username">
                            Username:
                            <FontAwesomeIcon icon={faCheck} className={validUsername ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={!validUsername && usernameFocus ? "invalid" : "hide"} />
                        </label>
                        <div className="auth__input__box">
                            <input
                                type="text"
                                id="username"
                                placeholder="username"
                                required
                                className="auth__input"
                                autoComplete="off"
                                ref={userRef}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                onFocus={() => setUsernameFocus(true)}
                                onBlur={() => setUsernameFocus(false)}
                            />
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <p className={usernameFocus && !validUsername ? "instructions" : "offScreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>
                    </div>

                    <div className="auth__box">
                        <label htmlFor="password">
                            Password:
                            <FontAwesomeIcon icon={faCheck} className={validPassword ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={!validPassword && passwordFocus ? "invalid" : "hide"} />
                        </label>
                        <div className="auth__input__box">
                            <input
                                type="password"
                                id="password"
                                placeholder="password"
                                required
                                className="auth__input"
                                autoComplete="off"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onFocus={() => setPasswordFocus(true)}
                                onBlur={() => setPasswordFocus(false)}
                            />
                            <FontAwesomeIcon icon={faKey} />
                        </div>
                        <p className={passwordFocus && !validPassword ? "instructions" : "offScreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: ! @ # $ %
                        </p>
                    </div>

                    <div className="auth__box">
                        <label htmlFor="confirmPassword">
                            Confirm Password:
                            <FontAwesomeIcon icon={faCheck} className={validConfirmPassword ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={confirmPasswordFocus && !validMatch ? "invalid" : "hide"} />
                        </label>
                        <div className="auth__input__box">
                            <input
                                type="password"
                                id="confirmPassowrd"
                                placeholder="confirm password"
                                required
                                className="auth__input"
                                autoComplete="off"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                onFocus={() => setConfirmPasswordFocus(true)}
                                onBlur={() => setConfirmPasswordFocus(false)}
                            />
                            <FontAwesomeIcon icon={faLock} />
                        </div>
                        <p className={confirmPasswordFocus && !validMatch ? "instructions" : "offScreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>
                    </div>

                    <div className="auth__box">
                        <label htmlFor="firstname">First Name:</label>
                        <div className="auth__input__box">
                            <input
                                type="text"
                                id="firstname"
                                placeholder="first name"
                                required
                                className="auth__input"
                                autoComplete="off"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <FontAwesomeIcon icon={faA} />
                        </div>
                    </div>

                    <div className="auth__box">
                        <label htmlFor="lastname">Last Name:</label>
                        <div className="auth__input__box">
                            <input
                                type="text"
                                id="lastname"
                                placeholder="last name"
                                required
                                className="auth__input"
                                autoComplete="off"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <FontAwesomeIcon icon={faB} />
                        </div>
                    </div>

                    <div className="auth__box">
                        <label htmlFor="birthData">
                            Birth Date:
                            <FontAwesomeIcon icon={faCheck} className={validBirthDate ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={birthDateFocus && !validBirthDate ? "invalid" : "hide"} />
                        </label>
                        <div className="auth__input__box">
                            <input
                                type="text"
                                id="birthDate"
                                placeholder="birth date"
                                required
                                className="auth__input"
                                autoComplete="off"
                                value={birthDate}
                                onChange={(e) => setBirthDate(e.target.value)}
                                onFocus={() => setBirthDateFocus(true)}
                                onBlur={() => setBirthDateFocus(false)}
                            />
                            <FontAwesomeIcon icon={faCalendarDays} />
                        </div>
                        <p className={birthDateFocus && !validBirthDate ? "instructions" : "offScreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Birth date should be provided in the next format:<br />
                            Format - dd.mm.yyyy<br />
                            Example - 01.12.1999<br />
                            dd - 01 - day<br />
                            mm - 12 - month<br />
                            yyyy - 1999 - year<br />
                        </p>
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