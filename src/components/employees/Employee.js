export const Employee = ({ fullName, email }) => {
    return <section className="employee">
              <div>Name: {fullName}</div>
              <div>Email: {email}</div>
            </section>
}