import styles from "./SectionTitle.module.css";
import React from "react";

interface SectionTitleProps {
  title: string;
  width?: string;
}

const SectionTitle = React.forwardRef<HTMLDivElement, SectionTitleProps>(
  (props, ref) => {
    return (
      <div className={styles.sectionTitleContainer} ref={ref} style={{width: props.width}}>
        <h1 className={styles.sectionTitle}>{props.title}</h1>
        <span className={styles.bar}></span>
      </div>
    );
  }
);

export default SectionTitle;
