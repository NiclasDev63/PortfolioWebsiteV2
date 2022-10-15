import styles from "./Logo.module.css";
import { motion } from "framer-motion";

const transition = { duration: 4, ease: "easeInOut" };
const onClickHandler = () => {
  document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
};

const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.logo}
      viewBox="-1 0 20 18"
      onClick={onClickHandler}
    >
      <motion.path
        d="m3 3a1 1 0 0012 11 1 1 0 00-12-11M5 13 8 4 10 13 13 4"
        strokeWidth="1"
        fill="transparent"
        stroke="var(--color-highlight)"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={transition}
      />
    </svg>
  );
};

export default Logo;
