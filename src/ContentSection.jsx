import InfoCard from "./InfoCard";

function ContentSection({ title, description, projectLink, infoLinks, category, date, skills }) {
  return (
    <div className="mb-10">
      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl underline font-bold hover:text-blue-600"
      >
        {title}
      </a>

      <div className="text-lg half:flex half:items-start half:gap-4">
        <p className="mb-4 mr-4 max-w-full half:w-[325px]">
          <span className="text-2xl font-bold mt-3 block">
            Description
          </span>
          {description}
        </p>

        <InfoCard
          category={category}
          date={date}
          skills={skills}
          infoLinks={infoLinks}
        />
      </div>

    </div>
  );
}

export default ContentSection;