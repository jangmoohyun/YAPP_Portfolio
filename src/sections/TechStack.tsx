import { profile } from "../data/profile";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import styles from "./TechStack.module.css";

export function TechStack() {
  return (
    <section id="tech-stack" className={`section ${styles.section}`}>
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Tech Stack"
            description="프로젝트에서 사용해 온 기술과 협업 툴입니다."
          />
        </Reveal>

        <Reveal>
          <div className={styles.stackGrid}>
            {profile.techStacks.map((group) => (
              <article key={group.category} className={styles.stackCard}>
                <h3>{group.category}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
