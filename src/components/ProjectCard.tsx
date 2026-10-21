import { Link } from "react-router-dom";
import type { ProjectSummary } from "../data/types";
import { ImageSlot } from "./ImageSlot";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  project: ProjectSummary;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link to={`/projects/${project.id}`} className={styles.card}>
      <div className={styles.media}>
        <ImageSlot
          label={project.coverLabel}
          src={project.coverImage}
          aspect="card"
        />
        <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.role}>{project.role}</span>
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.summary}>{project.summary}</p>
        <ul className={styles.keywords}>
          {project.keywords.map((keyword) => (
            <li key={keyword}>{keyword}</li>
          ))}
        </ul>
        <span className={styles.cta}>View case study →</span>
      </div>
    </Link>
  );
}
