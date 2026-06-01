import EventCard from "../../components/EventCard";

const Events = async ({ searchParams }) => {
  const res = await fetch(`https://qevent-backend.labs.crio.do/events`, {
    cache: "no-store",
  });
  const events = await res.json();
  const params = await searchParams;
  const artistQuery = params?.artist;
  const tagQuery = params?.tag;

  let filteredEvents = events;

  if (artistQuery) {
    filteredEvents = events.filter(
      (event) => event.artist.toLowerCase() === artistQuery.toLowerCase(),
    );
  } else if (tagQuery) {
    filteredEvents = events.filter((event) =>
      event.tags.some((t) => t.toLowerCase() === tagQuery.toLowerCase()),
    );
  }

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} eventData={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
