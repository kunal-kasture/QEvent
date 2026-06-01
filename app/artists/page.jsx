import { event } from "next/dist/build/output/log";
import ArtistCard from "../../components/ArtistCard";

const Artists = async () => {
  const res = await fetch(`https://qevent-backend.labs.crio.do/artists`);
  const artists = await res.json();

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {artists.map((artist) => (
          <ArtistCard key={event.id} artistData={artist} />
        ))}
      </div>
    </div>
  );
};

export default Artists;
