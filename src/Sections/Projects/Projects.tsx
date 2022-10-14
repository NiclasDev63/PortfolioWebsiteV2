import styles from "./Projects.module.css";
import Card from "./Card/Card";
import { SectionTitle } from "../../components";

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
  return (
    <div className={styles.projectsContainer}>
      <span className={styles.titleWrapper}>
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
