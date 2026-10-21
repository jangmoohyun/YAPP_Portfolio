import { useEffect, useState } from "react";
import styles from "./JariAiChat.module.css";

type Intent = "recommend" | "analyze" | "compare_saved";

type Scenario = {
  question: string;
  intent: Intent;
  context: string;
  reply: string[];
  cards: { name: string; area: string; fit: string }[];
};

const INTENT_LABEL: Record<Intent, string> = {
  recommend: "후보지 추천",
  analyze: "위치 분석",
  compare_saved: "저장 후보 비교",
};

const SCENARIOS: Scenario[] = [
  {
    question: "유동인구 많고 경쟁 적은 곳 TOP 3 알려줘",
    intent: "recommend",
    context: "업종 카페 · 14시 · 전체 성별 · 반경 500m",
    reply: [
      "안양시 주요 생활권 후보를 500m 반경으로 집계해 적합도 순으로 정리했어요.",
      "✓ 1위는 유동인구 지수가 후보 중 가장 높고 지하철역이 반경 안에 있어요.",
      "△ 다만 동종 카페가 밀집해 경쟁 점수는 낮은 편이에요.",
      "임대료·매출은 현재 데이터 없음 — 아래 후보 카드를 누르면 지도로 이동해요.",
    ],
    cards: [
      { name: "범계역 일대", area: "동안구", fit: "적합도 높음" },
      { name: "평촌역 일대", area: "동안구", fit: "적합도 높음" },
      { name: "인덕원역 일대", area: "동안구", fit: "적합도 보통" },
    ],
  },
  {
    question: "평촌역 주변에서 카페를 하면 어때?",
    intent: "analyze",
    context: "업종 카페 · 마커 평촌역 · 반경 500m",
    reply: [
      "평촌역 마커 기준 500m 반경의 공공데이터를 집계했어요.",
      "✓ 지하철·버스 접근성이 좋아 교통 점수가 높아요.",
      "✓ 주변 공동주택이 많아 주거인구 지수가 안정적이에요.",
      "△ 반경 안 동종 카페 수가 많아 차별화가 필요해요.",
      "보증금·월세는 현재 데이터 없음으로 판단에서 제외했어요.",
    ],
    cards: [
      { name: "평촌역 일대", area: "동안구", fit: "적합도 높음" },
      { name: "범계역 일대", area: "동안구", fit: "적합도 높음" },
      { name: "안양역 일대", area: "만안구", fit: "적합도 보통" },
    ],
  },
  {
    question: "저장한 두 건물 상권 차이 비교해줘",
    intent: "compare_saved",
    context: "저장 후보 2곳 · 평촌역 후보 / 범계역 후보",
    reply: [
      "저장한 두 후보를 같은 반경·같은 지표로 비교했어요.",
      "✓ 범계역 후보는 유동인구 지수가 더 높아요.",
      "✓ 평촌역 후보는 동종업체가 적어 경쟁 부담이 낮아요.",
      "△ 두 곳 모두 공영주차장 접근은 비슷한 수준이에요.",
      "결론: 경쟁 회피가 우선이면 평촌역, 수요가 우선이면 범계역 후보가 유리해요.",
    ],
    cards: [],
  },
];

const STEPS = [
  { title: "의도 분류", detail: "추천 · 위치 분석 · 저장 비교 · 일반" },
  { title: "지도 문맥 결합", detail: "업종 · 레이어 · 시간대 · 반경 · 마커" },
  { title: "후보지 탐색", detail: "역·동·건물명 → 카카오 로컬 좌표" },
  { title: "공공데이터 집계", detail: "Haversine 거리로 반경 내 시설 집계" },
  { title: "적합도 계산", detail: "수요 34 · 경쟁 28 · 교통 20 · 주차 10 · 생활 8" },
  { title: "근거 제한 생성", detail: "facts만 GPT-4o-mini에 전달 · temp 0.25" },
  { title: "지도 연계", detail: "추천 카드 클릭 → 해당 위치로 이동" },
];

const STEP_MS = 420;

export function JariAiChat() {
  const [scenario, setScenario] = useState<Scenario | null>(null);
  const [step, setStep] = useState(-1);
  const [focused, setFocused] = useState<string | null>(null);
  const answering = scenario !== null && step < STEPS.length - 1;

  useEffect(() => {
    if (!scenario || step >= STEPS.length - 1) return;
    const id = window.setTimeout(() => setStep((value) => value + 1), STEP_MS);
    return () => window.clearTimeout(id);
  }, [scenario, step]);

  const ask = (next: Scenario) => {
    setFocused(null);
    setScenario(next);
    setStep(0);
  };

  const reset = () => {
    setScenario(null);
    setStep(-1);
    setFocused(null);
  };

  return (
    <div className={styles.wrap}>
      <section className={styles.panel} aria-label="상권 AI 챗봇">
        <header className={styles.head}>
          <span className={styles.avatar} aria-hidden>
            ✦
          </span>
          <div>
            <h3>상권 AI</h3>
            <p>현재 지도를 분석해드려요</p>
          </div>
          <span className={styles.online} aria-label="온라인">
            ●
          </span>
        </header>

        <div className={styles.chat}>
          {!scenario ? (
            <div className={styles.welcome}>
              <span className={styles.sparkle} aria-hidden>
                ✦
              </span>
              <h4>어디에 창업하면 좋을까요?</h4>
              <p>지금 보고 있는 지도와 데이터를 바탕으로 상권을 분석해드릴게요.</p>
              <div className={styles.suggestions}>
                {SCENARIOS.map((item) => (
                  <button key={item.question} type="button" onClick={() => ask(item)}>
                    {item.question} <span>→</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className={styles.messages}>
              <div className={styles.user}>{scenario.question}</div>
              {answering ? (
                <div className={`${styles.ai} ${styles.loading}`}>
                  <strong>상권 AI</strong>
                  <p>지도 데이터를 실시간으로 조회·집계한 뒤 답합니다…</p>
                </div>
              ) : (
                <div className={styles.ai}>
                  <strong>상권 AI</strong>
                  {scenario.reply.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                  {scenario.cards.length ? (
                    <div className={styles.reco}>
                      {scenario.cards.map((card, index) => (
                        <button
                          key={card.name}
                          type="button"
                          className={focused === card.name ? styles.recoOn : ""}
                          onClick={() => setFocused(card.name)}
                        >
                          <span>
                            {index + 1}위 {card.name}
                            <em>{card.area}</em>
                          </span>
                          <strong>{card.fit}</strong>
                        </button>
                      ))}
                    </div>
                  ) : null}
                  {focused ? (
                    <p className={styles.toast}>지도에서 {focused}로 이동했어요</p>
                  ) : null}
                </div>
              )}
            </div>
          )}
        </div>

        <footer className={styles.input}>
          {scenario ? (
            <div className={styles.others}>
              {SCENARIOS.filter((item) => item !== scenario).map((item) => (
                <button
                  key={item.question}
                  type="button"
                  disabled={answering}
                  onClick={() => ask(item)}
                >
                  {item.question}
                </button>
              ))}
              <button type="button" className={styles.reset} onClick={reset}>
                처음으로
              </button>
            </div>
          ) : (
            <div className={styles.field}>
              <span>상권에 대해 무엇이든 물어보세요</span>
              <b aria-hidden>↑</b>
            </div>
          )}
        </footer>
      </section>

      <aside className={styles.pipeline} aria-label="AI 처리 과정">
        <p className={styles.pipeEyebrow}>답변이 만들어지는 과정</p>
        {scenario ? (
          <p className={styles.pipeMeta}>
            <b>{INTENT_LABEL[scenario.intent]}</b>
            {scenario.context}
          </p>
        ) : (
          <p className={styles.pipeMeta}>왼쪽 질문을 눌러보세요</p>
        )}
        <ol>
          {STEPS.map((item, index) => (
            <li
              key={item.title}
              className={
                index < step || (!answering && scenario && index <= step)
                  ? styles.done
                  : index === step
                    ? styles.active
                    : ""
              }
            >
              <span className={styles.stepNo}>{index + 1}</span>
              <div>
                <strong>{item.title}</strong>
                <em>{item.detail}</em>
              </div>
            </li>
          ))}
        </ol>
        <p className={styles.notice}>시연용 예시 응답 · 실제 서비스는 질문마다 실시간 집계</p>
      </aside>
    </div>
  );
}
