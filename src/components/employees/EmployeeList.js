import { useEffect, useState } from "react"
import "./Employees.css"
import { Employee } from "./Employee"

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
                return <Employee 
                            key={`employee--${employee.id}`}
                            id={employee.id} 
                            fullName={employee.fullName} 
                            email={employee.email}/>
            })
        }
    
    </article>
}