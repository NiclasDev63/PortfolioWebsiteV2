import styles from "./Projects.module.css";
import Card from "./ProjectsCard/ProjectsCard";
import { SectionTitle, TextHighlight } from "../../components";
import ScrollReveal from "scrollreveal";
import { useRef, useEffect } from "react";

const projects = [
  {
    title: "Scibly",
    description: (
      <>
        Scibly is a{" "}
        <TextHighlight>
          modern worksheet creation and distribution platform for educators
        </TextHighlight>
        , built to simplify and digitize the entire workflow from idea to
        classroom use. It enables teachers to{" "}
        <TextHighlight>
          transform existing materials into interactive formats or create new
          ones from scratch using an intuitive editor
        </TextHighlight>
        , making it easy to share, adapt, and reuse content across different
        learning environments.
      </>
    ),
    image: "https://scibly-assets.s3.eu-central-1.amazonaws.com/thumbnail.png",
    techStack: [
      "Next.js",
      "tRPC",
      "PostgreSQL",
      "Prisma",
      "TypeScript",
      "Tailwind CSS",
    ],
    link: "https://www.scibly.com",
  },
  {
    title: "Simplegrad",
    description: (
      <>
        Simplegrad is a{" "}
        <TextHighlight>
          minimal NumPy-based autodiff and neural network library
        </TextHighlight>
        , featuring a custom Tensor with a dynamic computation graph and{" "}
        <TextHighlight>reverse-mode automatic differentiation</TextHighlight>.
        It includes lightweight abstractions for building and training models,
        providing a{" "}
        <TextHighlight>
          clear, from-scratch implementation of core deep learning concepts
        </TextHighlight>{" "}
        similar to frameworks like PyTorch.
      </>
    ),
    image: "/assets/ProjectImages/Simplegrad.webp",
    techStack: ["Python", "NumPy"],
    link: "https://github.com/NiclasDev63/simplegrad",
  },
  {
    title: "ImmoGPT",
    description: (
      <>
        ImmoGPT is a <TextHighlight>real estate–focused chatbot</TextHighlight>{" "}
        designed to
        <TextHighlight>
          search and analyze the German property market using dedicated data
          retrieval tools
        </TextHighlight>
        . It is capable of{" "}
        <TextHighlight>
          decomposing complex queries into structured, multi-step workflows
        </TextHighlight>
        to deliver more accurate results. The system is{" "}
        <TextHighlight>built on GPT-3.5 via the OpenAI API</TextHighlight>.
      </>
    ),
    image: "/assets/ProjectImages/ChatGPT.webp",
    techStack: ["Python", "Web Crawling", "Prompt Engineering", "LLM"],
    link: "https://github.com/NiclasDev63/ImmoGPT",
  },
  {
    title: "Algorithm Visualizer",
    description: (
      <>
        The Algorithm Visualizer was developed to
        <TextHighlight>
          provide interactive visual representations of selected algorithms
        </TextHighlight>
        , enhancing understanding through step-by-step execution.
      </>
    ),
    image: "/assets/ProjectImages/AlgorithmVisualizer.png",
    techStack: ["Python", "Turtle"],
    link: "https://github.com/NiclasDev63/Algorithm-visualization",
  },
  {
    title: "Algorithm Tutorial",
    description: (
      <>
        This <TextHighlight>German-language tutorial series</TextHighlight> was
        created to
        <TextHighlight>
          explain fundamental algorithms in a clear, structured, and accessible
          manner
        </TextHighlight>
        .
      </>
    ),
    image: "/assets/ProjectImages/AlgorithmTutorial.webp",
    techStack: ["Python"],
    link: "https://github.com/NiclasDev63/Algorithmen-einfach-erklaert",
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
