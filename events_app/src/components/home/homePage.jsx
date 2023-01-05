import Link from "next/link";
import Image from "next/image";

export const HomePage = ({ data }) => {
  return (
    <div className="homeBody">
      {data.map((event) => (
        <Link className="card" key={event.id} href={`/events/${event.id}`}>
          <Image src={event.image} width={350} height={200} />
          <div>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
