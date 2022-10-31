import { Link } from "react-router-dom"

export const Customer = ({ id, fullName, address, phoneNumber }) => {
    return <section className="customer">
        <div className="customerField">
            <Link to={`/customers/${id}`}>Name: {fullName}</Link>
        </div>
        <div className="customerField">Address: {address}</div>
        <div className="customerField">Phone Number: {phoneNumber}</div>
    </section>
}