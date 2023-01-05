import CatEvent from "../../../src/components/events/catEvent";

const EventsCategoryPage = ({ data, pageName }) => {
  return <CatEvent data={data} pageName={pageName} />;
};

export default EventsCategoryPage;

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((event) => {
    return {
      params: {
        categories: event.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.categories;
  const { allEvents } = await import("/data/data.json");

  const data = allEvents.filter((event) => event.city === id);
  // console.log(data);

  return {
    props: { data, pageName: id },
  };
}
