import styles from "./MainPage.module.css";
import { useState, useEffect } from "react";
import { Hero } from "./Sections";
import { Socials, Navbar } from "./components";

const MainPaige = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isNavAnimating, setIsNavAnimating] = useState(true);
  const [isHeroAnimating, setIsHeroAnimating] = useState(true);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && (
        <Navbar
          setIsNavOpen={setIsNavOpen}
          isAnimating={isNavAnimating}
          setIsAnimating={setIsNavAnimating}
        />
      )}
      {isMounted && (
        <div className={`${styles.mainContainer} ${isNavOpen && styles.blur}`}>
          <div className={styles.mainContent}>
            {!isNavAnimating && <Hero setIsAnimating={setIsHeroAnimating} />}
            {!isHeroAnimating && <Socials />}
          </div>
        </div>
      )}
    </>
  );
};

export default MainPaige;
