import styles from "./MainPage.module.css";
import { useState } from "react";
import { Hero, AboutMe, Projects } from "./Sections";
import { Socials, Navbar } from "./components";

const MainPaige = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isNavAnimating, setIsNavAnimating] = useState(true);
  const [isHeroAnimating, setIsHeroAnimating] = useState(true);

  return (
    <>
      <Navbar
        setIsNavOpen={setIsNavOpen}
        isAnimating={isNavAnimating}
        setIsAnimating={setIsNavAnimating}
      />
      <div className={`${styles.mainContainer} ${isNavOpen && styles.blur}`}>
        <div className={styles.mainContent}>
          {!isNavAnimating && <Hero setIsAnimating={setIsHeroAnimating} />}
          {isNavAnimating && <div className={styles.placeHolder}></div>}
          {!isHeroAnimating && <Socials />}
          <AboutMe />
          <Projects />
        </div>
      </div>
    </>
  );
};

export default MainPaige;
