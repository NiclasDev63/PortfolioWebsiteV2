import styles from "./AboutMe.module.css";
import { CSSTransition } from "react-transition-group";
import { useIsInView } from "../../hooks";
import { useRef, useState } from "react";
import "animate.css";

const skills = ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Node.js"];
const AboutMe = () => {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const isInView = useIsInView(aboutMeRef);
  const [isMounted, setIsMounted] = useState(false);

  return (
    <CSSTransition
      in={isInView && !isMounted}
      appear={true}
      timeout={0}
      classNames={{
        appear:
          "animate__animated animate__fadeIn animate__delay-3s animate__slow",
        appearActive:
          "animate__animated animate__fadeIn animate__delay-3s animate__slow",
        appearDone:
          "animate__animated animate__fadeIn animate__delay-3s animate__slow",
        enter:
          "animate__animated animate__fadeIn animate__delay-3s animate__slow",
        enterActive:
          "animate__animated animate__fadeIn animate__delay-3s animate__slow",
        enterDone:
          "animate__animated animate__fadeIn animate__delay-3s animate__slow",
      }}
      addEndListener={(node, done) => {
        node.addEventListener("animationend", () => setIsMounted(true));
      }}
    >
      <section className={styles.AboutMesection} ref={aboutMeRef}>
        {isInView && (
          <div className={styles.AboutMeTitleContainer}>
            <h1 className={styles.AboutMeTitle}>About Me</h1>
            <span className={styles.bar}></span>
          </div>
        )}
        {isInView && (
          <div className={styles.AboutMeContent}>
            <div className={styles.AboutMeTextContainer}>
              <p>
                Hello! My name is Brittany and I enjoy creating things that live
                on the internet. My interest in web development started back in
                2012 when I decided to try editing custom Tumblr themes — turns
                out hacking together a custom reblog button taught me a lot
                about HTML & CSS!
              </p>

              <p>
                Fast-forward to today, and I’ve had the privilege of working at
                an advertising agency, a start-up, a huge corporation, and a
                student-led design studio. My main focus these days is building
                accessible, inclusive products and digital experiences at
                Upstatement for a variety of clients.
              </p>

              <p>
                I also recently launched a course that covers everything you
                need to build a web app with the Spotify API using Node & React.{" "}
              </p>

              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
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
        )}
      </section>
    </CSSTransition>
  );
};

export default AboutMe;
