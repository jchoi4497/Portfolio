function InfoCard({ category, date, skills, infoLinks }) {
  return (
    <div className="half:max-w-[250px] mt-5">
      <div>
        <div className="font-semibold">Category</div>
        <div className="text-base"></div>{category}
      </div>

      <div >
        <div className="font-semibold">Date</div>
        <div className="text-base"></div>{date}
      </div>

      <div >
        <div className="font-semibold">Technical skills</div>
        <div className="text-base"></div>{skills.join(" / ")}
      </div>

      {infoLinks && (
        <div >
          <div className="font-semibold">More information</div>
          <ul className="flex flex-col gap-4">
            {infoLinks.map((link, index) => (
              <li key={index}>
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 underline hover:no-underline focus:text-accent"
                >
                  {link.logo && (
                    <img src={link.logo} alt="" className="w-5 h-5 [html[data-theme=themeII]_&]:invert" />
                  )}
                  {link.label}

                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}

export default InfoCard;