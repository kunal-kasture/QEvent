import TagCard from "../../components/Tag";

const Tags = async () => {
  const res = await fetch(`https://qevent-backend.labs.crio.do/tags`);
  const tags = await res.json();

  return (
    <div>
      <div className="flex flex-wrap w-full pt-24 mt-24 px-6 justify-center gap-6">
        {tags.map((tag) => (
          <TagCard id={tag.id} text={tag.name} className="p-4" />
        ))}
      </div>
    </div>
  );
};

export default Tags;
