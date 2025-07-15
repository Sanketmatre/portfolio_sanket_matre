import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import { SiJavascript, SiMysql, SiHtml5 } from "react-icons/si";
import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Full Stack Java Developer", ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Sanket </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
         Hello! I'm Sanket Matre, a motivated and detail-oriented Full Stack Java Developer.
         with a solid foundation in Java, Spring Boot, HTML, CSS, JavaScript, and MySQL.
          I’m currently pursuing my Bachelor's in Electronics & Telecommunication Engineering,
           and I love turning complex problems into clean, efficient code.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/Sanketmatre" target="_blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/sanket-matre-0126a2296"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a >
             
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiMysql />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
  );
              <SiHtml5 />
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
