import ContentSection from "./ContentSection";
import { projects } from "./data/projects";

function Content() {
  return (
    <div className="font-open-sans w-full pt-10 z-0">
      <div className="pl-4 pb-20 half:pl-0 half:pt-0 half:ml-[442px]">
        {projects.map((project) => (
          <ContentSection
            key={project.id}
            title={project.title}
            photos={project.photos}
            description={project.description}
            category={project.category}
            date={project.date}
            skills={project.skills}
            projectLink={project.projectLink}
            infoLinks={project.infoLinks}
          />
        ))}
      </div>
    </div>
  );
}

export default Content;
