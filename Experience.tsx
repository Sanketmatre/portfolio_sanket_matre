import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2026</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Deloitte Cybersecuirity Job Simulation"
            subTitle="(Powered by Forage)"
            result="India"
            des="Completed a virtual internship with Deloitte via Forage, gaining hands-on experience in cybersecurity risk analysis, incident response, and client communication."
          />
          <ResumeCard
            title="Deloite Data Analytics Job Simulation"
            subTitle="(Powered by Forage)"
            result="India"
            des="Completed a virtual experience simulating real-world tasks in data analysis, data visualization, and business insights. 
            Gained practical exposure to tools like Excel and developed client-ready dashboards and reports.

"
          />
          <ResumeCard
            title="TATA Gen-AI Powered Data Analytics Job Simulation"
            subTitle="(Powered by Forage)"
            result="India"
            des="Completed a virtual job simulation focused on AI-driven data analytics, including data interpretation, business decision-making, and generative AI integration. 
            Gained insight into how Tata uses AI tools to transform data into strategic insights.."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Language Skills</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="HTML,CSS,JAVASCRIPT"
            subTitle="via Udemy (2023 - 2024)"
            result="India"
            des="Studied and practiced HTML, CSS, and JavaScript to build responsive and interactive websites.
             Gained hands-on experience in structuring webpages, styling with modern layouts, and adding dynamic behavior using JavaScript."
          />
          <ResumeCard
            title="NODE,JS,REACT.JS"
            subTitle="Svpm College of engg. (2022 - 2026)"
            result="India"
            des="Explored Node.js for building backend services and APIs, and React.js for creating interactive, component-based user interfaces. 
            Gained hands-on experience through personal projects and real-world simulations.."
          />
          <ResumeCard
            title="MYSQL"
            subTitle="via online(2022 - 2026)"
            result="India"
            des="Studied MySQL for designing and managing relational databases. 
            Learned to write queries for creating, retrieving, updating, and deleting data, as well as using joins and constraints for structured data handling."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
