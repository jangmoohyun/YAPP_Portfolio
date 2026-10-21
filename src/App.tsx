import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Nav } from "./components/Nav";
import { HomePage } from "./pages/HomePage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import styles from "./App.module.css";

export default function App() {
  const location = useLocation();
  const isPresentation = location.pathname.startsWith("/projects/");

  return (
    <div className={`${styles.app} ${isPresentation ? styles.presentation : ""}`}>
      <Nav />
      <AnimatePresence mode="wait">
        <motion.div
          className={isPresentation ? styles.presentationMain : undefined}
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      {isPresentation ? null : (
        <footer className={styles.footer}>
          <div className="container">
            <p>장무현 · YAPP PM Portfolio</p>
          </div>
        </footer>
      )}
    </div>
  );
}
