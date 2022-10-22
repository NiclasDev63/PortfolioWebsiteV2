import styles from "./Experience.module.css";
import { SectionTitle, TextHighlight } from "../../components";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import ScrollReveal from "scrollreveal";
import { useRef, useEffect } from "react";

const experience = [
  {
    title: "Bachelor of Science in Computer Science",
    jobtitle: "Student",
    description:
      <>I am currently pursuing my <TextHighlight>Bachelor's degree in Computer Science</TextHighlight> at the technical university of Darmstadt.</>,
    date: "October 2022",
  },
  {
    title: "Pexon Consulting GmbH",
    jobtitle: "Trainee / Cloud Engineer",
    description:
      <>I spent two months as a Trainee / Cloud Engineer <TextHighlight>developing REST APIs and CI/CD pipelines in Python</TextHighlight> and deploying them to the cloud (AWS). These projects involved technology such as: Python, Flask, Docker, Kubernetes, various AWS Cloud Services, Terraform, Prometheus, Grafana and more.</>,
    date: "August - September 2022",
  },
  {
    title: "Mindsquare AG",
    jobtitle: "Day Intern",
    description:
    <>I was able to accompany the employees in the area of software development and gained insights into the development of software in the SAP and Salesforce environment as well as dealing with and advising customers in terms of IT services</>,
    date: "April 2022",
  },
  {
    title: "Freelancer",
    jobtitle: "Freelancer",
    description:
    <>I worked as a freelancer in the field of software development for about 1.5 years and automated processes for various companies or extended already existing websites with functionalities.</>,
    date: "April 2021 - August 2022",
  },
  {
    title: "Max-Eyth-Schule",
    jobtitle: "Student",
    description:
    <>I graduated from high school in the field of business and administration with a grade point average of 2.0. (1.0 is the best possible grade)</>,
    date: "August 2019 - April 2021",
  },
  {
    title: "Audi Brass Dietzenbach GmbH & Co. KG",
    jobtitle: "Annual Intern",
    description:
    <>I was entrusted with the support of customers and was also involved in the development of various marketing concepts.</>,
    date: "August 2019 - March 2020",
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
      <SectionTitle title="Experience" ref={titleRef}/>
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
