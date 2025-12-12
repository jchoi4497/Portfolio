import PortfolioPic from "./images/Portfolio.jpg";
import GitHubLogo from "./images/GitHubLogo.png";
import LinkedInLogo from "./images/LinkedInLogo.svg.png";

function SideBar() {
  return (
    <div className="w-full half:w-[442px] half:fixed half:h-screen pl-4 pt-6 font-open-sans overflow-auto z-0">
      <h1 className="text-4xl font-bold mb-4 mt-5">Jonathan Choi</h1>
      <div className="flex ml-10 mb-6">
        <img
          src={PortfolioPic}
          alt="Jonathan Choi"
          className="w-32 h-32 rounded-full shadow-lg"
        />
      </div>

      <div className="relative flex flex-col gap-2 pr-4 half:pr-6">
        <p className="font-thin break-words w-full pr-0 half:pr-4">
          <span className="font-bold text-2xl block">Software Engineer</span>
          As a San Francisco native with a background in Business Economics, I
          took the self-taught route to master web development, approaching
          complex systems with both a business and a developer's perspective. My
          passion lies in building clean, performant, and responsive
          applications across the JavaScript ecosystem. I specialize in
          front-end frameworks like React and Vue 3 (styled with Tailwind CSS),
          and architecting scalable back-ends using Firebase and the
          Postgres-based platform, Supabase. I am driven to create innovative
          tools that leverage data visualization and simplify how people
          interact with information. If you want to know more about my journey
          or my projects, you can contact me at:
        </p>
      </div>

      <ul className="mt-8 flex flex-col gap-4">
        <li>
          <a
            href="https://github.com/jchoi4497"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-thin underline hover:no-underline focus:text-accent"
          >
            <img
              src={GitHubLogo}
              alt="GitHub"
              className="w-5 h-5 [html[data-theme=themeII]_&]:invert"
            />
            GitHub Profile
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jonathan-choi-89026b198/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-thin underline hover:no-underline focus:text-accent"
          >
            <img src={LinkedInLogo} alt="LinkedIn" className="w-5 h-5" />
            LinkedIn Profile
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
