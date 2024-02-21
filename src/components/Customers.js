import { useState, useEffect } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const Customers = () => {
    const [customerData, setCustomerData] = useState();
    const axiosPrivate = useAxiosPrivate();

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        console.log('getCustomers mounts');
        let isMounted = true;
        const controller = new AbortController();

        const getCustomers = async () => {
            try {
                const response = await axiosPrivate.get('/api/customers', {
                    signal: controller.signal
                });
                console.log('getCustomers', JSON.stringify(response.data));
                isMounted && setCustomerData((response.data));
            } catch (err) {
                if (isMounted) {
                    console.log('error in getCustomers', err);
                    navigate('/login', { state: { from: location }, replace: true });
                }
            }
        }

        getCustomers()

        return () => {
            console.log('getCustomers unmounts');
            isMounted = false;
            controller.abort();
        }
    }, []);

    return (
        <section className="customers">
            <h1 className="page__title">VIEW CUSTOMERS</h1>
            {customerData ? (
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
                        {customerData.map((record, index) => (
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
            ) : (
                <h1>no data to display</h1>
            )}

            <br />
            <Link className="effect__link" to="/">
                Go to the <span className="bold">Home</span> page
            </Link>
            <br />

            <button
                type="button"
                className="back__button"
                onClick={() => navigate(-1)}
            >
                Go Back
            </button>
        </section>
    )
}

export default Customers;