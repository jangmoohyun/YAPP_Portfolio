import { profile } from "../data/profile";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import styles from "./About.module.css";

export function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="About" title="소개" />
        </Reveal>

        <div className={styles.grid}>
          <Reveal className={styles.gridCell}>
            <div className={styles.intro}>
              <div className={styles.portraitBlock}>
                <figure className={styles.portrait}>
                  <img src={profile.portrait} alt={`${profile.name} 증명사진`} />
                </figure>
                <p className={styles.identity}>{profile.name}</p>
                <p className={styles.birthYear}>{profile.birthYear}</p>
                <p className={styles.school}>
                  {profile.university}
                  <br />
                  {profile.department}
                </p>
              </div>
              <div className={styles.introCopy}>
                <p className={styles.bio}>{profile.about}</p>
              </div>
            </div>
          </Reveal>

          <Reveal className={styles.gridCell} delay={0.08}>
            <div className={styles.cards}>
              {profile.strengths.map((item) => (
                <article key={item.title} className={styles.card}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className={styles.achievements}>
            <h3 className={styles.subheading}>수상 · 자격</h3>
            <div className={styles.achieveGrid}>
              {profile.achievements.map((item) => (
                <article key={item.title} className={styles.achieveCard}>
                  <p className={styles.achieveKind}>
                    {item.kind === "award" ? "Award" : "Certificate"}
                  </p>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
