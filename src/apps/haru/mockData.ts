export type HaruQuestion = {
  id: number;
  dateLabel: string;
  monthLabel: string;
  question: string;
  isToday?: boolean;
};

export type HaruAnswer = {
  questionId: number;
  author: string;
  role: string;
  content: string;
};

export const haruFamily = {
  name: "우리 가족",
  code: "HRHB26",
  myRole: "장남",
};

export const haruQuestions: HaruQuestion[] = [
  {
    id: 1,
    dateLabel: "8/15",
    monthLabel: "2026년 8월",
    question: "이번 주에 가장 고마웠던 순간은?",
  },
  {
    id: 2,
    dateLabel: "8/16",
    monthLabel: "2026년 8월",
    question: "오늘 누군가에게 하고 싶은 말은?",
  },
  {
    id: 3,
    dateLabel: "8/17",
    monthLabel: "2026년 8월",
    question: "오늘 날씨를 한 마디로 표현한다면?",
    isToday: true,
  },
  {
    id: 4,
    dateLabel: "8/18",
    monthLabel: "2026년 8월",
    question: "최근에 웃었던 일은 무엇이었나요?",
  },
];

export const haruAnswers: HaruAnswer[] = [
  {
    questionId: 3,
    author: "엄마",
    role: "어머니",
    content: "포근하고 따뜻한 날씨 같아. 너희 생각이 많이 났어.",
  },
  {
    questionId: 3,
    author: "아빠",
    role: "아버지",
    content: "맑음! 저녁에 산책하기 딱 좋은 날이네.",
  },
];

export const haruDiary = [
  { date: "8/16", title: "저녁 식사", body: "다 같이 된장찌개를 먹었다." },
  { date: "8/15", title: "주말 나들이", body: "공원에서 사진도 찍고 놀았다." },
];

export const haruAlbum = [
  { id: "a1", label: "공원", tone: "#d7e8c8" },
  { id: "a2", label: "저녁상", tone: "#f3e2c8" },
  { id: "a3", label: "거실", tone: "#e4dff5" },
  { id: "a4", label: "산책", tone: "#d5e8f2" },
];

export const haruTemperature = {
  value: 36.8,
  delta: 0.8,
  members: [
    { name: "엄마", rate: 92 },
    { name: "아빠", rate: 78 },
    { name: "나", rate: 85 },
  ],
};
