import styles from "./Contact.module.css";
import { SectionTitle, LinkButton } from "../../components";
import ScrollReveal from "scrollreveal";
import { useRef, useEffect } from "react";

const Contact = () => {
  const contactRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (contactRef.current) {
      ScrollReveal().reveal(contactRef.current, {
        origin: "bottom",
        distance: "4rem",
        easing: "linear",
        delay: 200,
        duration: 500,
        viewFactor: 0.45,
      });
    }
  }, []);

  return (
    <section className={styles.contactSection} id="contact" ref={contactRef}>
      <SectionTitle title="Contact" width="50%" />
      <p className={styles.contactDescription}>
        I'm currently not looking for a job, but I'm still always happy to
        receive exciting project requests and I'll try to answer you as soon as
        possible
      </p>
      <LinkButton
        href="mailto:niclas.gregor20@gmail.com"
        content="Get in touch"
        className={styles.contactButton}
      />
    </section>
  );
};

export default Contact;
