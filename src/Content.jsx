import ContentSection from "./ContentSection";

function Content() {
  return (
    <div className="font-mersin mt-4 w-full">
      <div className="pl-4 pt-6 half:pl-0 half:pt-0 half:ml-[442px] ">

        <ContentSection
          title="JcsGymGuide"
          description=
          {`An interactive, single-page app using React for dynamic state management, routing, and component-based design.
            Utilized Tailwind CSS to create a clean, responsive, and scalable user interface.
            Integrated Firebase Firestore for data storage, enabling users to log, edit, and delete personalized workout sessions.
            Implemented categorized exercise ordering, personalized input handling, and a saved workout history, demonstrating data structuring, CRUD operations, and user-centered UI/UX design.`
          }
          category={"Full-stack Web App"}
          date={"2024"}
          skills={["React", "Tailwind CSS", "Firebase"]}
          projectLink="https://github.com/jchoi4497/Gym-Guide"
          infoLinks={[
            { label: "Project code on Github", url: "https://github.com/jchoi4497/Gym-Guide" },
          ]}
        />

        <ContentSection
          title="YouNotDown"
          description=
          {`Developed an application that simplifies the process of making plans with friends.
            The app allows multiple users to create and participate in polls, showing who wants to attend the event and their preferences.
            Optimized various components and the API server to handle data efficiently, using React for the frontend and Tailwind CSS for a responsive, clean design.`
          }
          skills={["React", "Tailwind CSS", "Firebase"]}
          category={"Full-stack Web App"}
          date={"2024"}
          projectLink="https://github.com/yumyumtumtum/younotdown"
          infoLinks={[
            { label: "Project code on Github", url: "https://github.com/yumyumtumtum/younotdown" },
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
          projectLink="https://github.com/jchoi4497/Components"
          infoLinks={[
            { label: "Project code on Github", url: "https://github.com/jchoi4497/Components" },
          ]}
        />

      </div>
    </div>
  );
}

export default Content;