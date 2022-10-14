import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = (props) => {

  return (
    <div className={styles.sectionTitleContainer}>
      <h1 className={styles.sectionTitle}>{props.title}</h1>
      <span className={styles.bar}></span>
    </div>
  );
};

export default SectionTitle;
