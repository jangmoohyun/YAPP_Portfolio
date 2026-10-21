import { profile } from "../data/profile";
import { Reveal } from "../components/Reveal";
import styles from "./Hero.module.css";

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className={styles.hero} aria-label="Hero">
      <div className={`container ${styles.inner}`}>
        <Reveal>
          <p className={styles.eyebrow}>
            <span className={styles.dot} aria-hidden="true" />
            YAPP 29 · PM Portfolio
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className={styles.title}>
            <span className={styles.name}>{profile.name}</span>
            <span className={styles.role}>{profile.role}</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className={`${styles.tagline} placeholder`}>{profile.tagline}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className={styles.actions}>
            <button type="button" className={styles.primary} onClick={scrollToProjects}>
              View projects
            </button>
            <a href="#about" className={styles.secondary}>
              About
            </a>
          </div>
        </Reveal>
      </div>

      <div className={styles.visual} aria-hidden="true">
        <span className={`${styles.blob} ${styles.blobOrange}`} />
        <span className={`${styles.blob} ${styles.blobBlue}`} />
        <span className={`${styles.blob} ${styles.blobYellow}`} />
        <span className={styles.ring} />
      </div>
    </section>
  );
}
