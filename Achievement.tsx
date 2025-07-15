import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BRAINOVISION WORKSHOP"
            subTitle="Organized by Brainovision Solutions"
            result="Success"
            des="Participating in the Brainovision Solutions Workshop was a significant milestone in my personal and professional journey. This workshop provided more than just technical training — it offered real insight into how modern technology is applied in real-world scenarios. Topics like web development, data analytics, and emerging trends in cybersecurity were covered with practical examples, making complex concepts easier to understand and apply."
          />
          <ResumeCard
            title="Internship in Codeclause"
            subTitle="Codeclause Company- internship Certificate"
            result="Success"
            des="Completing my Web Development Internship at CodeClause was a significant achievement in my journey as a full stack developer. The internship challenged me to apply my technical knowledge in real-world tasks, pushing me beyond just writing code — it taught me how to think like a developer solving actual business problems.
Throughout the internship, I worked on designing responsive websites, building clean user interfaces, and integrating front-end logic with back-end functionalities using HTML, CSS, JavaScript, and basic backend logic. I gained valuable experience in writing readable, maintainable code and understanding how real projects are developed, tested, and deployed."
          />
          <ResumeCard
            title="Deloitte - Certifications"
            subTitle=" Deloitte"
            result="Success"
            des="Successfully completing both the Deloitte Cybersecurity and Data Analytics Virtual Job Simulations through Forage was a transformative learning experience in my professional development journey. These simulations offered me a unique opportunity to step into the shoes of a Deloitte consultant and tackle real-world tasks using industry-standard methods.
In the Cybersecurity Simulation, I explored how Deloitte professionals assess risk, respond to incidents, and communicate findings with clarity and professionalism. It sharpened my understanding of threat identification, mitigation strategies, and the critical role cybersecurity plays in modern digital systems."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
         //   title="Lorem ipsum dolor sit amet."
         //   subTitle="Lorem ipsum dolor sit amet alternative."
        //    result="Success"
        //    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
         // />
          //<ResumeCard
          //  title="Lorem ipsum dolor sit amet."
          //  subTitle="Lorem ipsum dolor sit amet alternative."
          //  result="Success"
         //   des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
         // />
          //<ResumeCard
           // title="Lorem ipsum dolor sit amet."
          //  subTitle="Lorem ipsum dolor sit amet alternative."
         //   result="Success"
         //   des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
