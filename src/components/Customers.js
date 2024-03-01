import { Link, useNavigate, useLocation } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useQuery } from "react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faEye, faUserPen, faX, faBackward } from "@fortawesome/free-solid-svg-icons";

const Customers = () => {
    const axiosPrivate = useAxiosPrivate();

    const navigate = useNavigate();
    const location = useLocation();

    const fetchInterceptors = async () => {
        const { data } = await axiosPrivate.get('/api/customers');
        return data;
    }

    const { data, isLoading, error } = useQuery('interceptors', fetchInterceptors, {
        onError: (error) => {
            if (error) {
                console.log('navigating to the login page because error occured', error);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }
    });

    if (isLoading) return <p>is loading....</p>
    if (error) return <p>error</p>

    return (
        <>
            <button
                type="button"
                className="back__button__left__up"
                onClick={() => navigate(-1)}
            >
                <FontAwesomeIcon icon={faBackward} /> Back
            </button>
            <section className="customers">
                <h1 className="page__title">VIEW CUSTOMERS</h1>
                <table className="customers__table">
                    <thead>
                        <tr className="customers__table__head__row">
                            <th>First name</th>
                            <th>Last name</th>
                            <th>ISIKUKOOD</th>
                            <th>Driver License Number</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Vehicle</th>
                            <th>(Read/Upd./Del.)</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((record, index) => (
                            <tr key={index} className="customers__row">
                                <td>{record.firstname}</td>
                                <td>{record.lastname}</td>
                                <td>{record.isikukood}</td>
                                <td>{record.driverLicenseNumber}</td>
                                <td>{record.address}</td>
                                <td>{record.email}</td>
                                <td>{record.phone}</td>
                                <td>{record.vehicle ? record.vehicle : 'None'}</td>
                                <td className="RUD_cell">
                                    <FontAwesomeIcon icon={faEye} />
                                    <FontAwesomeIcon icon={faUserPen} />
                                    <FontAwesomeIcon icon={faX} />
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

                <br />

                <button
                    type="button"
                    className="page__main__button"
                    onClick={() => navigate('/newcustomer')}
                >
                    <FontAwesomeIcon icon={faUserPlus} /> NEW CUSTOMER<br />
                </button>
            </section>
        </>
    )
}

export default Customers;