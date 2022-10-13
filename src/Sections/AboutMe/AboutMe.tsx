import styles from "./AboutMe.module.css";
import { useEffect, useRef } from "react";
import "animate.css";
import ScrollReveal from "scrollreveal";
import { BiPlus } from "react-icons/bi";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Nextjs",
  "React",
  "Node.js",
  "Python",
  "Git",
  "Github",
  "NO SQL",
  "SQL",
];

const AboutMe = () => {
  const aboutMeRef = useRef<HTMLElement | null>(null);

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
    <section className={styles.AboutMeSection} ref={aboutMeRef}>
      <div className={styles.AboutMeTitleContainer}>
        <h1 className={styles.AboutMeTitle}>About Me</h1>
        <span className={styles.bar}></span>
      </div>
      <div className={styles.AboutMeContent}>
        <div className={styles.AboutMeTextContainer}>
          <p>
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>

          <p>
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </p>

          <p>
            I also recently launched a course that covers everything you need to
            build a web app with the Spotify API using Node & React.{" "}
          </p>

          <p>Here are a few technologies I’ve been working with recently:</p>
          <div className={styles.skillsContainer}>
            {skills.map((skill) => (
              <div className={styles.skillContainer}>
                <BiPlus className={styles.skillIcon} />
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
              src="/assets/Passfoto.png"
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
