import SingleEvent from "../../../src/components/events/SingleEvent";

const SingleEventPage = ({ data }) => {
  return <SingleEvent data={data} />;
};

export default SingleEventPage;

export async function getStaticPaths() {
  const data = await import("/data/data.json");
  const allEvents = data.allEvents;

  const allPaths = allEvents.map((path) => {
    return {
      params: {
        categories: path.city,
        id: path.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // console.log(context);
  const id = context.params.id;
  const { allEvents } = await import("/data/data.json");
  const eventData = allEvents.find((event) => id === event.id);

  return {
    props: { data: eventData },
  };
}
