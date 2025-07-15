import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Business Stratagy"
            des="I understand project requirements and translate them into scalable, real-world solutions with clear goals.
             I believe in clean architecture and code that lasts.."
            icon={null}
          />
          <Card
            title="App Development"
            des="I build responsive and functional web applications using Java, Spring Boot, HTML, CSS, JavaScript, and MySQL, ensuring performance and scalability.."
            icon={<AiFillAppstore />}
          />
          <Card
            title="Frontend Development"
            des="I design clean, responsive interfaces using HTML, CSS, Tailwind CSS, and JavaScript, ensuring cross-browser compatibility and great user experience.."
            icon={<SiProgress />}
          />
          <Card
            title="Mobile Development"
            des="I design and build simple and responsive mobile web interfaces using responsive design principles, and I’m currently learning to develop cross-platform apps using React Native and Flutter.
             My goal is to deliver fast, intuitive mobile experiences.."
            icon={<FaMobile />}
          />
          <Card
            title=" Backend & Database Integration"
            des="I develop RESTful APIs using Spring Boot and handle data using MySQL, including CRUD operations, query optimization, and secure access."
            icon={<SiAntdesign />}
          />
         <Card
            title=" API Integration"
            des="I connect frontend applications with backend services using REST APIs, handling data exchange, authentication, and error management."
            icon={<FaGlobe />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
