import styles from "./MainPage.module.css";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import { Hero } from "./Sections";

const MainPaige = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  return (
    <>
      <Navbar
        setIsNavOpen={setIsNavOpen}
        isAnimating={isAnimating}
        setIsAnimating={setIsAnimating}
      />
      <div className={`${styles.mainContainer} ${isNavOpen && styles.blur}`}>
        <div className={styles.mainContent}>{!isAnimating && <Hero />}</div>
      </div>
    </>
  );
};

export default MainPaige;
