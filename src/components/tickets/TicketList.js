import { useEffect, useState } from "react"
import "./Tickets.css"

export const TicketList = () => {
    const [tickets, setTickets] = useState([])
    const [filteredTickets, setFilteredTickets] = useState([])
    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)


    useEffect(
        () => {
            console.log("Initial state of tickets", tickets) // View the initial state of tickets
            const fetchData = async () => {
                const response = await fetch(`http://localhost:8088/serviceTickets`)
                const ticketArray = await response.json()
                setTickets(ticketArray)
            }
            fetchData()
        },
        [] // When this array is empty, you are observing initial component state
    )

    useEffect(
        () => {
         if(honeyUserObject.staff) {
           //for staff
           setFilteredTickets(tickets)
     
         } else {
           const myTickets = tickets.filter(ticket => ticket.userId === honeyUserObject.id)
           setFilteredTickets(myTickets)
         }

       }, 
       [tickets]
     )

    return  <> 
                <h2>List of Tickets</h2>
                <article className="tickets">
                    {
                        filteredTickets.map(
                            (ticket) => {
                                return <section key={ticket.id} className="ticket">
                                    <header>{ticket.description}</header>
                                    <footer>Emergency: {ticket.emergency ? "!" : "No"}</footer>
                                </section>
                            }
                        )
                    }
                </article>
            </>
}
