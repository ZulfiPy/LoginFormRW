import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faA, faB, faIdBadge, faIdCard, faLocationDot, faAt, faPhone, faCar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const NewCustomer = () => {
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [isikukood, setIsikukood] = useState('');
    const [driverLicenseNumber, setDriverLicenseNumber] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [vehicle, setVehicle] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();

    const handleAddNewCustomer = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosPrivate.post('/api/customers',
                JSON.stringify({
                    firstname,
                    lastname,
                    isikukood,
                    driverLicenseNumber,
                    address,
                    email,
                    phone,
                    vehicle
                }));

            setfirstname('');
            setlastname('');
            setIsikukood('');
            setDriverLicenseNumber('');
            setAddress('');
            setEmail('');
            setPhone('');
            setVehicle('');

            navigate('/customers');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 401) {
                setErrMsg(err.response?.data.message);
            } else {
                setErrMsg('Some unexpected error occurred');
                console.log('error log: ', err);
            }
        }
    }

    return (
        <div className="new__customer">
            <section className="new__customer__section">
                <h1 className="new__customer__title">New Customer</h1>

                <form className="new__customer__form" onSubmit={handleAddNewCustomer}>

                    <div className="new__customer__inputs">


                        <section className="new__customer__box">
                            <label htmlFor="firstname">First Name:</label>

                            <section className="new__customer__input__box">
                                <input
                                    type="text"
                                    id="firstname"
                                    placeholder="First name"
                                    required
                                    className="new__customer__input"
                                    autoComplete="off"
                                    value={firstname}
                                    onChange={(e) => setfirstname(e.target.value)}
                                />
                                <FontAwesomeIcon icon={faA} />
                            </section>
                        </section>

                        <section className="new__customer__box">
                            <label htmlFor="lastname">Last Name:</label>

                            <section className="new__customer__input__box">
                                <input
                                    type="text"
                                    id="lastname"
                                    placeholder="Last name"
                                    required
                                    className="new__customer__input"
                                    autoComplete="off"
                                    value={lastname}
                                    onChange={(e) => setlastname(e.target.value)}
                                />
                                <FontAwesomeIcon icon={faB} />
                            </section>
                        </section>

                        <section className="new__customer__box">
                            <label htmlFor="isikukood">Isikukood:</label>

                            <section className="new__customer__input__box">
                                <input
                                    type="text"
                                    id="isikukood"
                                    placeholder="Isikukood"
                                    required
                                    className="new__customer__input"
                                    autoComplete="off"
                                    value={isikukood}
                                    onChange={(e) => setIsikukood(e.target.value)}
                                />
                                <FontAwesomeIcon icon={faIdBadge} />
                            </section>
                        </section>

                        <section className="new__customer__box">
                            <label className="driverLicenseNumber">Driver License Number:</label>

                            <section className="new__customer__input__box">
                                <input
                                    type="text"
                                    id="driverLicenseNumber"
                                    placeholder="Driver License Number:"
                                    required
                                    className="new__customer__input"
                                    autoComplete="off"
                                    value={driverLicenseNumber}
                                    onChange={(e) => setDriverLicenseNumber(e.target.value)}
                                />
                                <FontAwesomeIcon icon={faIdCard} />
                            </section>
                        </section>

                        <section className="new__customer__box">
                            <label htmlFor="address">Address:</label>

                            <section className="new__customer__input__box">
                                <input
                                    type="text"
                                    id="address"
                                    placeholder="Address"
                                    required
                                    className="new__customer__input"
                                    autoComplete="off"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                                <FontAwesomeIcon icon={faLocationDot} />
                            </section>
                        </section>

                        <section className="new__customer__box">
                            <label htmlFor="email">Email:</label>

                            <section className="new__customer__input__box">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    required
                                    className="new__customer__input"
                                    autoComplete="off"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <FontAwesomeIcon icon={faAt} />
                            </section>
                        </section>

                        <section className="new__customer__box">
                            <label htmlFor="phone">Phone:</label>

                            <section className="new__customer__input__box">
                                <input
                                    type="text"
                                    id="phone"
                                    placeholder="Phone"
                                    required
                                    className="new__customer__input"
                                    autoComplete="off"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                <FontAwesomeIcon icon={faPhone} />
                            </section>
                        </section>

                        <section className="new__customer__box">
                            <label htmlFor="vehicle">Vehicle:</label>

                            <section className="new__customer__input__box">
                                <input
                                    type="text"
                                    id="vehicle"
                                    placeholder="Vehicle"
                                    required
                                    className="new__customer__input"
                                    autoComplete="off"
                                    value={vehicle}
                                    onChange={(e) => setVehicle(e.target.value)}
                                />
                                <FontAwesomeIcon icon={faCar} />
                            </section>
                        </section>

                        <p className={errMsg ? "auth__errMsg" : "offScreen"}>
                            {errMsg}
                        </p>

                        <button type="submit" className="add__button">ADD NEW CUSTOMER</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default NewCustomer;