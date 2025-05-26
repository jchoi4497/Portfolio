function InfoCard({ category, date, skills, links }) {
  return (
    <div className="half:max-w-[250px]">
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

      {links && (
        <div >
          <div className="font-semibold">More information</div>
          <ul className="list-disc list-inside">
            {links.map((link, index) => (
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