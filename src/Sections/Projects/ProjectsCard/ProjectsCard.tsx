import styles from "./ProjectsCard.module.css";
import { FiGithub } from "react-icons/fi";
import { Filter } from "../../../components";
import ScrollReveal from "scrollreveal";
import { useRef, useEffect } from "react";

interface CardProps {
  left: boolean;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  link: string;
}

const Card: React.FC<CardProps> = (props) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cardRef.current) {
      ScrollReveal().reveal(cardRef.current, {
        origin: "bottom",
        distance: "4rem",
        easing: "linear",
        delay: 200,
        duration: 500,
        viewFactor: 0.08,
      });
    }
  }, []);

  const containerClass = props.left
    ? `${styles.cardContainer} ${styles.left}`
    : `${styles.cardContainer} ${styles.right}`;

  const contentClass = props.left
    ? `${styles.cardContent} ${styles.left}`
    : `${styles.cardContent} ${styles.right}`;

  return (
    <div className={containerClass} ref={cardRef}>
      <div className={contentClass}>
        <h1 className={styles.cardTitle}>{props.title}</h1>
        <div className={styles.cardDescription}>
        <p>{props.description}</p>
        </div>
        <div className={styles.cardTechStack}>
          {props.techStack.map((tech, index) => (
            <p className={styles.cardTech} key={index}>
              {tech}
            </p>
          ))}
        </div>
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer"
          className={styles.cardLink}
        >
          <FiGithub className={styles.cardLinkIcon} />
        </a>
      </div>
      <div className={styles.cardImageContainer}>
      <a
        href={props.link}
        target="_blank"
        rel="noreferrer"
        className={styles.imgLink}
      >
        <Filter
          src={props.image}
          alt={props.title}
        />
      </a>
      </div>
    </div>
  );
};

export default Card;
