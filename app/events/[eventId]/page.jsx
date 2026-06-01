const EventDetails = async ({ params }) => {
  const eventId = params?.eventId;

  const res = await fetch(
    `https://qevent-backend.labs.crio.do/events/${eventId}`,
  );

  const eventDetail = await res.json();

  return (
    <div>
      <div className="mx-10 lg:mx-32 mt-8">
        <div className="justify-items-center">
          <img
            src={eventDetail.image}
            alt={eventDetail.name}
            className="w-full rounded-lg shadow-lg object-cover lg:w-[50%]"
          />
        </div>
        <h2 className="font-bold text-4xl bg-gradient-to-br from-orange-400 to-teal-600 bg-clip-text text-transparent pt-6">
          {eventDetail.name}
        </h2>
        <h3 className="font-bold text-2xl bg-gradient-to-br from-orange-400 to-teal-600 bg-clip-text text-transparent">
          {eventDetail.location}
        </h3>
        <h4 className="font-bold text-xl bg-gradient-to-br from-orange-400 to-teal-600 bg-clip-text text-transparent">
          {eventDetail.artist}
        </h4>
        <div className="flex flex-wrap gap-4 py-4">
          {eventDetail?.tags?.map((tag, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-orange-400 to-teal-600 text-white rounded-2xl w-fit px-3 py-1 text-center font-bold"
            >
              #{tag}
            </div>
          ))}
        </div>
        <p className="font-bold my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cumque
          placeat architecto dolorem inventore ex eius recusandae quod
          perspiciatis voluptatum maxime porro soluta repellat tempore
          accusamus. Incidunt, iure laborum? Modi odio possimus dicta sapiente
          neque tempora corporis recusandae nostrum et, ipsam omnis laudantium
          sequi, hic dolore pariatur ad commodi autem. Consectetur similique
          quam deleniti, nobis ullam error quisquam ipsam culpa! Quaerat, enim
          dolor reprehenderit excepturi esse sit aspernatur non odit aliquid
          sunt nam in debitis consequatur blanditiis hic nostrum odio laudantium
          eum numquam magni veniam inventore nesciunt minus harum? Tempore
          dignissimos est impedit velit esse odit tenetur ratione laudantium
          quia!
        </p>
        <div className="flex flex-wrap justify-between my-4">
          <p className="font-bold text-xl bg-gradient-to-b from-orange-400 to-teal-600 bg-clip-text text-transparent">
            ${eventDetail.price}
          </p>
          <button className="font-bold text-white bg-red-500 p-1 rounded-md">
            Buy Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
