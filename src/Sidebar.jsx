import PortfolioPic from "./images/Portfolio.jpg";
import GitHubLogo from "./images/GitHubLogo.png";
import LinkedInLogo from "./images/LinkedInLogo.svg.png";
import GmailLogo from "./images/gmailLogos.jpg";

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
          As a San Francisco native and full-stack engineer, I build polished,
          performant systems with a focus on responsive design. I specialize in
          the JavaScript ecosystem—React, Next.js, and Vue 3—supported by
          scalable backends using Firebase and Supabase (PostgreSQL). My
          foundation in data integrity and secure OAuth 2.0 implementations now
          powers my work in AI agentic workflows and LLM orchestration, bridging
          the gap between unstructured data and actionable insights. Driven by a
          passion for data visualization, I aim to build software that
          fundamentally simplifies how we interact with complex information. If
          you want to know more about my journey or my projects, you can contact
          me below at:
        </p>
      </div>

      <ul className="mt-8 flex flex-col gap-4">
        <li>
          <a
            href="mailto:jchoi4497@gmail.com"
            className="inline-flex items-center gap-2 font-thin underline hover:no-underline focus:text-accent"
          >
            <img src={GmailLogo} alt="Email" className="w-5 h-5" />
            jchoi4497@gmail.com
          </a>
        </li>
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
