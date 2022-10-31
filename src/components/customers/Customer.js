export const Customer = ({ fullName, address, phoneNumber }) => {
    return <section className="customer">
        <div className="customerField">Name: {fullName}</div>
        <div className="customerField">Address: {address}</div>
        <div className="customerField">Phone Number: {phoneNumber}</div>
    </section>
}