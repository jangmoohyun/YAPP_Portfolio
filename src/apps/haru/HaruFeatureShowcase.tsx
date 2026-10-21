import { useState } from "react";
import styles from "./HaruFeatureShowcase.module.css";

const FEATURES = [
  {
    id: "question",
    title: "오늘의 질문",
    description:
      "하루에 하나의 질문을 편지지로 받아, 가족이 같은 주제로 마음을 나눕니다.",
    src: "/projects/haru-once/shots/question.jpg",
  },
  {
    id: "answer",
    title: "답변 보기 · 작성",
    description:
      "가족에게 보내는 편지 형식의 답변 화면. 아직 없는 답변은 바로 작성으로 이어집니다.",
    src: "/projects/haru-once/shots/answer.jpg",
  },
  {
    id: "gallery",
    title: "가족 갤러리",
    description:
      "질문에 남긴 사진과 이벤트별 앨범으로 상담 사이의 일상을 모아둡니다.",
    src: "/projects/haru-once/shots/gallery.jpg",
  },
  {
    id: "temperature",
    title: "가족 온도",
    description:
      "참여와 소통을 온도로 시각화하고, 어제 대비 변화를 바로 보여줍니다.",
    src: "/projects/haru-once/shots/temperature.jpg",
  },
  {
    id: "temp-change",
    title: "온도 변화 알림",
    description:
      "어제보다 식거나 오른 온도를 편지로 알려 오늘의 질문으로 유도합니다.",
    src: "/projects/haru-once/shots/temp-change.jpg",
  },
  {
    id: "diary",
    title: "가족 일지",
    description:
      "날짜별 가족 날씨와 하루 기록을 남겨 상담사가 한 주의 흐름을 봅니다.",
    src: "/projects/haru-once/shots/diary.jpg",
  },
] as const;

export function HaruFeatureShowcase() {
  const [active, setActive] = useState(0);
  const feature = FEATURES[active];

  return (
    <div className={styles.root}>
      <div className={styles.phone}>
        <img src={feature.src} alt={feature.title} />
      </div>
      <div className={styles.panel}>
        <p className={styles.eyebrow}>실제 앱 캡처</p>
        <h3>{feature.title}</h3>
        <p className={styles.desc}>{feature.description}</p>
        <div className={styles.tabs} role="tablist" aria-label="하루한번 기능">
          {FEATURES.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={index === active}
              className={`${styles.tab} ${
                index === active ? styles.tabActive : ""
              }`}
              onClick={() => setActive(index)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <ol className={styles.thumbs}>
          {FEATURES.map((item, index) => (
            <li key={item.id}>
              <button
                type="button"
                className={`${styles.thumb} ${
                  index === active ? styles.thumbActive : ""
                }`}
                onClick={() => setActive(index)}
                aria-label={item.title}
              >
                <img src={item.src} alt="" />
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
