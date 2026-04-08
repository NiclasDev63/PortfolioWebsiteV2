import styles from "./AboutMe.module.css";
import { useEffect, useRef } from "react";
import "animate.css";
import ScrollReveal from "scrollreveal";
import { BiPlus } from "react-icons/bi";
import { SectionTitle, TextHighlight } from "../../components";
import calcAge from "../../utils/calcAge";

const skills = [
  "HTML",
  "(Tailwind) CSS",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "Python",
  "Git",
  "tRPC",
  "PostgreSQL",
  "PyTorch",
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
            Hi,{" "}
            <TextHighlight>
              my name is Niclas Gregor. I am a {calcAge()} year old Software
              Engineer from germany
            </TextHighlight>
            . I started programming in 2020 and quickly developed a strong
            interest in software development. In 2022, I began focusing more on
            web development, drawn by its ability to turn ideas into products
            that can reach people at scale.
          </p>
          <p>
            Although I started programming relatively "recently",{" "}
            <TextHighlight>
              my interest in computers goes back much further.
            </TextHighlight>{" "}
            As a kid, I was already modifying game files and experimenting with
            code to change how things worked.
          </p>
          <p>
            {" "}
            Early on,{" "}
            <TextHighlight>
              {" "}
              I explored a wide range of areas within computer science{" "}
            </TextHighlight>{" "}
            to figure out what interested me most. Along the way, I{" "}
            <TextHighlight>
              {" "}
              gained hands-on experience with various technologies{" "}
            </TextHighlight>{" "}
            , giving me a strong overall understanding of the field.{" "}
          </p>{" "}
          <p>
            {" "}
            Here are some of the{" "}
            <TextHighlight>
              {" "}
              technologies that stood out to me the most:{" "}
            </TextHighlight>{" "}
          </p>
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
              src="/assets/Me.webp"
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
