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

        <Reveal>
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
              <p className={`${styles.bio} ${styles.bioLead}`}>
                좋은 PM은{" "}
                <strong className={styles.emphasis}>사용자의 문제</strong>를
                정확히 이해하고 팀이{" "}
                <strong className={styles.emphasis}>같은 방향</strong>을
                바라보며{" "}
                <strong className={styles.emphasis}>해결책</strong>을
                만들어가도록 돕는 사람이라고 생각합니다.
              </p>
              <p className={styles.bio}>
                가족 간 소통을 돕는 앱 ‘
                <strong className={styles.emphasis}>하루한번</strong>
                ’을{" "}
                <strong className={styles.emphasis}>팀 리더</strong>로서
                기획하고 개발하며,
                <br />
                일상 속 문제를{" "}
                <strong className={styles.emphasis}>구체적인 기능</strong>으로
                구현하고 팀원들과 함께{" "}
                <strong className={styles.emphasis}>iOS 앱 출시</strong>까지
                경험했습니다.
              </p>
              <p className={`${styles.bio} ${styles.bioOneLine}`}>
                개발 경험을 통해{" "}
                <strong className={styles.emphasis}>기술적 제약</strong>을
                이해하는 동시에, 서비스의{" "}
                <strong className={styles.emphasis}>방향성과 사용성</strong>을
                함께 고민하는 역량을 길렀습니다.
              </p>
              <p className={`${styles.bio} ${styles.bioClose}`}>
                앞으로도{" "}
                <strong className={styles.emphasis}>사용자와 팀</strong>의
                관점을 연결하며{" "}
                <strong className={styles.emphasis}>실질적인 가치</strong>를
                만드는 PM이 되고 싶습니다.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className={styles.strengths}>
            <div className={styles.cards}>
              {profile.strengths.map((item) => (
                <article key={item.title} className={styles.card}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

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
