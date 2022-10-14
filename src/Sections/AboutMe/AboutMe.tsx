import styles from "./AboutMe.module.css";
import { useEffect, useRef } from "react";
import "animate.css";
import ScrollReveal from "scrollreveal";
import { BiPlus } from "react-icons/bi";
import { SectionTitle } from "../../components";

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
    <section className={styles.aboutMeSection} ref={aboutMeRef} id="about-me">
      <SectionTitle title="About Me" />
      <div className={styles.aboutMeContent}>
        <div className={styles.aboutMeTextContainer}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            beatae dolore labore dolor optio. Nostrum quasi dignissimos corporis
            officiis illum voluptas. Ex quae quam adipisci maxime saepe mollitia
            sunt quaerat! Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Qui, commodi. Ea consequatur molestias quisquam voluptatum in
            aperiam tenetur eum, porro beatae maxime aspernatur natus eius minus
            odit reprehenderit. Exercitationem, provident!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            facilis consequuntur hic harum maxime sint eum blanditiis? Iure,
            aut. Accusamus consequuntur dolorem adipisci? Eligendi, voluptate
            quidem. Culpa animi eos voluptate.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            culpa, accusantium quo aut recusandae, veniam esse harum odio non
            sapiente beatae laudantium nihil adipisci reprehenderit,
            exercitationem consequatur nulla ea aliquid!
          </p>

          <p>Here are a few technologies I’ve been working with recently:</p>
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
