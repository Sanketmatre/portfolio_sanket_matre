import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectThree, projectTwo } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="BEST EXPENSE TRACKER APP"
            des="A simple and intuitive expense tracking web app that helps users manage their personal or daily finances by recording income and expenses, visualizing spending patterns, and setting monthly budgets.!"
            src={projectOne}
          />
          <ProjectsCard
            title="AI-RESUME BUILDER"
            des="The AI Resume Builder solves these problems by using AI to assist users in writing powerful, tailored content and generating resumes instantly.
            In today's competitive job market, a well-structured, personalized resume can make or break opportunities:"
            src={projectTwo}
          />
          <ProjectsCard
            title="ONLINE QUIZ"
            des=" A full-featured web platform that allows users to take quizzes on various topics with real-time scoring and analytics. 
            Designed for students, teachers, and organizations to create, host, and participate in quizzes online.!"
            src={projectThree}
          />
          <ProjectsCard
            title="BEST EXPENSE TRACKER APP"
            des=" A simple and intuitive expense tracking web app that helps users manage their personal or daily finances by recording income and expenses, visualizing spending patterns, and setting monthly budgets.!"
            src={projectOne}
          />
          <ProjectsCard
            title="AI-RESUME BUILDER"
            des=" The AI Resume Builder solves these problems by using AI to assist users in writing powerful, tailored content and generating resumes instantly.
            In today's competitive job market, a well-structured, personalized resume can make or break opportunities:"
            src={projectTwo}
          />
          <ProjectsCard
            title="ONLINE QUIZ"
            des=" A full-featured web platform that allows users to take quizzes on various topics with real-time scoring and analytics. 
            Designed for students, teachers, and organizations to create, host, and participate in quizzes online.!"
            src={projectThree}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
