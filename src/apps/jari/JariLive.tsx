import { useState } from "react";
import styles from "./JariLive.module.css";

const JARI_URL = "https://jari-three.vercel.app/";

export function JariLive() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={styles.frame}>
      <div className={styles.chrome}>
        <span aria-hidden />
        <span aria-hidden />
        <span aria-hidden />
        <em>jari-three.vercel.app</em>
        <a href={JARI_URL} target="_blank" rel="noreferrer">
          새 탭에서 열기 ↗
        </a>
      </div>
      <div className={styles.screen}>
        {!loaded ? (
          <div className={styles.loading}>
            <p>자리 서비스를 불러오는 중…</p>
            <a href={JARI_URL} target="_blank" rel="noreferrer">
              화면이 보이지 않으면 새 탭에서 열기 ↗
            </a>
          </div>
        ) : null}
        <iframe
          src={JARI_URL}
          title="자리 실제 서비스"
          loading="lazy"
          allow="geolocation; clipboard-write"
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  );
}
