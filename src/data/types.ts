export type ProfileLink = {
  label: string;
  href: string;
};

export type Achievement = {
  kind: "award" | "cert";
  title: string;
  description: string;
};

export type TechStackGroup = {
  category: string;
  items: string[];
};

export type Profile = {
  name: string;
  role: string;
  tagline: string;
  birthYear: number;
  about: string;
  university: string;
  department: string;
  portrait: string;
  strengths: { title: string; description: string }[];
  achievements: Achievement[];
  techStacks: TechStackGroup[];
  contactEmail: string;
  contactPhone: string;
  links: ProfileLink[];
};

export type ProjectSummary = {
  id: string;
  title: string;
  summary: string;
  role: string;
  keywords: string[];
  coverLabel: string;
  coverImage?: string;
  theme: "haru" | "console" | "jari";
};

export type SlideMedia = {
  src: string;
  label: string;
};

export type TimelineItem = {
  period: string;
  title: string;
  status: "done" | "doing" | "todo";
  detail: string;
};

export type PresentationSlide =
  | {
      type: "title";
      title: string;
      subtitle: string;
      /** 부제 아래 짧은 태그라인 */
      tagline?: string;
      eyebrow?: string;
      meta?: string[];
      /** 첫 슬라이드 대표 사진 — 없으면 project.coverImage 사용 */
      heroImage?: string;
      heroLabel?: string;
      /** 하루한번: 편지지 에셋 조합 / 기본은 이미지 */
      heroKind?: "image" | "letter";
    }
  | {
      type: "problem";
      section: string;
      title: string;
      points: string[];
      columns?: { title: string; description: string }[];
      /** 옆에 폰 프레임으로 보여줄 화면 캡처 */
      phoneImage?: string;
      phoneLabel?: string;
      /** 주 1회 상담 / 나머지 기록 없음 시각화 */
      weekGapVisual?: boolean;
      /** 우측 브라우저 프레임 — browserImage가 없으면 Remote Console 라이브 UI */
      browserPreview?: boolean;
      browserImage?: string;
      browserUrl?: string;
      /** 문제 구조 카드 (Before · Pain · Need 등) */
      structureVisual?: { title: string; description: string }[];
    }
  | {
      type: "solution";
      section: string;
      title: string;
      description: string;
      items: { title: string; description: string }[];
      /** 우측 요약 패널 (팀 구성 · 성과 등) */
      aside?: { title: string; items: string[] }[];
    }
  | {
      type: "features";
      section: string;
      title: string;
      items: { title: string; description: string }[];
    }
  | {
      type: "timeline";
      section: string;
      title: string;
      items: TimelineItem[];
    }
  | {
      type: "ui";
      section: string;
      title: string;
      caption?: string;
      images: SlideMedia[];
    }
  | {
      type: "featureGuide";
      section: string;
      title: string;
      panels: {
        heading: string;
        image: string;
        /** 웹 화면 캡처는 browser — 기본은 phone */
        frame?: "phone" | "browser";
        points: { label: string; description: string }[];
        note?: string;
      }[];
    }
  | {
      type: "demo";
      section: string;
      title: string;
      caption?: string;
      demo: "haru" | "terminal" | "jariAi" | "jariLive";
      /** 캡션 없이 제목만 두고 데모를 크게 */
      bare?: boolean;
    }
  | {
      type: "outcome";
      section: string;
      title: string;
      points: string[];
      reflection?: string;
    };

export type ProjectDetail = ProjectSummary & {
  overview: string;
  meta: { label: string; value: string }[];
  problem: string;
  userFlow: string;
  features: { title: string; description: string }[];
  decisions: { title: string; description: string }[];
  collaboration: string;
  outcome: string;
  galleryLabels: string[];
  slides: PresentationSlide[];
};
