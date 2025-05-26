import InfoCard from "./InfoCard";

function ContentSection({ title, description, link }) {
  return (
    <div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl underline font-bold hover:text-blue-600"
      >
        {title}
      </a>

      <div className="text-2xl font-bold mt-3">Description</div>

      <div className="half:flex half:items-start:gap-8">
        <p className="mb-4 mr-4 max-w-full half:w-[250px]">{description}</p>

        <div className="half:flex-shrink-0">
          <InfoCard
            category="Full-stack Web App"
            date="2024"
            skills={["React", "Tailwind CSS", "Firebase"]}
            links={[
              { label: "Project code on Github", url: "https://github.com/jchoi4497/Gym-Guide" },
            ]}
          />
        </div>
      </div>

    </div>
  );
}

export default ContentSection;