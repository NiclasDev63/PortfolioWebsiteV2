import styles from "./Projects.module.css";
import Card from "./ProjectsCard/ProjectsCard";
import { SectionTitle, TextHighlight } from "../../components";
import ScrollReveal from "scrollreveal";
import { useRef, useEffect } from "react";

const projects = [
  {
    title: "Spooky Chat",
    description:<>Spooky Chat is a chat platform that is <TextHighlight>completely anonymous</TextHighlight>. You don't have to provide an email address or any other information. The chat platform is designed so that no data is stored and <TextHighlight>you always start from "zero" to guarantee full anonymity.</TextHighlight></>,
    image: "/assets/ProjectImages/SpookyChat.webp",
    techStack: ["React", "Typescript", "CSS", "HTML", "Firestore"],
    link: "https://github.com/NiclasDev63/SpookyChat",
  },
  {
    title: "Mnist Recognition",
    description:<>This project served to <TextHighlight>gain initial experience in the field of artificial intelligence</TextHighlight>. For this purpose, I <TextHighlight>trained a model using the MNIST dataset</TextHighlight>, so that it is able to determine digits drawn with the mouse.</>,
    image: "/assets/ProjectImages/Mnist.webp",
    techStack: ["Python", "Javascript", "HTML", "CSS", "Tensorflow"],
    link: "https://github.com/NiclasDev63/MNISTRecognition",
  },
  {
    title: "Algorithm Tutorial",
    description:<>This <TextHighlight>tutorial series served to explain common algorithms simply and clearly in the German language</TextHighlight>.</>,
    image: "/assets/ProjectImages/AlgorithmTutorial.webp",
    techStack: ["Python"],
    link: "https://github.com/NiclasDev63/Algorithmen-einfach-erklaert",
  },
  {
    title: "Algorithm Visualizer",
    description:<>I have developed the Algorithm Visualizer to <TextHighlight>illustrate a few of the algorithms covered in my course.</TextHighlight></>,
    image: "/assets/ProjectImages/AlgorithmVisualizer.png",
    techStack: ["Python", "Turtle"],
    link: "https://github.com/NiclasDev63/Algorithm-visualization",
  },
  {
    title: "ImmoScout24 Crawler",
    description:<>This was my <TextHighlight>first project</TextHighlight> when I started programming. Since I am also very interested in real estate besides programming I wrote an <TextHighlight>Immoscout24 crawler</TextHighlight> that <TextHighlight>automatically searches out all properties at a desired location and calculates them</TextHighlight> based on the rent index which is scraped from the homeday price atlas.</>,
    image: "/assets/ProjectImages/ImmoScout24Crawler.jpg",
    techStack: ["Python", "BeautifulSoup", "Requests", "Pandas"],
    link: "https://github.com/NiclasDev63/ImmoScout24Crawler",
  },
];

const Projects = () => {
  const titleRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (titleRef.current) {
      ScrollReveal().reveal(titleRef.current, {
        origin: "bottom",
        distance: "4rem",
        easing: "linear",
        delay: 200,
        duration: 500,
        viewFactor: 0.45,
      });
    }
  }, []);

  return (
    <section className={styles.projectsSection} id="projects">
      <span className={styles.titleWrapper} ref={titleRef}>
        <SectionTitle title="Projects" />
      </span>
      {projects.map((project, index) => (
        <Card
          left={index % 2 === 0}
          title={project.title}
          description={project.description}
          image={project.image}
          techStack={project.techStack}
          link={project.link}
          key={index}
        />
      ))}
    </section>
  );
};

export default Projects;
