import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { profile } from "../data/profile";
import styles from "./Nav.module.css";

const SECTION_LINKS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "tech-stack", label: "Stack" },
  { id: "contact", label: "Contact" },
] as const;

export function Nav() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isHome) return;

    const sections = ["hero", ...SECTION_LINKS.map((item) => item.id)];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.1, 0.35, 0.6] },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHome]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.brand} onClick={() => setOpen(false)}>
          <span className={styles.brandMark}>P</span>
          <span className={styles.brandText}>{profile.name}</span>
        </Link>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">메뉴</span>
          <span className={`${styles.burger} ${open ? styles.burgerOpen : ""}`} />
        </button>

        <nav
          id="site-nav"
          className={`${styles.nav} ${open ? styles.navOpen : ""}`}
          aria-label="주요 메뉴"
        >
          {isHome ? (
            SECTION_LINKS.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`${styles.link} ${
                  activeSection === item.id ? styles.linkActive : ""
                }`}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            ))
          ) : (
            <>
              <NavLink to="/" className={styles.link}>
                Home
              </NavLink>
              <NavLink to="/#projects" className={styles.link}>
                Projects
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
