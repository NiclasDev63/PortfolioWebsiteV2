import styles from "./TextHighlight.module.css"

interface TextHighlightProps {
    children: React.ReactNode
}

const TextHighlight: React.FC<TextHighlightProps> = ( { children }) => {
  return (
    <span className={styles.textHighlight}>{children}</span>
  )
}

export default TextHighlight;