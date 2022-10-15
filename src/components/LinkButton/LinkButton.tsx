import styles from "./LinkButton.module.css";

interface LinkButtonProps {
  href: string;
  content: string;
  className?: string;
}

const LinkButton: React.FC<LinkButtonProps> = (props) => {
  const classLinkButton = `${styles.linkButton} ${props.className}`;

  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
      className={classLinkButton}
    >
      {props.content}
    </a>
  );
};

export default LinkButton;
