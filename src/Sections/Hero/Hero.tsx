import styles from "./Hero.module.css";
import { CSSTransition } from "react-transition-group";
import "animate.css";

const content = [
  {
    content: <span className={styles.heroIntro}> Hi, I am </span>,
  },
  {
    content: <h1 className={styles.heroTitle}>Niclas Gregor</h1>,
  },
  {
    content: <h2 className={styles.heroJobTitle}>Software / Web Developer</h2>,
  },
  {
    content: (
      <p className={styles.heroDescription}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi dolore,
        eveniet cumque inventore ut ullam pariatur excepturi sunt, laborum
        perspiciatis explicabo aspernatur iste quisquam quod?
      </p>
    ),
  },
];

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      {
      content.map((item, index) => (
        <CSSTransition
          key={index}
          in={true}
          timeout={0}
          classNames={{
            enter: "animte__animated",
            enterActive: "animte__animated animate__fadeInUp",
            enterDone: `animate__animated animate__fadeInUp animate__delay-${
                index * 1
              }s`,
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
