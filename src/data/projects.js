import GitHubLogo from "../images/GitHubLogo.png";

// Gym Guide Photos
import GymCreateWorkout from "../images/GymGuidePhotos/GymCreateWorkout.png";
import GymEditWorkout from "../images/GymGuidePhotos/GymEditWorkout.png";
import GymGetStarted from "../images/GymGuidePhotos/GymGetStarted.png";
import GymLandingPage from "../images/GymGuidePhotos/GymLandingPage.png";
import GymWorkoutList from "../images/GymGuidePhotos/GymWorkoutList.png";
import GymGif from "../images/GymGuidePhotos/GymGif.gif";
import GraphGif from "../images/GymGuidePhotos/GraphGif.gif";
import OpenAi from "../images/GymGuidePhotos/OpenAI.png";
import MobileDemo from "../images/GymGuidePhotos/MobileDemo.gif";

// YouNotDown Photos
import YouNotDownLanding from "../images/YouNotDownPhotos/YouNotDownLanding.png";
import YouNotDownCreatePoll from "../images/YouNotDownPhotos/YouNotDownCreatePoll.png";
import YouNotDownNames from "../images/YouNotDownPhotos/YouNotDownNames.png";
import YouNotDownPoll from "../images/YouNotDownPhotos/YouNotDownPoll.png";
import YouNotDownResults from "../images/YouNotDownPhotos/YouNotDownResults.png";

// Map Photos
import MapStart from "../images/MapPhotos/MapStart.png";
import MapSearch from "../images/MapPhotos/MapSearch.png";
import MapLocation from "../images/MapPhotos/MapLocation.png";
import MapDark from "../images/MapPhotos/MapDark.png";
import MapGif from "../images/MapPhotos/MapGif.gif";

// Components Photos
import CompDropdown from "../images/ComponentsPhotos/CompDropdown.png";
import CompAccordion from "../images/ComponentsPhotos/CompAccordion.png";
import CompModal from "../images/ComponentsPhotos/CompModal.png";
import CompTable from "../images/ComponentsPhotos/CompTable.png";

// JonnyBottles Photos
import JB from "../images/JonnyBottlesPhotos/jb.png";
import JBMenu from "../images/JonnyBottlesPhotos/jbmenu.gif";
import JBFilter from "../images/JonnyBottlesPhotos/jbfilter.gif";
import JBFilter2 from "../images/JonnyBottlesPhotos/jbfilter2.gif";

// Windborne Project Photos
import globe from "../images/windborneProjectPhotos/globe.png";
import globe2 from "../images/windborneProjectPhotos/globe2.png";
import globe3 from "../images/windborneProjectPhotos/globe3.png";
import globegif from "../images/windborneProjectPhotos/globegif.gif";
import globegifmobile from "../images/windborneProjectPhotos/globegifmobile.gif";

export const projects = [
  {
    id: "jcsgymguide",
    title: "JcsGymGuide",
    photos: [
      GymLandingPage,
      GymGif,
      GymWorkoutList,
      GraphGif,
      OpenAi,
      MobileDemo,
    ],
    description: `Inspired by my own fitness journey, I built a mobile-first workout tracking platform that prioritizes data integrity and user experience. Using React, Tailwind CSS, and the Context API, I architected centralized state management
                  to eliminate props drilling and built dual-storage session persistence to prevent data loss during workouts. The UI features iOS-style drum pickers for zero-friction input, drag-and-drop exercise reordering via @dnd-kit, and
                  flash-card navigation for real-time tracking. I secured the backend with Firebase OAuth 2.0 and Firestore for cross-device sync, integrated the OpenAI API for workout analysis and progressive overload recommendations, and used
                  Recharts to visualize performance trends. This project showcases my ability to build resilient data architectures and polished mobile experiences that transform fitness data into actionable insights.
                  This project demonstrates my ability to bridge the gap between secure backend 'plumbing' and a polished user experience, turning the messy data of a workout into a structured, actionable system.
            `,
    category: "Frontend Web Application",
    date: "2024",
    skills: ["React", "Tailwind CSS", "Firebase"],
    projectLink: "https://jcsgymguide.netlify.app/",
    infoLinks: [
      {
        label: "Project code on Github",
        url: "https://github.com/jchoi4497/Gym-Guide",
        logo: GitHubLogo,
      },
    ],
  },
  {
    id: "windborne-project",
    title: "WindborneProject",
    photos: [globe, globe2, globe3, globegif, globegifmobile],
    description: `I built an interactive 3D globe application that visualizes atmospheric balloon flight paths with real-time weather overlays. Using React, Three.js, and react-globe.gl for WebGL-powered 3D rendering, the app fetches live telemetry from Windborne Systems and enriches it with meteorological data from the OpenWeatherMap API. Location markers are color-coded by temperature and rendered on an animated Earth with cloud layers.

  The full-stack implementation features a Node.js/Express backend with Netlify serverless functions for data processing. I engineered resilient API integration with rate limiting (60 requests/minute), exponential backoff retry logic, and comprehensive error handling for corrupt or unavailable data. The app auto-refreshes every five minutes, demonstrating my ability to build robust real-time data visualization applications.`,
    category: "Full Stack + Data Visualization",
    date: "2025",
    skills: [
      "React",
      "Node.js",
      "Express",
      "Three.js",
      "react-globe.gl",
      "OpenWeatherMap API",
    ],
    projectLink: "https://windborneproject.netlify.app/",
    infoLinks: [
      {
        label: "Project code on Github",
        url: "https://github.com/jchoi4497/windborneProject",
        logo: GitHubLogo,
      },
    ],
  },
  {
    id: "jonnybottles",
    title: "JonnyBottles",
    photos: [JB, JBFilter, JBFilter2, JBMenu],
    description: `Developed a modern, responsive product showcase web app using Vue 3 and Tailwind CSS. The site features a mobile-first layout, smooth category and tag filtering, and dynamic product rendering based on user interaction. Implemented state management with Vue's reactivity system to handle real-time updates, and used computed properties for efficient filtering logic. The UI includes animated transitions, scroll-based navigation, and a polished UX across devices. Deployed with production-ready configuration to ensure optimal performance and accessibility.
            `,
    category: "Frontend Web Application",
    date: "2025",
    skills: ["Vue 3", "Tailwind CSS", "Firebase"],
    projectLink: "https://jonnybottles.netlify.app/",
    infoLinks: [
      {
        label: "Project code on Github",
        url: "https://github.com/jchoi4497/jonnybottles",
        logo: GitHubLogo,
      },
    ],
  },
  {
    id: "younotdown",
    title: "YouNotDown",
    photos: [
      YouNotDownLanding,
      YouNotDownCreatePoll,
      YouNotDownNames,
      YouNotDownPoll,
      YouNotDownResults,
    ],
    description: `Collaboratively developed an application that simplifies the process of making plans with friends.
            The app allows multiple users to create and participate in polls, showing who wants to attend the event and their preferences.
            Worked closely with team members to optimize various components and the API server for efficient data handling, using React for the frontend and Tailwind CSS for a responsive, clean design.
            `,
    skills: ["React", "Tailwind CSS", "Firebase"],
    category: "Frontend Web Application",
    date: "2024",
    projectLink: "https://younotdown.netlify.app/",
    infoLinks: [
      {
        label: "Project code on Github",
        url: "https://github.com/yumyumtumtum/younotdown",
        logo: GitHubLogo,
      },
    ],
  },
  {
    id: "maplocationsearch",
    title: "MapLocationSearch",
    photos: [MapStart, MapGif, MapSearch, MapLocation, MapDark],
    description: `Developed an interactive map application that allows users to search for locations using the OpenStreetMap API and view them on a dynamic Leaflet powered map.
            Implemented a location search component with real time query handling, displaying results with actionable buttons to update the map's focus.
            Utilized TypeScript to enforce strict typing across components, improving code reliability and maintainability.
            Integrated React Leaflet to render map markers and smooth fly to animations upon location selection.
            Styled the UI with Tailwind CSS for a clean, responsive, and accessible user experience.
            Added a light/dark mode toggle using Tailwind CSS dark classes, ensuring fast load times, semantic markup, accessibility, responsiveness, and seamless theme switching without impacting performance or crawlability.
            Structured the app using modular components and TypeScript interfaces to streamline data flow and ensure type safe API response handling.
            `,
    skills: [
      "React",
      "TypeScript",
      "Leaflet",
      "OpenStreetMap API",
      "Tailwind CSS",
    ],
    category: "Interactive Map Application",
    date: "2024",
    projectLink: "https://maplocationsearch.netlify.app/",
    infoLinks: [
      {
        label: "Project code on Github",
        url: "https://github.com/jchoi4497/MapLocationSearch",
        logo: GitHubLogo,
      },
    ],
  },
  {
    id: "components",
    title: "Components",
    photos: [CompDropdown, CompAccordion, CompModal, CompTable],
    description: `An application designed to showcase and demonstrate various components and techniques learned throughout my development journey.
            The app serves as a portfolio of different UI components, including form elements, buttons, modals, accordions, and interactive features.`,
    category: "Frontend Web Application",
    date: "2024",
    skills: ["React", "Tailwind CSS"],
    projectLink: "https://componentdemonstrations.netlify.app/",
    infoLinks: [
      {
        label: "Project code on Github",
        url: "https://github.com/jchoi4497/Components",
        logo: GitHubLogo,
      },
    ],
  },
];
