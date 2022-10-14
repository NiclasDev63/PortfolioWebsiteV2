import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
  title: string;
  barLength?: number;
}

const SectionTitle: React.FC<SectionTitleProps> = (props) => {
  const length = props.barLength || "";

  return (
    <div className={styles.sectionTitleContainer}>
      <h1 className={styles.sectionTitle}>{props.title}</h1>
      <span className={styles.bar} style={{ width: length }}></span>
    </div>
  );
};

export default SectionTitle;
