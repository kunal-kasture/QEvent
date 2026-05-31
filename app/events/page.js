import EventCard from "../../components/EventCard";

const Events = async () => {
  const res = await fetch(`https://qevent-backend.labs.crio.do/events`);
  const events = await res.json();

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {events.map((event) => (
          <EventCard key={event.id} eventData={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
