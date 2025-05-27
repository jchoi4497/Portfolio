import ContentSection from "./ContentSection";
import GitHubLogo from './images/GitHubLogo.png';


function Content() {
  return (
    <div className="font-open-sans mt-4 w-full">
      <div className="pl-4 pt-6 pb-20 half:pl-0 half:pt-0 half:ml-[442px] ">

        <ContentSection
          title="JcsGymGuide"
          description=
          {`This project holds personal significance as it was inspired by my own gym journey and the challenges I faced staying organized and knowing what exercises to do.
            Like many people new to the gym, I often felt unsure about which workouts to choose or how to structure my sessions.
            To solve this, I built an interactive, single-page application using React for dynamic state management and component-based design.
            Tailwind CSS was used to create a clean, responsive, and scalable UI, while Firebase Firestore handled data storage — allowing users to log, edit, and delete customized workout sessions.
            The app also includes categorized exercise ordering and personalized input handling to guide users through their routines.
            By combining CRUD operations with user-centered UI/UX principles, this app helps both beginners and experienced lifters stay consistent and confident in the gym.`
          }
          category={"Full-stack Web App"}
          date={"2024"}
          skills={["React", "Tailwind CSS", "Firebase"]}
          projectLink="https://jcsgymguide.netlify.app/"
          infoLinks={[
            { label: "Project code on Github", url: "https://github.com/jchoi4497/Gym-Guide", logo: GitHubLogo },
          ]}
        />

        <ContentSection
          title="YouNotDown"
          description=
          {`Collaboratively developed an application that simplifies the process of making plans with friends.
            The app allows multiple users to create and participate in polls, showing who wants to attend the event and their preferences.
            Worked closely with team members to optimize various components and the API server for efficient data handling, using React for the frontend and Tailwind CSS for a responsive, clean design.

`
          }
          skills={["React", "Tailwind CSS", "Firebase"]}
          category={"Full-stack Web App"}
          date={"2024"}
          projectLink="https://younotdown.netlify.app/"
          infoLinks={[
            { label: "Project code on Github", url: "https://github.com/yumyumtumtum/younotdown", logo: GitHubLogo },
          ]}
        />

        <ContentSection
          title="Components"
          description=
          {`An application designed to showcase and demonstrate various components and techniques learned throughout my development journey.
            The app serves as a portfolio of different UI components, including form elements, buttons, modals, accordions, and interactive features.`
          }
          category={"Full-stack Web App"}
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
}

export default Content;