import styles from "./Navbar.module.css";
import { CSSTransition } from "react-transition-group";
import { useEffect, useState } from "react";
import "animate.css";
import { Divide as Hamburger } from "hamburger-react";
import { useGetWidth, useScrollDirection, useIsAtPosition } from "../../hooks";

const navLinks = [
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "Contact",
  },
  {
    name: "Projects",
  },
];

interface NavbarProps {
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAnimating: React.Dispatch<React.SetStateAction<boolean>>;
  isAnimating: boolean;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const hasWidth = useGetWidth(768);
  const scrollDirection = useScrollDirection();
  const isAtTop = useIsAtPosition(0);

  useEffect(() => {
    document.documentElement.style.overflow = isNavOpen ? "hidden" : "unset";
    document.documentElement.style.overflowX = "hidden";
    props.setIsNavOpen(isNavOpen);
  }, [isNavOpen, props]);

  useEffect(() => {
    if (!hasWidth) {
      setIsNavOpen(false);
    }
  }, [hasWidth]);

  return (
    <>
      <CSSTransition
        in={scrollDirection === "up"}
        classNames={{
          enter: "animate__animated",
          enterActive: "animate__animated animate__fadeInDown animate__faster",
          enterDone: "animate__animated animate__fadeInDown animate__faster",
          exit: "animate__animated",
          exitActive: "animate__animated animate__fadeOutUp animate__faster",
          exitDone: "animate__animated animate__fadeOutUp animate__faster",
        }}
        timeout={0}
      >
        <nav
          className={styles.navbar}
          style={{
            boxShadow: isAtTop ? "" : "0 0 2rem 0.5rem rgba(2, 14, 32, 0.8)",
          }}
        >
          {/* Remove the logo */}
          <div className={styles.navbar__logo}>
            <CSSTransition
              in={true}
              classNames={{
                enter: "animate__animated",
                enterDone: "animate__animated animate__fadeIn",
              }}
              timeout={0}
              appear={true}
            >
              <svg
                id="logo"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 84 96"
              >
                <title>Logo</title>
                <g transform="translate(-8.000000, -2.000000)">
                  <g transform="translate(11.000000, 5.000000)">
                    <path
                      d="M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z"
                      fill="currentColor"
                    />
                    <polygon
                      id="Shape"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points="39 0 0 22 0 67 39 90 78 68 78 23"
                    />
                  </g>
                </g>
              </svg>
            </CSSTransition>
          </div>
          <div className={styles.navbar__links}>
            {navLinks.map(({ name }, index) => (
              <CSSTransition
                in={props.isAnimating}
                classNames={{
                  enter: "animate__animated",
                  enterDone: `animate__animated animate__fadeInDown animate__delay-${
                    index * 1
                  }s`,
                }}
                timeout={0}
                key={index}
                addEndListener={(node, done) => {
                  node.addEventListener("animationend", () =>
                    props.setIsAnimating(false)
                  );
                }}
                appear={true}
              >
                <li key={index} className={styles.navbar__links__link}>
                  {name}
                </li>
              </CSSTransition>
            ))}
          </div>
          <CSSTransition
            in={true}
            classNames={{
              enter: "animate__animated",
              enterDone: "animate__animated animate__fadeIn",
            }}
            timeout={0}
            appear={true}
            addEndListener={(node, done) => {
              node.addEventListener("animationend", () =>
                props.setIsAnimating(false)
              );
            }}
          >
            <>
              {hasWidth && (
                <div style={{ zIndex: 2 }}>
                  <Hamburger
                    toggled={isNavOpen}
                    color={"#38d9a9"}
                    toggle={() => setIsNavOpen((isNavOpen) => !isNavOpen)}
                  />
                </div>
              )}
            </>
          </CSSTransition>
          <CSSTransition
            in={isNavOpen}
            timeout={hasWidth ? 1000 : 0}
            classNames={{
              enter: "animate__animated",
              enterActive:
                "animate__animated animate__fadeInRight animate__faster",
              enterDone:
                "animate__animated animate__fadeInRight animate__faster",
              exit: "animate__animated",
              exitActive:
                "animate__animated animate__fadeOutRight animate__faster",
              exitDone: "animate__animated",
            }}
            unmountOnExit
          >
            <aside
              className={styles.navMenu}
              style={{ display: hasWidth ? "" : "none" }}
            >
              {navLinks.map(({ name }, index) => (
                <li key={index} className={styles.navMenu__link}>
                  {name}
                </li>
              ))}
            </aside>
          </CSSTransition>
        </nav>
      </CSSTransition>
    </>
  );
};

export default Navbar;
