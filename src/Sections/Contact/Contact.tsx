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
        I welcome interesting project inquiries and will do my best to respond
        promptly.
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
