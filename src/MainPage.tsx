import styles from "./MainPage.module.css";
import { useState } from "react";
import { Socials, Navbar } from "./components";
import { Hero, AboutMe, Projects, Experience } from "./Sections";


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
          {<Hero setIsAnimating={setIsHeroAnimating} />}
          {isNavAnimating && <div className={styles.placeHolder}></div>}
          {!isHeroAnimating && <Socials />}
          <AboutMe />
          <Experience />
          <Projects />
        </div>
      </div>
    </>
  );
};

export default MainPaige;
