import { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useQuery } from "react-query";

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
        <section className="customers">
            <h1 className="page__title">VIEW CUSTOMERS</h1>
            <table className="customers__table">
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>ISIKUKOOD</th>
                        <th>Driver License Number</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Vehicle</th>
                        <th>RUD</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((record, index) => (
                        <tr key={index}>
                            <td>{record.firstname}</td>
                            <td>{record.lastname}</td>
                            <td>{record.isikukood}</td>
                            <td>{record.driverLicenseNumber}</td>
                            <td>{record.address}</td>
                            <td>{record.email}</td>
                            <td>{record.phone}</td>
                            <td>{record.vehicle ? record.vehicle : 'None'}</td>
                            <td>RUD icons</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <Link className="effect__link" to="/">
                Go to the <span className="bold">Home</span> page
            </Link>
            <br />

            <button
                type="button"
                className="little__button"
                onClick={() => navigate(-1)}
            >
                Go Back
            </button>
        </section>
    )
}

export default Customers;