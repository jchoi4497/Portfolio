import ContentSection from "./ContentSection";

function Content() {
  return (
    <div className="font-mersin mt-8 w-full">
      <div className="pl-4 pt-6 half:pl-0 half:pt-0 half:ml-[442px] ">
        <ContentSection
          title="JcsGymGuide"
          description=
          {`An interactive, single-page app using React for dynamic state management, routing, and component-based design.
            Utilized Tailwind CSS to create a clean, responsive, and scalable user interface.
            Integrated Firebase Firestore for data storage, enabling users to log, edit, and delete personalized workout sessions.
            Implemented categorized exercise ordering, personalized input handling, and a saved workout history, demonstrating data structuring, CRUD operations, and user-centered UI/UX design.`}
          link="https://github.com/jchoi4497/Gym-Guide"
        />
      </div>
    </div>
  );
}

export default Content;