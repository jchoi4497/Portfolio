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
          <ul className="list-disc list-inside">
            {infoLinks.map((link, index) => (
              <li key={index}>
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-600 hover:text-blue-800"
                >

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