import { useState } from 'react';

function SideBar() {
  return (
    <div className="w-full half:w-[442px] half:fixed half:h-screen pl-4 pt-6 font-mersin overflow-auto relative">
      <h1 className="text-4xl font-bold mb-4 mt-5">Jonathan Choi</h1>

      <div className="relative flex flex-col gap-2 pr-0 half:pr-6">

        <p className="text-lg font-thin break-words w-full pr-0 half:pr-4 half:border-r-8 half:border-black">
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

      <ul className="mt-8 space-y-3 list-disc list-inside">
        <li>
          <a
            href="https://github.com/jchoi4497"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg underline hover:no-underline"
          >
            GitHub Profile
          </a>
        </li>
      </ul>


    </div>
  );
}

export default SideBar;