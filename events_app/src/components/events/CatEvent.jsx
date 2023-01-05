import React from "react";
import Image from "next/image";
import Link from "next/link";

const CatEvent = ({ pageName, data }) => {
  return (
    <div className="catEvents">
      <h1>Events in {pageName}</h1>
      <div>
        {data.map((event) => (
          <Link
            className="card"
            key={event.id}
            href={`/events/${event.city}/${event.id}`}
          >
            <Image
              src={event.image}
              width={200}
              height={200}
              alt={event.title}
            />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CatEvent;
