import styles from "./Filter.module.css";

interface FilterProps {
  src: string;
  alt: string;
  classNameImage?: string;
  classNameFilter?: string;
}

const Filter: React.FC<FilterProps> = (props: any) => {
  const classNameImage = props.classNameImage
    ? `${props.classNameImage} ${styles.picture}`
    : styles.picture;
  const classNameFilter = props.classNameFilter
    ? `${props.classNameFilter} ${styles.imgFilter}`
    : styles.imgFilter;

  return (
    <div className={classNameFilter}>
      <img src={props.src} alt={props.alt} className={classNameImage} />
    </div>
  );
};

export default Filter;
