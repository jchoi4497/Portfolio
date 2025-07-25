import ContentSection from "./ContentSection";
import GitHubLogo from './images/GitHubLogo.png';

import GymCreateWorkout from './images/GymGuidePhotos/GymCreateWorkout.png';
import GymEditWorkout from './images/GymGuidePhotos/GymEditWorkout.png';
import GymGetStarted from './images/GymGuidePhotos/GymGetStarted.png';
import GymLandingPage from './images/GymGuidePhotos/GymLandingPage.png';
import GymWorkoutList from './images/GymGuidePhotos/GymWorkoutList.png';
import GimGif from './images/GymGuidePhotos/GymGif.gif';

import YouNotDownLanding from './images/YouNotDownPhotos/YouNotDownLanding.png';
import YouNotDownCreatePoll from './images/YouNotDownPhotos/YouNotDownCreatePoll.png';
import YouNotDownNames from './images/YouNotDownPhotos/YouNotDownNames.png';
import YouNotDownPoll from './images/YouNotDownPhotos/YouNotDownPoll.png';
import YouNotDownResults from './images/YouNotDownPhotos/YouNotDownResults.png';

import MapStart from './images/MapPhotos/MapStart.png';
import MapSearch from './images/MapPhotos/MapSearch.png';
import MapLocation from './images/MapPhotos/MapLocation.png';
import MapDark from './images/MapPhotos/MapDark.png';
import MapGif from './images/MapPhotos/MapGif.gif';

import CompDropdown from './images/ComponentsPhotos/CompDropdown.png';
import CompAccordion from './images/ComponentsPhotos/CompAccordion.png';
import CompModal from './images/ComponentsPhotos/CompModal.png';
import CompTable from './images/ComponentsPhotos/CompTable.png';


function Content() {
  return (
    <div className="font-open-sans w-full pt-10 z-0">
      <div className="pl-4 pb-20 half:pl-0 half:pt-0 half:ml-[442px]">

        <ContentSection
          title="JcsGymGuide"
          photos={[GymLandingPage, GymGetStarted, GimGif, GymEditWorkout, GymWorkoutList]}
          description=
          {`This project holds personal significance because it was inspired by my own gym journey and the challenges I faced staying organized and knowing what exercises to do. Like many people who are new to the gym, I often felt unsure about which workouts to choose or how to structure my sessions. To solve this, I built an interactive single page application using React for dynamic state management and a component based design. Tailwind CSS was used to create a clean, responsive, and scalable user interface, while Firebase Firestore handled data storage, allowing users to log, edit, and delete customized workout sessions.
            To take the experience further, I integrated the OpenAI API, enabling the app to analyze workout logs and provide personalized insights and suggestions based on user input. I also implemented Recharts to visualize workout data, allowing users to track their progress and spot trends over time.
            The app features categorized exercise ordering and intuitive input handling to guide users through their routines. By combining full CRUD functionality with AI powered feedback, visual data tracking, and user focused design, this application helps both beginners and experienced lifters stay consistent, informed, and confident in the gym.
            `
          }
          category={"Frontend Web Application"}
          date={"2024"}
          skills={["React", "Tailwind CSS", "Firebase"]}
          projectLink="https://jcsgymguide.netlify.app/"
          infoLinks={[
            { label: "Project code on Github", url: "https://github.com/jchoi4497/Gym-Guide", logo: GitHubLogo },
          ]}
        />

        <ContentSection
          title="YouNotDown"
          photos={[YouNotDownLanding, YouNotDownCreatePoll, YouNotDownNames, YouNotDownPoll, YouNotDownResults]}
          description=
          {`Collaboratively developed an application that simplifies the process of making plans with friends.
            The app allows multiple users to create and participate in polls, showing who wants to attend the event and their preferences.
            Worked closely with team members to optimize various components and the API server for efficient data handling, using React for the frontend and Tailwind CSS for a responsive, clean design.
            `
          }
          skills={["React", "Tailwind CSS", "Firebase"]}
          category={"Frontend Web Application"}
          date={"2024"}
          projectLink="https://younotdown.netlify.app/"
          infoLinks={[
            { label: "Project code on Github", url: "https://github.com/yumyumtumtum/younotdown", logo: GitHubLogo },
          ]}
        />

        <ContentSection
          title="MapLocationSearch"
          photos={[MapStart, MapGif, MapSearch, MapLocation, MapDark]}
          description=
          {`Developed an interactive map application that allows users to search for locations using the OpenStreetMap API and view them on a dynamic Leaflet powered map.
            Implemented a location search component with real time query handling, displaying results with actionable buttons to update the map’s focus.
            Utilized TypeScript to enforce strict typing across components, improving code reliability and maintainability.
            Integrated React Leaflet to render map markers and smooth fly to animations upon location selection.
            Styled the UI with Tailwind CSS for a clean, responsive, and accessible user experience.
            Added a light/dark mode toggle using Tailwind CSS dark classes, ensuring fast load times, semantic markup, accessibility, responsiveness, and seamless theme switching without impacting performance or crawlability.
            Structured the app using modular components and TypeScript interfaces to streamline data flow and ensure type safe API response handling.
            `
          }
          skills={["React", "TypeScript", "Leaflet", "OpenStreetMap API", "Tailwind CSS"]}
          category={"Interactive Map Application"}
          date={"2024"}
          projectLink="https://maplocationsearch.netlify.app/"
          infoLinks={[
            { label: "Project code on Github", url: "https://github.com/jchoi4497/MapLocationSearch", logo: GitHubLogo },
          ]}
        />

        <ContentSection
          title="Components"
          photos={[CompDropdown, CompAccordion, CompModal, CompTable]}
          description=
          {`An application designed to showcase and demonstrate various components and techniques learned throughout my development journey.
            The app serves as a portfolio of different UI components, including form elements, buttons, modals, accordions, and interactive features.`
          }
          category={"Frontend Web Application"}
          date={"2024"}
          skills={["React", "Tailwind CSS"]}
          projectLink="https://componentdemonstrations.netlify.app/"
          infoLinks={[
            { label: "Project code on Github", url: "https://github.com/jchoi4497/Components", logo: GitHubLogo },
          ]}
        />

      </div>
    </div>
  );
};

export default Content;