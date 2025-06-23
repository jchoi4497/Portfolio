import { useState } from "react";
import InfoCard from "./InfoCard";

function ContentSection({ title, description, projectLink, infoLinks, category, date, skills, photos = [] }) {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="mb-10">

      {/* Image Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={() => setActiveImage(null)}
        >
          <img
            src={activeImage}
            alt="Full Screenshot"
            className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-xl"
          />
        </div>
      )}

      {/* Project Screenshots */}
      {photos.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-4 max-w-[900px] pr-20 mr-32">
          {photos.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`${title} screenshot ${index + 1}`}
              className="rounded-xl shadow-md w-48 hover:opacity-90 cursor-pointer hover:scale-110 active:scale-100 transition"
              onClick={() => setActiveImage(src)}
            />
          ))}
        </div>
      )}

      {/* Title */}
      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl underline hover:no-underline font-bold focus:text-stone-600"
      >
        {title}
      </a>

      {/* Description and InfoCard */}
      <div className="font-thin half:flex half:items-start half:gap-4">
        <p className="mb-4 mr-4 max-w-full half:w-[325px]">
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