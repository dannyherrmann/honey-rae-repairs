import { useEffect, useState } from "react"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    
    useEffect(
        () => {
            const fetchData = async () => {
                const response = await fetch(`http://localhost:8088/users?isStaff=true`)
                const userArray = await response.json()
                setEmployees(userArray)
            }
            fetchData()
        },
        []
    )

    return <article className="employees">
        {
            employees.map(employee => {
                return <section className="employee" key={`employee--${employee.id}`}>
                    <div>Name: {employee.fullName}</div>
                    <div>Email: {employee.email}</div>
                </section>
            })
        }
    
    </article>
}