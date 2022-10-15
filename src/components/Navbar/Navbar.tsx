import styles from "./Navbar.module.css";
import { CSSTransition } from "react-transition-group";
import { useEffect, useState, useRef } from "react";
import "animate.css";
import { Divide as Hamburger } from "hamburger-react";
import {
  useGetWidth,
  useScrollDirection,
  useIsAtPosition,
  useOnClickOutside,
} from "../../hooks";
import { Logo } from "../";

const navLinks = [
  {
    name: "Home",
    id: "hero",
  },
  {
    name: "About Me",
    id: "about-me",
  },
  {
    name: "Experience",
    id: "experience",
  },
  {
    name: "Projects",
    id: "projects",
  },
  {
    name: "Contact",
    id: "contact",
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
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);
  useOnClickOutside([menuRef, hamburgerRef], () => setIsNavOpen(false));

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

  const linkClickHandler = (id: string) => {
    if (hasWidth) {
      setIsNavOpen(false);
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

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
          <Logo />
          <div className={styles.navbar__links}>
            {navLinks.map(({ name, id }, index) => (
              <CSSTransition
                in={props.isAnimating}
                classNames={{
                  appear: "animate__animated",
                  appearActive: `animate__animated animate__fadeInDown animate__delay-${
                    index * 1
                  }s`,
                  appearDone: `animate__animated animate__fadeInDown animate__delay-${
                    index * 1
                  }s`,
                  enter: `animate__animated animate__fadeInDown animate__delay-${
                    index * 1
                  }s`,
                  enterActive: `animate__animated animate__fadeInDown animate__delay-${
                    index * 1
                  }s`,
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
                <li
                  key={index}
                  className={styles.navbar__links__link}
                  onClick={() => linkClickHandler(id)}
                >
                  {name}
                </li>
              </CSSTransition>
            ))}
          </div>
          <CSSTransition
            in={true}
            classNames={{
              appear: "animate__animated",
              appearActive: "animate__animated animate__fadeIn",
              appearDone: "animate__animated animate__fadeIn",
              enter: "animate__animated animate__fadeIn",
              enterActive: "animate__animated animate__fadeIn",
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
                <div className={styles.hamburgerWrapper} ref={hamburgerRef}>
                  <Hamburger
                    toggled={isNavOpen}
                    color="var(--color-highlight)"
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
              ref={menuRef}
              style={{ display: hasWidth ? "" : "none" }}
            >
              {navLinks.map(({ name, id }, index) => (
                <li
                  key={index}
                  className={styles.navMenu__link}
                  onClick={() => linkClickHandler(id)}
                >
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
