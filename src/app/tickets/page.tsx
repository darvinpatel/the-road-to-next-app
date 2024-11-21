import Link from "next/link";

import { initialTickets } from "@/data";

const TicketsPage = () => {
    return (
      <div>
        {initialTickets.map((ticket) => (
          <div key={ticket.id}>
            <h2 className="text-lg">{ticket.title}</h2>
            <p>{ticket.content}</p>
            <p>{ticket.status}</p>
            <Link href={`/tickets/${ticket.id}`} className="underline">
              View Ticket
            </Link>
          </div>
        ))}
      </div>
    );
  }
  
  export default TicketsPage;