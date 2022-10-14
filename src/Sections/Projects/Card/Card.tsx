import styles from "./Card.module.css";
import { FiGithub } from "react-icons/fi";
import { Filter } from "../../../components";

interface CardProps {
  left: boolean;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  link: string;
}

const Card: React.FC<CardProps> = (props) => {
  const containerClass = props.left
    ? `${styles.cardContainer} ${styles.left}`
    : `${styles.cardContainer} ${styles.right}`;

  const contentClass = props.left
    ? `${styles.cardContent} ${styles.left}`
    : `${styles.cardContent} ${styles.right}`;

  return (
    <div className={containerClass}>
      <div className={contentClass}>
        <h1 className={styles.cardTitle}>{props.title}</h1>
        <p className={styles.cardDescription}>{props.description}</p>
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
          classNameFilter={styles.filter}
        />
      </a>
      </div>
    </div>
  );
};

export default Card;
