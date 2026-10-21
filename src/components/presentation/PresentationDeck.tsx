import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import type { PresentationSlide, ProjectDetail } from "../../data/types";
import { getAdjacentProjects } from "../../data/projects";
import { RemoteConsoleApp } from "../../apps/remote-console/RemoteConsoleApp";
import {
  ConsoleInteractiveDemo,
  HaruInteractiveDemo,
  JariAiInteractiveDemo,
  JariLiveDemo,
} from "./InteractiveDemos";
import styles from "./PresentationDeck.module.css";

type PresentationDeckProps = {
  project: ProjectDetail;
};

function statusLabel(status: "done" | "doing" | "todo") {
  if (status === "done") return "완료";
  if (status === "doing") return "진행 중";
  return "예정";
}

const WEEK_GAP_DAYS = [
  { day: "월", active: true, label: "상담" },
  { day: "화", active: false, label: "기록 없음" },
  { day: "수", active: false, label: "기록 없음" },
  { day: "목", active: false, label: "기록 없음" },
  { day: "금", active: false, label: "기록 없음" },
  { day: "토", active: false, label: "기록 없음" },
  { day: "일", active: false, label: "기록 없음" },
] as const;

const WEEK_GAP_INSIGHTS = [
  { title: "상담", body: "대부분 주 1회 정해진 시간에 진행" },
  { title: "상담 사이", body: "소통과 변화를 기록할 수단이 없음" },
  { title: "상담사", body: "가족의 기억과 구두 설명에 의존" },
] as const;

function WeekGapVisual() {
  return (
    <aside className={styles.weekGap} aria-label="주 1회 상담, 나머지 날 기록 없음">
      <div className={styles.weekGapDays}>
        {WEEK_GAP_DAYS.map((item) => (
          <div
            key={item.day}
            className={`${styles.weekGapDay} ${
              item.active ? styles.weekGapDayActive : ""
            }`}
          >
            <span className={styles.weekGapDayName}>{item.day}</span>
            <span className={styles.weekGapDayLabel}>{item.label}</span>
          </div>
        ))}
      </div>
      <div className={styles.weekGapInsights}>
        {WEEK_GAP_INSIGHTS.map((item) => (
          <article key={item.title} className={styles.weekGapInsight}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </aside>
  );
}

function StructureVisual({
  items,
}: {
  items: { title: string; description: string }[];
}) {
  return (
    <aside className={styles.structureVisual} aria-label="문제 구조">
      {items.map((item) => (
        <article key={item.title} className={styles.structureCard}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </aside>
  );
}

function BrowserPreview({
  image,
  url,
  label,
}: {
  image?: string;
  url?: string;
  label?: string;
}) {
  return (
    <figure className={styles.browserFrame}>
      <div className={styles.browserChrome} aria-hidden>
        <span />
        <span />
        <span />
        {url ? <em>{url}</em> : null}
      </div>
      <div
        className={`${styles.browserScreen} ${image ? styles.browserScreenImage : ""}`}
      >
        {image ? <img src={image} alt={label ?? ""} /> : <RemoteConsoleApp />}
      </div>
    </figure>
  );
}

function HaruDecor() {
  return (
    <div className={styles.haruBranchLayer} aria-hidden>
      <img
        className={`${styles.haruEdgeBranch} ${styles.haruL1}`}
        src="/projects/haru-once/background/leftbranch_1.png"
        alt=""
      />
      <img
        className={`${styles.haruEdgeBranch} ${styles.haruL2}`}
        src="/projects/haru-once/background/leftbranch_2.png"
        alt=""
      />
      <img
        className={`${styles.haruEdgeBranch} ${styles.haruL3}`}
        src="/projects/haru-once/background/leftbranch_3.png"
        alt=""
      />
      <img
        className={`${styles.haruEdgeBranch} ${styles.haruL4}`}
        src="/projects/haru-once/background/leftbranch_4.png"
        alt=""
      />
      <img
        className={`${styles.haruEdgeBranch} ${styles.haruR1}`}
        src="/projects/haru-once/background/rightbranch_1.png"
        alt=""
      />
      <img
        className={`${styles.haruEdgeBranch} ${styles.haruR2}`}
        src="/projects/haru-once/background/rightbranch_2.png"
        alt=""
      />
      <img
        className={`${styles.haruEdgeBranch} ${styles.haruR3}`}
        src="/projects/haru-once/background/rightbranch_3.png"
        alt=""
      />
      <img
        className={`${styles.haruFloat} ${styles.haruSun}`}
        src="/projects/haru-once/decor/extras/sun.png"
        alt=""
      />
      <img
        className={`${styles.haruFloat} ${styles.haruCloud}`}
        src="/projects/haru-once/decor/extras/cloud.png"
        alt=""
      />
      <img
        className={`${styles.haruFloat} ${styles.haruHeartA}`}
        src="/projects/haru-once/decor/extras/heart1.png"
        alt=""
      />
      <img
        className={`${styles.haruFloat} ${styles.haruHeartB}`}
        src="/projects/haru-once/decor/extras/heart2.png"
        alt=""
      />
      <img
        className={`${styles.haruFloat} ${styles.haruHeartC}`}
        src="/projects/haru-once/decor/extras/middle_heart.png"
        alt=""
      />
      <img
        className={`${styles.haruFloat} ${styles.haruHeartD}`}
        src="/projects/haru-once/decor/greenheart2.png"
        alt=""
      />
      <img
        className={`${styles.haruFloat} ${styles.haruHeartE}`}
        src="/projects/haru-once/decor/redheart.png"
        alt=""
      />
    </div>
  );
}

function SlideContent({
  slide,
  project,
}: {
  slide: PresentationSlide;
  project: ProjectDetail;
}) {
  switch (slide.type) {
    case "title": {
      const heroSrc = slide.heroImage ?? project.coverImage;
      const heroLabel = slide.heroLabel ?? project.coverLabel;
      const isHaruLetter =
        project.theme === "haru" && slide.heroKind === "letter";

      if (isHaruLetter) {
        return (
          <div className={styles.haruTitleSlide}>
            <div className={styles.haruTitleMain}>
              <div className={styles.haruTitleCopy}>
                <h1>{slide.title}</h1>
                <img
                  className={styles.haruTitleHeart}
                  src="/projects/haru-once/decor/greenheart1.png"
                  alt=""
                />
                <p className={styles.haruSubtitle}>{slide.subtitle}</p>
                {slide.tagline ? (
                  <p className={styles.haruTagline}>{slide.tagline}</p>
                ) : null}
              </div>

              <figure className={styles.haruLoadingLetter}>
                <img
                  src="/projects/haru-once/loading/letter_clear.png"
                  alt="하루한번 편지지"
                />
              </figure>
            </div>
          </div>
        );
      }

      return (
        <div className={styles.titleSlide}>
          <div className={styles.titleCopy}>
            {slide.eyebrow ? (
              <p className={styles.eyebrow}>{slide.eyebrow}</p>
            ) : null}
            <h1>{slide.title}</h1>
            <p className={styles.subtitle}>{slide.subtitle}</p>
            {slide.meta?.length ? (
              <ul className={styles.metaList}>
                {slide.meta.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </div>
          {heroSrc ? (
            <figure
              className={`${styles.titleHero} ${styles[`hero_${project.theme}`]}`}
            >
              <img src={heroSrc} alt={heroLabel} />
              <figcaption>{heroLabel}</figcaption>
            </figure>
          ) : null}
        </div>
      );
    }
    case "problem": {
      const withSideVisual = Boolean(
        slide.phoneImage ||
          slide.weekGapVisual ||
          slide.browserPreview ||
          slide.structureVisual?.length,
      );
      const body = (
        <>
          <div className={styles.contentCopy}>
            <ul className={styles.points}>
              {slide.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            {slide.columns ? (
              <div className={styles.cardGrid}>
                {slide.columns.map((item) => (
                  <article key={item.title} className={styles.card}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            ) : null}
          </div>
          {slide.phoneImage ? (
            <figure className={styles.phoneFrame}>
              <div className={styles.phoneBezel}>
                <span className={styles.phoneNotch} aria-hidden />
                <img src={slide.phoneImage} alt={slide.phoneLabel ?? ""} />
              </div>
              {slide.phoneLabel ? (
                <figcaption>{slide.phoneLabel}</figcaption>
              ) : null}
            </figure>
          ) : null}
          {slide.browserPreview ? (
            <BrowserPreview
              image={slide.browserImage}
              url={slide.browserUrl}
              label={slide.title}
            />
          ) : null}
          {slide.weekGapVisual ? <WeekGapVisual /> : null}
          {slide.structureVisual?.length ? (
            <StructureVisual items={slide.structureVisual} />
          ) : null}
        </>
      );

      if (withSideVisual) {
        return (
          <div className={`${styles.contentSlide} ${styles.contentPinned}`}>
            <header className={styles.contentPinnedHead}>
              <p className={styles.section}>{slide.section}</p>
              <h2 className={styles.titleBreak}>{slide.title}</h2>
            </header>
            <div
              className={`${styles.contentWithPhone} ${
                slide.browserPreview ? styles.contentWithBrowser : ""
              } ${slide.structureVisual?.length ? styles.contentWithStructure : ""}`}
            >
              {body}
            </div>
          </div>
        );
      }

      return (
        <div className={`${styles.contentSlide} ${styles.contentPinned}`}>
          <header className={styles.contentPinnedHead}>
            <p className={styles.section}>{slide.section}</p>
            <h2 className={styles.titleBreak}>{slide.title}</h2>
          </header>
          <div className={styles.contentPinnedBody}>
            <ul className={styles.points}>
              {slide.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            {slide.columns ? (
              <div className={styles.cardGrid}>
                {slide.columns.map((item) => (
                  <article key={item.title} className={styles.card}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      );
    }
    case "solution":
      if (slide.section.includes("담당 분야")) {
        return (
          <div className={`${styles.contentSlide} ${styles.contentPinned}`}>
            <header className={styles.contentPinnedHead}>
              <p className={styles.section}>{slide.section}</p>
              <h2 className={styles.titleBreak}>{slide.title}</h2>
              <p className={`${styles.lead} ${styles.roleLead}`}>
                {slide.description}
              </p>
            </header>
            <div className={`${styles.cardGrid} ${styles.roleCards}`}>
              {slide.items.map((item) => (
                <article key={item.title} className={styles.card}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        );
      }
      return (
        <div className={`${styles.contentSlide} ${styles.contentPinned}`}>
          <header className={styles.contentPinnedHead}>
            <p className={styles.section}>{slide.section}</p>
            <h2 className={styles.titleBreak}>{slide.title}</h2>
          </header>
          <div className={styles.contentPinnedBody}>
            <p className={`${styles.lead} ${styles.titleBreak}`}>
              {slide.description}
            </p>
            <div className={`${styles.cardGrid} ${styles.pinnedCards}`}>
              {slide.items.map((item) => (
                <article key={item.title} className={styles.card}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      );
    case "features":
      return (
        <div className={`${styles.contentSlide} ${styles.contentPinned}`}>
          <header className={styles.contentPinnedHead}>
            <p className={styles.section}>{slide.section}</p>
            <h2 className={styles.titleBreak}>{slide.title}</h2>
          </header>
          <div className={`${styles.cardGrid} ${styles.pinnedCards}`}>
            {slide.items.map((item) => (
              <article key={item.title} className={styles.card}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      );
    case "timeline":
      return (
        <div className={styles.contentSlide}>
          <p className={styles.section}>{slide.section}</p>
          <h2>{slide.title}</h2>
          <ol className={styles.timeline}>
            {slide.items.map((item) => (
              <li key={`${item.period}-${item.title}`} className={styles.timelineItem}>
                <div className={styles.timelineHead}>
                  <span>{item.period}</span>
                  <em className={styles[`status_${item.status}`]}>
                    {statusLabel(item.status)}
                  </em>
                </div>
                <strong>{item.title}</strong>
                <p>{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      );
    case "ui":
      return (
        <div className={styles.contentSlide}>
          <p className={styles.section}>{slide.section}</p>
          <h2>{slide.title}</h2>
          {slide.caption ? <p className={styles.lead}>{slide.caption}</p> : null}
          <div
            className={`${styles.gallery} ${
              slide.images.length > 3 ? styles.galleryWide : ""
            }`}
          >
            {slide.images.map((image) => (
              <figure key={image.src} className={styles.shot}>
                <img src={image.src} alt={image.label} />
                <figcaption>{image.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      );
    case "featureGuide":
      return (
        <div className={`${styles.contentSlide} ${styles.featureGuide}`}>
          <header className={styles.featureGuideHead}>
            <p className={styles.section}>{slide.section}</p>
            <h2>{slide.title}</h2>
          </header>
          <div className={styles.featureGuideGrid}>
            {slide.panels.map((panel) => (
              <article
                key={panel.heading}
                className={`${styles.featurePanel} ${
                  panel.frame === "browser" ? styles.featurePanelBrowser : ""
                }`}
              >
                {panel.frame === "browser" ? (
                  <BrowserPreview image={panel.image} label={panel.heading} />
                ) : (
                  <figure className={styles.featurePhone}>
                    <div className={styles.phoneBezel}>
                      <span className={styles.phoneNotch} aria-hidden />
                      <img src={panel.image} alt={panel.heading} />
                    </div>
                  </figure>
                )}
                <div className={styles.featureDesc}>
                  <h3>{panel.heading}</h3>
                  <ul>
                    {panel.points.map((point) => (
                      <li key={`${point.label}-${point.description}`}>
                        <strong>{point.label}</strong>
                        <span>{point.description}</span>
                      </li>
                    ))}
                  </ul>
                  {panel.note ? (
                    <p className={styles.featureNote}>{panel.note}</p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      );
    case "demo":
      return (
        <div
          className={`${styles.contentSlide} ${styles.contentPinned} ${
            slide.bare ? styles.demoBare : ""
          }`}
        >
          <header className={styles.contentPinnedHead}>
            <p className={styles.section}>{slide.section}</p>
            {slide.title ? (
              <h2 className={styles.titleBreak}>{slide.title}</h2>
            ) : null}
            {!slide.bare && slide.caption ? (
              <p className={`${styles.lead} ${styles.roleLead}`}>{slide.caption}</p>
            ) : null}
          </header>
          <div className={styles.demoWrap}>
            {slide.demo === "haru" ? <HaruInteractiveDemo /> : null}
            {slide.demo === "terminal" ? <ConsoleInteractiveDemo /> : null}
            {slide.demo === "jariAi" ? <JariAiInteractiveDemo /> : null}
            {slide.demo === "jariLive" ? <JariLiveDemo /> : null}
          </div>
        </div>
      );
    case "outcome":
      return (
        <div className={`${styles.contentSlide} ${styles.contentPinned}`}>
          <header className={styles.contentPinnedHead}>
            <p className={styles.section}>{slide.section}</p>
            <h2 className={styles.titleBreak}>{slide.title}</h2>
          </header>
          <div className={styles.contentPinnedBody}>
            <ul className={styles.points}>
              {slide.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            {slide.reflection ? (
              <p className={styles.reflection}>{slide.reflection}</p>
            ) : null}
          </div>
        </div>
      );
    default:
      return null;
  }
}

export function PresentationDeck({ project }: PresentationDeckProps) {
  const slides = project.slides;
  const [index, setIndex] = useState(0);
  const { prev, next } = useMemo(
    () => getAdjacentProjects(project.id),
    [project.id],
  );

  useEffect(() => {
    setIndex(0);
  }, [project.id]);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === " ") {
        event.preventDefault();
        setIndex((value) => Math.min(value + 1, slides.length - 1));
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setIndex((value) => Math.max(value - 1, 0));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [slides.length]);

  const slide = slides[index];
  const isHaru = project.theme === "haru";
  const isConsole = project.theme === "console";
  const isJari = project.theme === "jari";
  const useLightLayout = isHaru || isConsole || isJari;
  const haruOnTitle =
    isHaru && slide.type === "title" && slide.heroKind === "letter";

  return (
    <div
      className={`${styles.deck} ${styles[project.theme]} ${
        useLightLayout ? styles.haruCream : ""
      } ${isConsole ? styles.consoleLight : ""} ${isJari ? styles.jariLight : ""} ${
        haruOnTitle ? styles.haruOnTitle : ""
      }`}
    >
      {isHaru ? <HaruDecor /> : null}
      <header className={styles.topBar}>
        <Link to="/#projects" className={styles.back}>
          ← Projects
        </Link>
        <p className={styles.progress}>
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")} · {project.title}
        </p>
      </header>

      <div className={styles.stage}>
        <AnimatePresence mode="wait">
          <motion.div
            key={`${project.id}-${index}`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <SlideContent slide={slide} project={project} />
          </motion.div>
        </AnimatePresence>
      </div>

      <footer className={styles.controls}>
        <button
          type="button"
          className={styles.navBtn}
          onClick={() => setIndex((value) => Math.max(value - 1, 0))}
          disabled={index === 0}
        >
          Prev
        </button>
        <div className={styles.dots} role="tablist" aria-label="슬라이드">
          {slides.map((item, i) => (
            <button
              key={`${item.type}-${i}`}
              type="button"
              className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
              aria-label={`${i + 1}번째 슬라이드`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <button
          type="button"
          className={styles.navBtn}
          onClick={() =>
            setIndex((value) => Math.min(value + 1, slides.length - 1))
          }
          disabled={index === slides.length - 1}
        >
          Next
        </button>
      </footer>

      <nav className={styles.projectNav} aria-label="다른 프로젝트">
        {prev ? <Link to={`/projects/${prev.id}`}>← {prev.title}</Link> : <span />}
        {next ? <Link to={`/projects/${next.id}`}>{next.title} →</Link> : <span />}
      </nav>
    </div>
  );
}
