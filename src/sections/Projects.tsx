import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Works"
            title="프로젝트"
            description="카드를 선택하면 발표 형식의 슬라이드로 프로젝트를 자세히 볼 수 있습니다."
          />
        </Reveal>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.05}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
