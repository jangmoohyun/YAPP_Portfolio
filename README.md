# YAPP Portfolio — Structure Preview

YAPP PM/기획 지원용 인터랙티브 HTML 포트폴리오의 **구조 · 레이아웃 · 디자인 시스템** 미리보기입니다.  
실제 자기소개/프로젝트 내용은 플레이스홀더이며, `src/data/`에 나중에 채워 넣으면 됩니다.

## Stack

- React + TypeScript + Vite
- React Router
- Framer Motion
- CSS Modules + design tokens

## Run

```bash
cd site
npm install
npm run dev
```

브라우저에서 표시되는 로컬 주소(보통 `http://localhost:5173`)로 접속하세요.

## Build

```bash
cd site
npm run build
npm run preview
```

## Where to edit content later

| File | What to fill |
|------|----------------|
| `src/data/profile.ts` | 이름, 직군, 소개, 역량, 연락처 |
| `src/data/projects.ts` | 프로젝트 목록 · 상세 케이스 |
| `src/data/process.ts` | How I Work 단계 설명 |

이미지 슬롯은 `coverImage` 경로를 넣거나 `src/assets/`에 파일을 추가한 뒤 import 하면 됩니다.

## Pages

- `/` — Hero · About · Projects · How I Work · Contact
- `/projects/:projectId` — 프로젝트 상세 템플릿

## Notes

- 이번 단계에서는 콘텐츠를 임의로 채우지 않았습니다.
- 프로젝트 개수는 `projects.ts` 배열만 수정하면 카드/라우팅이 따라갑니다.
