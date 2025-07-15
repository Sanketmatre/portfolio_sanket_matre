import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2026</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Session</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Electronic & Telecommunication Engg."
            subTitle="Savitribai Phule Pune University (2022 - 2026)"
            result="9.02/10"
            des="I’m Sanket Matre, a final-year Electronics and Telecommunication Engineering (E&TC) student at Svpm College of Engineering Malegaon Bk.
             Pune University. During my studies, I developed a strong foundation in both hardware principles and software technologies, 
             which inspired my interest in web development and backend engineering."
          />
          <ResumeCard
            title="Higher Secondary Education (12th Standard)"
            subTitle="Shri Palasnath Vidyalay Palasdev (2021 - 2022)"
            result="74.80% / 100%"
            des="I completed my 12th (HSC) in Science stream with a focus on Physics, Chemistry, and Mathematics.
             This foundation helped me develop strong analytical and problem-solving skills,
              which later shaped my interest in engineering and software development."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Shri Palasnath Vidyalay Palasdev (2019 - 2020)"
            result="86.40% / 100%"
            des="I completed my 10th (SSC) with a strong academic record, 
            laying the groundwork in Mathematics, Science, and Logical Thinking."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2025-2026</p>
        <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
          //  title="Sr. Software Engineer"
          //  subTitle="Google Out Tech - (2017 - Present)"
          //  result="USA"
          //  des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
         // />
         // <ResumeCard
         //   title="Web Developer & Trainer"
         //   subTitle="Apple Developer Team - (2012 - 2016)"
         //   result="MALAYSIA"
         //   des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          ///>
          //<ResumeCard
            title="Web Development"
            subTitle="Web Development Intern — CodeClause"
            result="India"
            des="Worked on real-world web development tasks, including building responsive websites and integrating frontend with backend logic.
             Gained hands-on experience with HTML, CSS, JavaScript, and project deployment.

"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
