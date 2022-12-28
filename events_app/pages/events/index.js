import Image from "next/image";
import Link from "next/link";

const EventsPage = ({ data }) => {
  return (
    <>
      <h1>Events Page</h1>
      <div>
        {data.map((event) => (
          <Link key={event.id} href={`/events/${event.id}`}>
            <Image
              src={event.image}
              width={200}
              height={200}
              alt={event.title}
            />
            <h2>{event.title}</h2>
          </Link>
        ))}
      </div>
    </>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");
  return {
    props: {
      data: events_categories,
    },
  };
}
