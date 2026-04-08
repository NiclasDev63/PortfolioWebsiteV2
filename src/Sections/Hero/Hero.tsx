import styles from "./Hero.module.css";
import { CSSTransition } from "react-transition-group";
import { TextHighlight } from "../../components";
import "animate.css";
import { LinkButton } from "../../components";
import calcAge from "../../utils/calcAge";

const content = [
  {
    content: <span className={styles.heroIntro}> Hi, I am </span>,
  },
  {
    content: <h1 className={styles.heroTitle}>Niclas Gregor.</h1>,
  },
  {
    content: <h2 className={styles.heroJobTitle}>Software / Web Developer</h2>,
  },
  {
    content: (
      <p className={styles.heroDescription}>
        I’m <TextHighlight>{calcAge()} years old</TextHighlight> and previously
        <TextHighlight>
          {" "}
          studied Computer Science at the Technical University of Darmstadt
        </TextHighlight>
        . I enjoy building software and web applications, and I’m always looking
        for new challenges. <TextHighlight>Currently</TextHighlight>, I’m{" "}
        <TextHighlight>developing software at Web Computing GmbH</TextHighlight>
        .
      </p>
    ),
  },
  {
    content: (
      <LinkButton
        href="/assets/NiclasGregorCV.pdf"
        content="Resume"
        className={styles.CVButton}
      />
    ),
  },
];

interface HeroProps {
  setIsAnimating: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hero: React.FC<HeroProps> = ({ setIsAnimating }) => {
  return (
    <section className={styles.heroSection} id="hero">
      {content.map((item, index) => (
        <CSSTransition
          key={index}
          in={true}
          timeout={0}
          classNames={{
            appear: "animate__animated",
            appearActive: `animate__animated animate__fadeInUp animate__delay-${
              index * 1
            }s`,
            appearDone: `animate__animated animate__fadeInUp animate__delay-${
              index * 1
            }s`,
            enter: `animate__animated animate__fadeInUp animate__delay-${
              index * 1
            }s`,
            enterActive: `animate__animated animate__fadeInUp animate__delay-${
              index * 1
            }s`,
            enterDone: `animate__animated animate__fadeInUp animate__delay-${
              index * 1
            }s`,
          }}
          addEndListener={(node, done) => {
            node.addEventListener("animationend", () => setIsAnimating(false));
          }}
          appear={true}
        >
          <div>{item.content}</div>
        </CSSTransition>
      ))}
    </section>
  );
};

export default Hero;
