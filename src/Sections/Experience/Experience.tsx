import styles from "./Experience.module.css";
import { SectionTitle, TextHighlight } from "../../components";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import ScrollReveal from "scrollreveal";
import { useRef, useEffect } from "react";

const experience = [
  {
    title: "Software Engineer @ Web Computing GmbH",
    jobtitle: "Software Engineer",
    description: (
      <>
        Currently working as a{" "}
        <TextHighlight>Software Engineer at Web Computing</TextHighlight>,
        building and maintaining modern web applications and software systems.
      </>
    ),
    date: "October 2025 - Present",
  },
  {
    title: "EY-Parthenon",
    jobtitle: "Computer Science Intern",
    description: (
      <>
        Worked on the{" "}
        <TextHighlight>
          design and implementation of an AI-powered data platform
        </TextHighlight>{" "}
        using Next.js, TypeScript, and Python. Developed PII detection models
        with PyTorch and Hugging Face, and built data visualization and
        automation solutions for complex workflows.
      </>
    ),
    date: "October 2024 - September 2025",
  },
  {
    title: "Fraunhofer SIT",
    jobtitle: "Research Assistant",
    description: (
      <>
        Conducted research on{" "}
        <TextHighlight>
          misinformation detection using NLP techniques
        </TextHighlight>
        . Improved data processing performance significantly and developed a
        React-based visualization tool to present research results.
      </>
    ),
    date: "August 2023 - July 2024",
  },
  {
    title: "Bachelor of Science in Computer Science",
    jobtitle: "Student",
    description: (
      <>
        Pursued a{" "}
        <TextHighlight>Bachelor's degree in Computer Science</TextHighlight>{" "}
        with a focus on Artificial Intelligence at TU Darmstadt.
      </>
    ),
    date: "October 2022 - February 2026",
  },
  {
    title: "Pexon Consulting GmbH",
    jobtitle: "Trainee",
    description: (
      <>
        Completed an intensive training program focused on{" "}
        <TextHighlight>
          cloud infrastructure, DevOps, and backend development
        </TextHighlight>
        . Built and deployed REST APIs, implemented CI/CD pipelines, and worked
        with AWS and Kubernetes.
      </>
    ),
    date: "August 2022 - September 2022",
  },
  {
    title: "Freelancer",
    jobtitle: "Freelancer",
    description: (
      <>
        I worked as a freelancer in the field of software development for about{" "}
        <TextHighlight>1.5 years</TextHighlight> and{" "}
        <TextHighlight>automated processes for various companies</TextHighlight>{" "}
        or extended already existing websites with functionalities.
      </>
    ),
    date: "April 2021 - August 2022",
  },
];

const Experience = () => {
  const titleRef = useRef<HTMLDivElement | null>(null);

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
    <section className={styles.experienceSection} id="experience">
      <SectionTitle title="Experience & Education" ref={titleRef} />
      <div className={styles.experienceContent}>
        {experience.map((exp, index) => (
          <ExperienceCard
            key={index}
            title={exp.title}
            jobtitle={exp.jobtitle}
            description={exp.description}
            date={exp.date}
            right={index % 2 === 0}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
