import styles from "./Socials.module.css";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { CSSTransition } from "react-transition-group";

const icons = [
  {
    icon: <FiGithub className={styles.icon} />,
    link: "https://github.com/NiclasDev63/PortfolioWebsiteV2",
  },
  {
    icon: <FiLinkedin className={styles.icon} />,
    link: "https://www.linkedin.com/in/niclasgregor/",
  },
  {
    icon: <FiInstagram className={styles.icon} />,
    link: "https://www.instagram.com/niclas.0511/",
  },
];
const Socials = () => {
  return (
    <div className={styles.socialsContainer}>
      {icons.map((icon, index) => (
        <CSSTransition
          key={index}
          in={true}
          timeout={0}
          classNames={{
            enter: "animte__animated",
            enterActive: "animte__animated animate__fadeInDown",
            enterDone: `animate__animated animate__fadeInDown animate__delay-${
              index * 1
            }s`,
          }}
          appear={true}
        >
          <a href={icon.link} target="_blank" rel="noreferrer">
            {icon.icon}
          </a>
        </CSSTransition>
      ))}
      <CSSTransition
        in={true}
        timeout={0}
        classNames={{
          enter: "animte__animated",
          enterActive: "animte__animated animate__fadeIn",
          enterDone: "animate__animated animate__fadeIn",
        }}
        appear={true}
      >
        <span className={styles.bar} />
      </CSSTransition>
    </div>
  );
};

export default Socials;
