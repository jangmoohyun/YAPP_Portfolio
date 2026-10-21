import type { ProjectDetail } from "./types";

export const projects: ProjectDetail[] = [
  {
    id: "haru-once",
    title: "하루한번",
    summary:
      "가족 상담과 상담 사이를 잇는 일일 질문·기록 앱. 수원시 건강가정지원센터와 협업.",
    role: "팀장 · 백엔드 / 기획",
    keywords: ["Flutter", "NestJS", "AWS", "가족 소통"],
    coverLabel: "하루한번 편지지",
    coverImage: "/projects/haru-once/logo.jpg",
    theme: "haru",
    overview:
      "가족 상담은 보통 주 1회지만, 가족의 변화는 매일 일어납니다. 하루한번은 상담을 대체하지 않고 상담과 상담 사이를 채우는 가족 소통 플랫폼입니다.",
    meta: [
      { label: "기간", value: "파란학기 · 재개발·개편 진행" },
      { label: "팀", value: "팀 하루한번 (프론트 1 · 백엔드/팀장 1)" },
      { label: "역할", value: "팀장 · 백엔드 · 서비스 기획" },
      { label: "성과", value: "앱 개편 · iOS 출시 경험 · 센터 협업" },
    ],
    problem:
      "상담 사이 기간에는 소통과 변화를 기록할 수단이 거의 없고, 상담사는 가족의 기억과 구두 설명에 의존하게 됩니다.",
    userFlow:
      "가족이 매일 하나의 질문에 함께 답하고, 일지·앨범으로 일상을 기록합니다. 쌓인 기록과 참여율·온도 변화를 통해 상담사가 상담 사이의 한 주를 파악합니다.",
    features: [
      {
        title: "일일 질문 · 답변",
        description: "가족이 같은 질문에 답하며 대화를 자연스럽게 이어갑니다.",
      },
      {
        title: "일지 · 앨범",
        description: "상담 사이 일상을 기록해 변화의 근거를 남깁니다.",
      },
      {
        title: "가족 온도 · 리포트",
        description: "참여율·연속 답변·온도 변화로 한 주의 흐름을 보여줍니다.",
      },
    ],
    decisions: [
      {
        title: "AI 직접 조언 제거",
        description:
          "AI가 상담을 대신하지 않도록 직접 조언 기능을 빼고, 상담 보조·기록 도구로 재설계했습니다.",
      },
      {
        title: "React Native → Flutter 재개발",
        description:
          "유지보수와 화면 개편을 위해 프론트엔드를 Flutter로 전면 재개발했습니다.",
      },
    ],
    collaboration:
      "팀장으로서 일정과 우선순위를 조율하고, 백엔드 API 명세를 맞춰 프론트와 동시에 개발했습니다. 수원시 건강가정지원센터와 요구사항·시범 운영을 협의했습니다.",
    outcome:
      "앱 구조를 개편하고 핵심 화면을 재구성했습니다. iOS 출시와 센터 협업 경험을 바탕으로 상담 연계 기능을 고도화 중입니다.",
    galleryLabels: [
      "스플래시",
      "오늘의 질문",
      "답변",
      "갤러리",
      "온도",
      "일지",
    ],
    slides: [
      {
        type: "title",
        title: "하루 한번",
        subtitle: "하루 한번의 질문으로 가족을 잇다.",
        tagline: "가족 커뮤니케이션 어플",
        heroKind: "letter",
      },
      {
        type: "problem",
        section: "01 프로젝트 소개",
        title:
          "수원시 건강가정지원센터와\n협업을 진행한 가족 커뮤니케이션\u00A0앱",
        points: [
          "하루 하나의 질문을 가족에게 전달하고 답변을 가족들이 공유하는 앱",
          "가족 상담과 상담 사이를 잇는 일일 질문·기록 플랫폼",
          "Android / iOS 배포 완료",
        ],
        phoneImage: "/projects/haru-once/shots/main-question.jpg",
      },
      {
        type: "problem",
        section: "02 문제 정의",
        title: "가족 상담은 주 1회, 가족의 변화는\u00A0매일",
        points: [
          "상담은 대부분 주 1회 정해진 시간에 진행됩니다.",
          "상담 사이에는 소통과 변화를 기록할 수단이 없습니다.",
          "상담사는 가족의 기억과 구두 설명에 의존하게 됩니다.",
        ],
        weekGapVisual: true,
      },
      {
        type: "solution",
        section: "03 해결 방향",
        title: "앱은 상담을 대신하지 않고,\n상담과 상담 사이를 채운다",
        description:
          "하루한번은 수원시 건강가정지원센터와 협업한 가족 커뮤니케이션 앱입니다.\n가족이\u00A0매일\u00A0남긴\u00A0질문·답변·기록이\u00A0상담\u00A0사이의\u00A0공백을\u00A0메우고,\u00A0상담사는\u00A0그\u00A0기록을\u00A0바탕으로\u00A0한\u00A0주의\u00A0변화를\u00A0파악합니다.",
        items: [
          {
            title: "가족",
            description: "매일 하나의 흐름으로 대화와 일상을 남깁니다",
          },
          {
            title: "하루 한번 어플",
            description:
              "상담을 대신하지 않고, 상담과 상담 사이의 기록을 이어 줍니다",
          },
          {
            title: "상담사",
            description: "구두 설명 대신, 쌓인 기록으로 변화를 봅니다",
          },
        ],
      },
      {
        type: "featureGuide",
        section: "04 앱 주요 기능",
        title: "하루 한번 질문 답변하기",
        panels: [
          {
            heading: "오늘의 질문 화면",
            image: "/projects/haru-once/shots/main-question.jpg",
            points: [
              {
                label: "오늘의 질문",
                description: "가족 모두에게 매일 동일한 질문이 도착합니다",
              },
              {
                label: "답변하기",
                description: "질문에 답하며 하루의 대화를 시작합니다",
              },
              {
                label: "이전 답변",
                description:
                  "슬라이드를 통해 날짜를 바꾸며 전에 저장한 답변을 확인할 수 있습니다",
              },
            ],
          },
          {
            heading: "가족 답변 확인 화면",
            image: "/projects/haru-once/shots/answer.jpg",
            points: [
              {
                label: "가족 답변",
                description: "가족이 남긴 답변을 한곳에서 모아볼 수 있습니다",
              },
              {
                label: "오늘의 답변",
                description: "오늘의 답변을 남길 수 있습니다",
              },
            ],
          },
        ],
      },
      {
        type: "featureGuide",
        section: "04 앱 주요 기능",
        title: "갤러리와 가족 온도",
        panels: [
          {
            heading: "가족 갤러리 화면",
            image: "/projects/haru-once/shots/gallery.jpg",
            points: [
              {
                label: "사진 모음",
                description: "질문에 남긴 사진을 모아볼 수 있습니다",
              },
              {
                label: "추억 정리",
                description: "가족의 일상 순간을 앨범처럼 쌓아둡니다",
              },
            ],
          },
          {
            heading: "가족 온도 화면",
            image: "/projects/haru-once/shots/temperature.jpg",
            points: [
              {
                label: "소통 온도",
                description: "가족이 얼마나 활발히 소통했는지 온도로 보여줍니다",
              },
              {
                label: "변화 확인",
                description: "최근 며칠의 온도 변화를 한눈에 확인합니다",
              },
            ],
          },
        ],
      },
      {
        type: "featureGuide",
        section: "04 앱 주요 기능",
        title: "일지와 온도 피드백",
        panels: [
          {
            heading: "가족 일지 화면",
            image: "/projects/haru-once/shots/diary.jpg",
            points: [
              {
                label: "하루 기록",
                description: "기분과 짧은 글로 오늘의 일상을 남깁니다",
              },
            ],
          },
          {
            heading: "가족 온도 피드백 화면",
            image: "/projects/haru-once/shots/temp-feedback.jpg",
            points: [
              {
                label: "온도 피드백",
                description:
                  "매일 가족의 온도 변화를 피드백하여 가족의 답변 활동을 독려합니다",
              },
            ],
          },
        ],
      },
      {
        type: "solution",
        section: "05 담당 분야",
        title: "팀장 · PM으로서의 담당 분야",
        description:
          "기획부터 배포까지 일정 조율과 구현을 같이 담당했습니다.",
        items: [
          {
            title: "센터 협업 조율",
            description: "요구사항 정리 · 협업 요청 공문 전달 · 피드백 반영",
          },
          {
            title: "디자이너 협업 조율",
            description: "외부 디자인과 화면·흐름을 맞춰 나가며 조율",
          },
          {
            title: "백엔드 · 프론트 개발",
            description: "API·화면 구현과 기능 연동을 직접 진행",
          },
          {
            title: "클라우드 구축",
            description: "AWS EC2 · RDS · S3 환경 구성",
          },
          {
            title: "앱 배포",
            description: "Android / iOS 스토어 배포까지 진행",
          },
        ],
      },
    ],
  },
  {
    id: "remote-console",
    title: "INI Remote Console",
    summary:
      "아이돌 콘서트 라이브 송출 인턴십에서, 현장 SSH 제한을 넘는 웹 기반 EC2 접속 콘솔을 개인 프로젝트로 구축.",
    role: "인턴 · 개인 프로젝트",
    keywords: ["웹 터미널", "Cognito", "AWS EC2", "현장 운영"],
    coverLabel: "Remote Console",
    coverImage: "/projects/remote-console/favicon-cover.png",
    theme: "console",
    overview:
      "콘서트마다 바뀌는 EC2에 현장 IP로는 SSH가 막혀, 로테이션 인원이 간편히 접속할 웹 콘솔이 필요했습니다. Cognito 인증 후 브라우저에서 실행 중 인스턴스에 바로 접근하도록 설계했습니다.",
    meta: [
      { label: "맥락", value: "라이브 송출 회사 인턴 · 개인 프로젝트" },
      { label: "문제", value: "현장 IP SSH 차단 · 주간 인스턴스 로테이션" },
      { label: "해결", value: "Cognito 인증 웹 콘솔" },
      { label: "구성", value: "Frontend · Back-terminal · Nginx" },
    ],
    problem:
      "매주 콘서트마다 새 EC2가 뜨지만 보안 정책상 현장 IP에서 SSH가 불가능해, 오류가 날 때마다 별도 접속 경로를 마련해야 했습니다.",
    userFlow:
      "중앙 서버 웹 접속 → Cognito 인증 → 실행 중 EC2 선택 → 브라우저 터미널로 접속 · peer 전환.",
    features: [
      {
        title: "인증 기반 접속",
        description: "포트 재개방 대신 Cognito로 사용자를 확인하고 접근",
      },
      {
        title: "브라우저 터미널",
        description: "스크립트·키 배포 없이 웹에서 EC2 셸 사용",
      },
      {
        title: "인스턴스 선택",
        description: "실행 중 인스턴스를 화면에서 고르고 바로 연결",
      },
    ],
    decisions: [
      {
        title: "CLI 스크립트에서 웹으로 전환",
        description:
          "팀 피드백으로 ‘전원 스크립트 보유·인스턴스 정보 파악’ 한계를 확인하고 접속 과정 자체를 단순화했습니다.",
      },
      {
        title: "보안과 편의의 균형",
        description:
          "현장마다 포트를 새로 열지 않고, 인증 기반으로 접근 절차를 구성했습니다.",
      },
    ],
    collaboration:
      "초기 CLI 방안을 팀원에게 공유·피드백 받고, 실제 로테이션 사용 환경을 반영해 웹 콘솔로 방향을 바꿨습니다.",
    outcome:
      "첫 해결책에 머물지 않고 시도·피드백·개선으로, 보안 정책과 현장 편의성을 함께 만족하는 접속 방식을 만들었습니다.",
    galleryLabels: ["대시보드", "터미널", "인스턴스 선택"],
    slides: [
      {
        type: "title",
        eyebrow: "Internship · Personal Project",
        title: "Remote Console",
        subtitle: "현장에서도 열리는 AWS EC2 웹 접속 콘솔",
        tagline: "라이브 송출 운영 · 개인 프로젝트",
        meta: [
          "아이돌 콘서트 라이브 송출",
          "Cognito · 웹 터미널",
          "보안 + 현장 편의",
        ],
        heroImage: "/projects/remote-console/hero.svg",
        heroLabel: "웹 터미널 콘솔",
      },
      {
        type: "problem",
        section: "01 프로젝트 소개",
        title: "라이브 송출 인턴십에서 시작한 EC2 접속 개인 프로젝트",
        points: [
          "아이돌 콘서트 라이브 송출 회사에서 인턴으로 근무하며 진행",
          "매주 콘서트마다 새로 뜨는 AWS EC2 접근 문제를 해결",
          "보안을 지키면서 로테이션 인원이 간편하게 접속할 방법 탐색",
        ],
        browserPreview: true,
        browserImage: "/projects/remote-console/favicon-cover.png",
        browserUrl: "remote.inisoft.link",
      },
      {
        type: "problem",
        section: "02 문제 정의",
        title: "현장 IP에서는 SSH가 막혀 있었다",
        points: [
          "콘서트마다 새 인스턴스가 생성되어 접속 대상이 계속 바뀝니다.",
          "회사 보안 정책상 현장 IP에서는 SSH 접속이 불가능합니다.",
          "오류가 날 때마다 별도 접속 경로를 마련해야 했고, 구체적 가이드도 없었습니다.",
        ],
        structureVisual: [
          { title: "제약", description: "현장 IP · SSH 차단" },
          { title: "변화", description: "주간 인스턴스 로테이션" },
          { title: "필요", description: "보안 유지 · 간편 접속" },
        ],
      },
      {
        type: "solution",
        section: "03 첫 시도와 한계",
        title: "CLI·스크립트만으로는 현장 사용이 어려웠다",
        description:
          "처음에는 AWS CLI와 스크립트로 터미널 접속을 고안했습니다.\n팀 피드백으로 전원 스크립트 보유·인스턴스 정보 파악이 필요하다는 한계를 확인했습니다.",
        items: [
          {
            title: "첫 방안",
            description: "AWS CLI · 스크립트로 인스턴스에 접속",
          },
          {
            title: "피드백",
            description: "모든 인원이 스크립트와 인스턴스 정보를 알아야 함",
          },
          {
            title: "배움",
            description: "접속 가능만으론 부족 · 실제 사용 편의까지 고려",
          },
        ],
      },
      {
        type: "solution",
        section: "04 해결 방향",
        title: "인증된 웹에서 EC2로 바로 들어가게",
        description:
          "중앙 서버에 웹을 올리고 Cognito로 사용자를 확인한 뒤, 실행 중 EC2에 브라우저로 접근하도록 바꿨습니다.\n매번 포트를 새로 열지 않고 인증 기반으로 보안과 편의를 같이 잡았습니다.",
        items: [
          {
            title: "웹 콘솔",
            description: "회사 중앙 서버에 접속용 웹 서버 구축",
          },
          {
            title: "Cognito 인증",
            description: "허용된 사용자만 인스턴스에 접근",
          },
          {
            title: "브라우저 접속",
            description: "실행 중 EC2를 고르고 웹 터미널로 연결",
          },
        ],
      },
      {
        type: "demo",
        section: "05 직접 사용해보기",
        title: "",
        demo: "terminal",
        bare: true,
      },
      {
        type: "outcome",
        section: "06 회고",
        title: "시도하고, 듣고, 다시 설계하기",
        points: [
          "처음 떠올린 해결책을 고수하기보다, 직접 시도하고 피드백으로 한계를 발견하며 개선하는 과정이 중요했습니다.",
          "정답이 없는 문제일수록 기술 구현뿐 아니라 실제 사용 환경과 보안 요구를 같이 봐야 했습니다.",
        ],
        reflection:
          "현장 제약 · 로테이션 인력 · 보안 정책을 함께 놓고 보니, ‘접속이 된다’보다 ‘누구나 바로 쓸 수 있다’가 기준이 되었습니다.",
      },
    ],
  },
  {
    id: "jari",
    title: "자리 (Jari)",
    summary:
      "안양시 공공데이터와 상권 AI로 창업 입지를 추천하는 지도 웹서비스.",
    role: "기획 · 개발",
    keywords: ["상권 AI 챗봇", "공공데이터", "카카오맵", "Next.js"],
    coverLabel: "자리 — 창업 입지 분석",
    coverImage: "/projects/jari/logo.svg",
    theme: "jari",
    overview:
      "흩어진 인구·상권·교통·주차 공공데이터를 지도 한 화면에 모으고, 사용자가 고른 위치를 같은 반경·같은 기준으로 분석·비교합니다. AI는 서버가 계산한 결과만 근거로 후보지를 설명합니다.",
    meta: [
      { label: "대회", value: "2026 안양시 공공데이터·AI 활용 대학생 경진대회" },
      { label: "참가", value: "개인 · 제품 및 서비스 개발 부문" },
      { label: "스택", value: "Next.js · TypeScript · Kakao Maps · OpenAI" },
      { label: "시연", value: "jari-three.vercel.app" },
    ],
    problem:
      "예비창업자가 입지를 검토하려면 유동인구·경쟁업체·교통·주차·생활시설 정보를 여러 기관과 지도에서 따로 찾아야 하고, 데이터마다 공간 단위와 기준 시점이 달라 후보지를 비교하기 어렵습니다.",
    userFlow:
      "업종 선택 → 데이터 레이어 선택 → 주소 검색·지도 클릭으로 마커 지정 → 300m·500m·1km 반경 분석 → 후보지 저장·최대 5개 비교 → AI에게 질문하고 TOP 3 추천 확인.",
    features: [
      {
        title: "공공데이터 지도 레이어",
        description: "유동인구·연령·주거인구·상가·지하철·버스·학교·공원·공영주차장",
      },
      {
        title: "반경 분석 · 후보지 비교",
        description: "선택 위치 기준 300m·500m·1km 집계, 최대 5개 저장·비교",
      },
      {
        title: "상권 AI 챗봇",
        description: "자연어 질문에 지도 문맥과 서버 계산값만으로 TOP 3 후보와 장점·주의점을 설명",
      },
    ],
    decisions: [
      {
        title: "분석 먼저, AI는 설명만",
        description:
          "AI가 답을 지어내지 않도록 서버가 공공데이터를 집계·점수화한 뒤 그 결과만 언어모델에 전달했습니다.",
      },
      {
        title: "없는 데이터는 만들지 않기",
        description:
          "주소별 보증금·월세·매출은 확보할 수 없어, 추정값 대신 ‘현재 데이터 없음’으로 고지했습니다.",
      },
    ],
    collaboration:
      "개인 참가로 서비스 기획, 공공데이터 수집·가공, 웹 구현, 사업계획서 작성까지 직접 진행했습니다.",
    outcome:
      "검색 → 마커 → 반경 분석 → 저장 → 비교 → AI 추천까지 이어지는 시제품을 구현하고 Vercel에 배포해 경진대회에 출품했습니다.",
    galleryLabels: ["메인 지도", "반경 분석"],
    slides: [
      {
        type: "title",
        eyebrow: "2026 안양시 공공데이터·AI 경진대회",
        title: "자리 (Jari)",
        subtitle: "공공데이터와 AI로 찾는 안양시 창업 입지",
        tagline: "지도를 보며 묻고, 공공데이터 근거로 답하는 상권 AI 챗봇",
        meta: ["상권 AI 챗봇 · GPT-4o-mini", "Kakao Maps · 공공데이터 8종", "Next.js · TypeScript"],
        heroImage: "/projects/jari/main.png",
        heroLabel: "자리 메인 화면",
      },
      {
        type: "problem",
        section: "01 프로젝트 소개",
        title: "공공데이터로 창업 입지를 고르는 지도 서비스",
        points: [
          "2026 안양시 공공데이터·AI 활용 대학생 경진대회 개인 출품작",
          "흩어진 인구·상권·교통·주차 데이터를 지도 한 화면에 통합",
          "상권 AI에게 물으면 공공데이터 근거와 함께 후보지 TOP 3를 추천",
        ],
        browserPreview: true,
        browserImage: "/projects/jari/main.png",
        browserUrl: "jari-three.vercel.app",
      },
      {
        type: "problem",
        section: "02 문제 정의",
        title: "창업 입지 정보는 여기저기 흩어져 있다",
        points: [
          "유동인구·경쟁업체·교통·주차·생활시설을 각기 다른 기관과 지도에서 찾아야 합니다.",
          "데이터마다 공간 단위와 기준 시점이 달라 반경 500m 안을 같은 기준으로 비교하기 어렵습니다.",
          "전문 상권분석 서비스는 지표가 많고 복잡하며, 결과의 근거 데이터가 잘 설명되지 않습니다.",
        ],
        structureVisual: [
          { title: "흩어짐", description: "기관·서비스마다 따로 조회" },
          { title: "불일치", description: "공간 단위 · 기준 시점이 다름" },
          { title: "불투명", description: "결과의 근거가 잘 보이지 않음" },
        ],
      },
      {
        type: "solution",
        section: "03 해결 방향",
        title: "지도에서 고르고, AI에게 묻는다",
        description:
          "공공데이터를 한 지도에 묶고, 사용자가 찍은 위치에 같은 반경·계산식을 적용합니다.\n상권 AI 챗봇은 지도 문맥과 그 계산 결과를 근거로 질문에 답합니다.",
        items: [
          {
            title: "데이터 통합",
            description: "안양시 인구·공영주차장 + 경기도·국가 공공데이터를 한 지도에",
          },
          {
            title: "반경 분석 · 비교",
            description: "300m·500m·1km를 동일 기준으로 집계하고 최대 5곳 비교",
          },
          {
            title: "상권 AI 챗봇",
            description: "자연어 질문 → TOP 3 추천 · 장점·주의점 → 지도로 바로 이동",
          },
        ],
      },
      {
        type: "featureGuide",
        section: "04 주요 기능",
        title: "지도 탐색과 반경 분석",
        panels: [
          {
            heading: "메인 지도 화면",
            image: "/projects/jari/main.png",
            frame: "browser",
            points: [
              {
                label: "데이터 레이어",
                description:
                  "인구·상권·교통·생활환경·주차 레이어를 켜고 끄며 지도에서 확인합니다",
              },
              {
                label: "상권 AI 패널",
                description:
                  "지도 오른쪽에 챗봇이 함께 있어 데이터를 보면서 바로 질문할 수 있습니다",
              },
            ],
          },
          {
            heading: "반경 분석 화면",
            image: "/projects/jari/radius.png",
            frame: "browser",
            points: [
              {
                label: "위치 · 반경",
                description:
                  "주소를 검색하거나 지도를 클릭해 300m·500m·1km 반경을 분석합니다",
              },
              {
                label: "분석 저장 · 비교",
                description: "후보지에 이름을 붙여 저장하고 최대 5곳을 같은 지표로 비교합니다",
              },
            ],
          },
        ],
      },
      {
        type: "demo",
        section: "05 상권 AI 챗봇",
        title: "지도를 보며 묻고, 공공데이터로 답한다",
        caption: "질문을 누르면 오른쪽에서 답변이 만들어지는 7단계 과정을 볼 수 있습니다.",
        demo: "jariAi",
      },
      {
        type: "demo",
        section: "06 직접 사용해보기",
        title: "",
        demo: "jariLive",
        bare: true,
      },
      {
        type: "features",
        section: "07 AI 설계 원칙",
        title: "AI는 계산하지 않고, 설명한다",
        items: [
          {
            title: "분석 먼저, 설명은 나중",
            description: "서버가 집계·점수화한 뒤 AI는 결과만 해석 — 같은 입력이면 같은 점수",
          },
          {
            title: "facts-only 프롬프트",
            description: "입력에 없는 임대료·매출·폐업률은 ‘현재 데이터 없음’으로 답변",
          },
          {
            title: "일관된 답변",
            description:
              "같은 질문에는 비슷한 말로 답하고, 후보마다 장점·주의점과 도로명주소를 빠뜨리지 않게 했습니다",
          },
          {
            title: "장애 분리",
            description: "AI API가 실패해도 지도·레이어·반경 분석·비교는 그대로 동작",
          },
        ],
      },
      {
        type: "features",
        section: "08 활용 공공데이터",
        title: "안양시 데이터를 중심으로 8종을 융합",
        items: [
          {
            title: "안양시",
            description: "행정동별 주민등록 인구 · 안양도시공사 공영주차장",
          },
          {
            title: "경기도",
            description: "유동인구(시간대·성별·연령) · 버스정류소",
          },
          {
            title: "국가",
            description: "소상공인 상가정보 · 도시철도역사 · 공동주택 단지",
          },
          {
            title: "민간 보조",
            description: "카카오 로컬 학교·공원 · 장소 검색 (공공과 구분 표시)",
          },
        ],
      },
      {
        type: "outcome",
        section: "09 회고",
        title: "믿을 수 있는 AI는 데이터 설계에서 나온다",
        points: [
          "챗봇을 ‘무엇이든 답하는 AI’가 아니라 지도 문맥과 서버 계산값을 해석하는 인터페이스로 설계해, 그럴듯한 오답 대신 근거 있는 답을 내도록 했습니다.",
          "구 단위 유동인구는 상대지수로, 없는 임대료·매출은 ‘데이터 없음’으로 고지해 추측을 막았습니다.",
        ],
      },
    ],
  },
];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}

export function getAdjacentProjects(id: string) {
  const index = projects.findIndex((project) => project.id === id);
  if (index === -1) return { prev: undefined, next: undefined };

  return {
    prev: projects[index - 1],
    next: projects[index + 1],
  };
}
