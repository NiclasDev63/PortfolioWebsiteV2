import styles from "./AboutMe.module.css";
import { useEffect, useRef } from "react";
import "animate.css";
import ScrollReveal from "scrollreveal";
import { BiPlus } from "react-icons/bi";
import { SectionTitle, TextHighlight } from "../../components";
import calcAge from "../../utils/calcAge"

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "Python",
  "Git",
  "Github",
  "NO SQL",
  "SQL",
  "Docker",
  "Kubernetes",
  "AWS",
];




const AboutMe = () => {
  const aboutMeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (aboutMeRef.current) {
      ScrollReveal().reveal(aboutMeRef.current, {
        origin: "bottom",
        distance: "4rem",
        easing: "linear",
        delay: 200,
        duration: 500,
        viewFactor: 0.08,
      });
    }
  }, []);

  return (
    <section className={styles.aboutMeSection} ref={aboutMeRef} id="about-me">
      <SectionTitle title="About Me" />
      <div className={styles.aboutMeContent}>
        <div className={styles.aboutMeTextContainer}>
          <p>
            Hi,  <TextHighlight>my name is Niclas Gregor. I am a {calcAge()} year old Computer Science Student from germany</TextHighlight>. I started programming a few years ago and have been passionate about software development ever since. In 2022 I started to get more involved in the field of web development, because it gives you the opportunity to reach billions of people with your ideas and projects.
          </p>

          <p>
          Although I only started programming in 2020, I have <TextHighlight>always had a connection to computers.</TextHighlight> Already in my younger years I made changes in the code of games to modify them according to my wishes.
          </p>

          <p>
          Since <TextHighlight>I dug into many different areas</TextHighlight> at the beginning of my computer science career to find out what I enjoy most, I <TextHighlight>got to know many different things and technologies</TextHighlight>, which gave me a very good overview of computer science in general.
          </p>

          <p>Here are a few of the <TextHighlight>technologies that particularly fascinated and interested me:</TextHighlight></p>
          <div className={styles.skillsContainer}>
            {skills.map((skill, index) => (
              <div className={styles.skillContainer} key={index}>
                <BiPlus className={styles.skillIcon} key={index} />
                <span className={styles.skill} key={skill}>
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.backgroundBox}></div>
          <div className={styles.imgFilter}>
            <img
              src="/assets/Passfoto.webp"
              alt="Passfoto"
              className={styles.picture}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
