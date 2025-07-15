import { FaFacebookF, FaYoutube, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../assets";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Sanket Matre</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Java Developer 
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Full Stack Java Developer skilled in building dynamic web applications,
           using Java, Spring Boot, HTML, CSS, JavaScript, and MySQL.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9922611142</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">matresanket00@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
          <a href="https://www.facebook.com/Noorlalu143/" target="_blank">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
