import { Link, useNavigate } from "react-router-dom";

const Customers = () => {
    const navigate = useNavigate();

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
                    <tr>
                        <td>Ivan</td>
                        <td>Ivanov</td>
                        <td>39512310110</td>
                        <td>EV059059</td>
                        <td>Pirita, Tallinn, 10059</td>
                        <td>ivan.petrov059@perm.com</td>
                        <td>+37253059059</td>
                        <td>749MJY</td>
                        <td>RUD</td>
                    </tr>

                    <tr>
                        <td>Ivan</td>
                        <td>Petrov</td>
                        <td>39512310110</td>
                        <td>EV059059</td>
                        <td>Pirita, Tallinn, 10059</td>
                        <td>ivan.petrov059@perm.com</td>
                        <td>+37253059059</td>
                        <td>749MJY</td>
                        <td>RUD</td>
                    </tr>

                    <tr>
                        <td>Ivan</td>
                        <td>Baskov</td>
                        <td>39512310110</td>
                        <td>EV059059</td>
                        <td>Pirita, Tallinn, 10059</td>
                        <td>ivan.petrov059@perm.com</td>
                        <td>+37253059059</td>
                        <td>749MJY</td>
                        <td>RUD</td>
                    </tr>

                    <tr>
                        <td>Ivan</td>
                        <td>Petrov</td>
                        <td>39512310110</td>
                        <td>EV059059</td>
                        <td>Pirita, Tallinn, 10059</td>
                        <td>ivan.petrov059@perm.com</td>
                        <td>+37253059059</td>
                        <td>749MJY</td>
                        <td>RUD</td>
                    </tr>

                </tbody>
            </table>

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