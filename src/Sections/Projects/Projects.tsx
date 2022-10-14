import styles from "./Projects.module.css";
import Card from "./Card/Card";
import { SectionTitle } from "../../components";
import ScrollReveal from "scrollreveal";
import { useRef, useEffect } from "react";

const projects = [
  {
    title: "Spooky Chat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, quis aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, quis aliquam nunc nisl sit amet nisl.",
    image: "https://picsum.photos/200/300",
    techStack: ["React", "Typescript", "CSS", "Typescript", "CSS"],
    link: "https://github.com/NiclasDev63/SpookyChat",
  },
  {
    title: "Mnist Recognition",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, quis aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, quis aliquam nunc nisl sit amet nisl.",
    image: "https://picsum.photos/200/300",
    techStack: ["React", "Typescript", "CSS", "Typescript", "CSS"],
    link: "https://github.com/NiclasDev63/MNISTRecognition",
  },
  {
    title: "Algorithm Tutorial",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, quis aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, quis aliquam nunc nisl sit amet nisl.",
    image: "https://picsum.photos/200/300",
    techStack: ["React", "Typescript", "CSS", "Typescript", "CSS"],
    link: "https://github.com/NiclasDev63/Algorithmen-einfach-erklaert",
  },
  {
    title: "Algorithm Visualizer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, quis aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, quis aliquam nunc nisl sit amet nisl.",
    image: "https://picsum.photos/200/300",
    techStack: ["React", "Typescript", "CSS", "Typescript", "CSS"],
    link: "https://github.com/NiclasDev63/Algorithm-visualization",
  },
  {
    title: "ImmoScout24 Crawler",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, quis aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, quis aliquam nunc nisl sit amet nisl.",
    image: "https://picsum.photos/200/300",
    techStack: ["React", "Typescript", "CSS", "Typescript", "CSS"],
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
    <div className={styles.projectsContainer}>
      <span className={styles.titleWrapper} ref={titleRef}>
      <SectionTitle title="Projects" /></span>
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
    </div>
  );
};

export default Projects;
