import styles from "./ExperienceCard.module.css";
import ScrollReveal from "scrollreveal";
import { useRef, useEffect } from "react";

interface ExperienceCardProps {
  title: string;
  jobtitle: string;
  description: string;
  date: string;
  right: boolean;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = (props) => {
  const expCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (expCardRef.current) {
      ScrollReveal().reveal(expCardRef.current, {
        origin: props.right ? "left" : "right",
        distance: "40rem",
        delay: 200,
        duration: 1000,
        viewFactor: 0.25,
      });
    }
  }, []);

  const classCardContainer = props.right
    ? `${styles.expCardContainer} ${styles.expCardContainerLeft}`
    : `${styles.expCardContainer} ${styles.expCardContainerRight}`;

  const classCard = props.right
    ? `${styles.expCard} ${styles.expCardLeft}`
    : `${styles.expCard} ${styles.expCardRight}`;

  const classCardInfo = props.right
    ? `${styles.expCardInfo} ${styles.expCardInfoLeft}`
    : `${styles.expCardInfo} ${styles.expCardInfoRight}`;

  const classTimeLine = props.right
    ? `${styles.timeLine} ${styles.timeLineLeft}`
    : `${styles.timeLine} ${styles.timeLineRight}`;

  return (
    <div className={classCardContainer} ref={expCardRef}>
      <span className={classTimeLine}></span>
        <div className={classCardInfo}>
          <span className={styles.timeLineContent}>{props.date}</span>
        </div>
        <div className={classCard}>
          <div className={styles.expCardContent}>
            <h1 className={styles.expCardTitle}>{props.title}</h1>
            <h2 className={styles.expCardJobTitle}>{props.jobtitle}</h2>
            <p className={styles.expCardDescription}>{props.description}</p>
          </div>
        </div>
      </div>
  );
};

export default ExperienceCard;
