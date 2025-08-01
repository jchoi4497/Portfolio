import PortfolioPic from './images/Portfolio.jpg';
import GitHubLogo from './images/GitHubLogo.png';
import LinkedInLogo from './images/LinkedInLogo.svg.png';

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
          <span className="font-bold text-2xl block">
            Software Engineer
          </span>
          I’m a San Francisco native with a business economics degree who took an unconventional path into tech.
          Instead of following the typical CS degree or coding bootcamp route, I taught myself to code through online courses, personal projects, and plenty of trial and error.
          These days, I’m passionate about building clean, responsive web apps using React, Tailwind CSS, and Firebase.
          I’m especially interested in creating tools that make everyday tasks more convenient and help people interact with information in smarter, simpler ways.
          If you want to know more, you can contact me at:
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
            <img src={GitHubLogo} alt="GitHub" className="w-5 h-5 [html[data-theme=themeII]_&]:invert" />
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