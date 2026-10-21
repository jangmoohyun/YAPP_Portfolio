import { useMemo, useState } from "react";
import {
  haruAlbum,
  haruAnswers,
  haruDiary,
  haruFamily,
  haruQuestions,
  haruTemperature,
} from "./mockData";
import styles from "./HaruApp.module.css";

type Tab = "today" | "gallery" | "temp" | "diary";
type Mode = "browse" | "write" | "answers";

const TABS: { id: Tab; label: string; icon: string }[] = [
  {
    id: "today",
    label: "오늘의 질문",
    icon: "/projects/haru-once/nav/todayquestion.png",
  },
  {
    id: "gallery",
    label: "가족 갤러리",
    icon: "/projects/haru-once/nav/familygallery.png",
  },
  {
    id: "temp",
    label: "가족 온도",
    icon: "/projects/haru-once/nav/familyondo.png",
  },
  {
    id: "diary",
    label: "가족 일지",
    icon: "/projects/haru-once/nav/familydiary.png",
  },
];

export function HaruApp() {
  const [tab, setTab] = useState<Tab>("today");
  const [qIndex, setQIndex] = useState(
    Math.max(
      0,
      haruQuestions.findIndex((item) => item.isToday),
    ),
  );
  const [mode, setMode] = useState<Mode>("browse");
  const [draft, setDraft] = useState("");
  const [saved, setSaved] = useState<string | null>(null);
  const [toast, setToast] = useState("");

  const question = haruQuestions[qIndex];
  const answers = useMemo(
    () =>
      haruAnswers.filter((item) => item.questionId === question.id).concat(
        saved
          ? [
              {
                questionId: question.id,
                author: "나",
                role: haruFamily.myRole,
                content: saved,
              },
            ]
          : [],
      ),
    [question.id, saved],
  );

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 1800);
  };

  return (
    <div className={styles.shell}>
      <img
        className={styles.branchL}
        src="/projects/haru-once/decor/left_branch1.png"
        alt=""
      />
      <img
        className={styles.branchR}
        src="/projects/haru-once/decor/right_branch1.png"
        alt=""
      />

      <div className={styles.content}>
        <div className={styles.topBar}>
          <button type="button" className={styles.iconBtn} aria-label="가족">
            家
          </button>
          <div className={styles.brand}>
            <strong>하루 한번</strong>
            <img src="/projects/haru-once/decor/greenheart1.png" alt="" />
          </div>
          <button type="button" className={styles.iconBtn} aria-label="프로필">
            나
          </button>
        </div>

        {tab === "today" && mode === "browse" ? (
          <>
            <div className={styles.dateTape}>{question.monthLabel}</div>
            <div className={styles.letter}>
              <div className={styles.letterBg}>
                <img
                  className={styles.letterTop}
                  src="/projects/haru-once/letter/letter_top_2.png"
                  alt=""
                />
                <img
                  className={styles.letterBody}
                  src="/projects/haru-once/letter/letter_body_2.png"
                  alt=""
                />
                <img
                  className={styles.letterBottom}
                  src="/projects/haru-once/letter/letter_bottom_2.png"
                  alt=""
                />
              </div>
              <div className={styles.letterInner}>
                <p className={styles.toLine}>To. {haruFamily.name}</p>
                <img
                  className={styles.heartLine}
                  src="/projects/haru-once/decor/redline.png"
                  alt=""
                />
                <p className={styles.dateSmall}>{question.dateLabel}</p>
                <p className={styles.question}>{question.question}</p>
              </div>
              <div className={styles.badge}>
                오늘의
                <br />
                질문
              </div>
              <img
                className={styles.envelope}
                src="/projects/haru-once/decor/letter.png"
                alt=""
              />
            </div>

            <div className={styles.carousel}>
              {haruQuestions.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={`${styles.dot} ${index === qIndex ? styles.dotOn : ""}`}
                  aria-label={`${item.dateLabel} 질문`}
                  onClick={() => setQIndex(index)}
                />
              ))}
            </div>

            <button
              type="button"
              className={styles.primary}
              onClick={() => setMode("write")}
            >
              답변 쓰기
            </button>
            <button
              type="button"
              className={styles.primary}
              style={{ background: "#7FA87A", marginTop: 8 }}
              onClick={() => setMode("answers")}
            >
              가족 답변 보기 ({answers.length})
            </button>
          </>
        ) : null}

        {tab === "today" && mode === "write" ? (
          <>
            <button
              type="button"
              className={styles.iconBtn}
              onClick={() => setMode("browse")}
            >
              ←
            </button>
            <div className={styles.dateTape}>{question.dateLabel} 답변</div>
            <p className={styles.question} style={{ marginBottom: 10 }}>
              {question.question}
            </p>
            <div className={styles.writeBox}>
              <textarea
                value={draft}
                maxLength={500}
                placeholder="가족의 마음에 전하고 싶은 말을 적어보세요"
                onChange={(event) => setDraft(event.target.value)}
              />
              <button type="button" className={styles.photoBtn}>
                + 사진 추가 (목업)
              </button>
            </div>
            <button
              type="button"
              className={styles.primary}
              onClick={() => {
                if (!draft.trim()) return;
                setSaved(draft.trim());
                setDraft("");
                setMode("answers");
                showToast("답변이 저장되었습니다 (목업)");
              }}
            >
              저장하기
            </button>
          </>
        ) : null}

        {tab === "today" && mode === "answers" ? (
          <>
            <button
              type="button"
              className={styles.iconBtn}
              onClick={() => setMode("browse")}
            >
              ←
            </button>
            <div className={styles.dateTape}>가족 답변</div>
            <div className={styles.answers}>
              {answers.map((item) => (
                <article
                  key={`${item.author}-${item.content}`}
                  className={styles.answerCard}
                >
                  <strong>{item.author}</strong>
                  <span>{item.role}</span>
                  <p>{item.content}</p>
                </article>
              ))}
            </div>
          </>
        ) : null}

        {tab === "gallery" ? (
          <>
            <div className={styles.dateTape}>가족 갤러리</div>
            <div className={styles.grid}>
              {haruAlbum.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={styles.albumTile}
                  style={{ background: item.tone }}
                  onClick={() => showToast(`${item.label} 앨범 (목업)`)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </>
        ) : null}

        {tab === "temp" ? (
          <>
            <div className={styles.dateTape}>가족 온도</div>
            <div className={styles.tempHero}>
              <em>{haruTemperature.value}°</em>
              <span>어제보다 +{haruTemperature.delta}</span>
            </div>
            <div style={{ marginTop: 12 }}>
              {haruTemperature.members.map((member) => (
                <div key={member.name} className={styles.memberRow}>
                  <span>{member.name}</span>
                  <strong style={{ color: "#3A6A3F" }}>참여율 {member.rate}%</strong>
                </div>
              ))}
            </div>
          </>
        ) : null}

        {tab === "diary" ? (
          <>
            <div className={styles.dateTape}>가족 일지</div>
            {haruDiary.map((item) => (
              <article key={item.date} className={styles.diaryItem}>
                <span style={{ fontSize: 12, color: "#8A8A8A" }}>{item.date}</span>
                <strong style={{ display: "block", marginTop: 4 }}>{item.title}</strong>
                <p style={{ marginTop: 6, fontSize: 13 }}>{item.body}</p>
              </article>
            ))}
          </>
        ) : null}
      </div>

      <nav className={styles.nav} aria-label="하루한번 하단 탭">
        {TABS.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`${styles.navBtn} ${tab === item.id ? styles.navOn : ""}`}
            onClick={() => {
              setTab(item.id);
              setMode("browse");
            }}
          >
            <img src={item.icon} alt="" />
            {item.label}
          </button>
        ))}
      </nav>

      {toast ? <div className={styles.toast}>{toast}</div> : null}
    </div>
  );
}
