import { Navigate, useParams } from "react-router-dom";
import { PresentationDeck } from "../components/presentation/PresentationDeck";
import { getProjectById } from "../data/projects";

export function ProjectDetailPage() {
  const { projectId = "" } = useParams();
  const project = getProjectById(projectId);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <main style={{ flex: 1, minHeight: 0, display: "flex", overflow: "hidden" }}>
      <PresentationDeck project={project} />
    </main>
  );
}
