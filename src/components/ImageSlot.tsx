import styles from "./ImageSlot.module.css";

type ImageSlotProps = {
  label: string;
  src?: string;
  aspect?: "hero" | "card" | "wide" | "square";
  className?: string;
};

export function ImageSlot({
  label,
  src,
  aspect = "wide",
  className = "",
}: ImageSlotProps) {
  return (
    <div
      className={`${styles.slot} ${styles[aspect]} ${className}`}
      role="img"
      aria-label={label}
    >
      {src ? (
        <img src={src} alt={label} className={styles.image} />
      ) : (
        <div className={styles.placeholder}>
          <span className={styles.mark}>IMG</span>
          <span className={styles.label}>{label}</span>
        </div>
      )}
    </div>
  );
}
