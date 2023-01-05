import React from "react";
import Image from "next/image";
import Link from "next/link";

const AllEvents = ({ data }) => {
  return (
    <div className="eventsPage">
      {data.map((event) => (
        <Link key={event.id} href={`/events/${event.id}`} className="card">
          <Image src={event.image} width={330} height={300} alt={event.title} />
          <h2>{event.title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default AllEvents;
