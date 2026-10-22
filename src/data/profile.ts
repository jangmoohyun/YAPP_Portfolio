import type { Profile } from "./types";

export const profile: Profile = {
  name: "장무현",
  role: "PM · 서비스 기획",
  tagline: "사용자의 문제를 제품으로 만들고, 팀과 함께 끝까지 완성합니다.",
  birthYear: 2002,
  university: "아주대학교",
  department: "소프트웨어학과",
  portrait: "/profile/portrait.jpeg",
  about:
    "좋은 PM은 사용자의 문제를 정확히 이해하고 팀이 같은 방향을 바라보며 해결책을 만들어가도록 돕는 사람이라고 생각합니다. 가족 간 소통을 돕는 앱 ‘하루한번’을 팀 리더로서 기획하고 개발하며 일상 속 문제를 구체적인 기능으로 구현하고 팀원들과 함께 iOS 앱 출시까지 경험했습니다. 개발 경험을 통해 기술적 제약을 이해하는 동시에, 서비스의 방향성과 사용성을 함께 고민하는 역량을 길렀습니다. 앞으로도 사용자와 팀의 관점을 연결하며 실질적인 가치를 만드는 PM이 되고 싶습니다.",
  strengths: [
    {
      title: "문제의 서비스화",
      description:
        "막연한 아이디어를 사용자의 문제와 핵심 기능으로 구체화하고, 실제 제품으로 구현하는 과정에 강점이 있습니다.",
    },
    {
      title: "기술을 이해하는 기획",
      description:
        "소프트웨어 전공과 앱 개발 경험을 바탕으로 기능의 구현 가능성과 개발 과정의 제약을 함께 고려하며 기획하고자 합니다.",
    },
    {
      title: "팀과 함께하는 실행력",
      description:
        "팀 리더로서 프로젝트를 이끌고, 팀원들과 협업해 아이디어를 실제 서비스 출시까지 연결한 경험이 있습니다.",
    },
  ],
  achievements: [
    {
      kind: "award",
      title: "공중화장실 혁신 아이디어 공모전 · 협회장상",
      description:
        "공중화장실 혁신 아이디어 공모전에서 협회장상을 수상했습니다.",
    },
    {
      kind: "cert",
      title: "SQLD",
      description:
        "SQL 개발자 자격증을 보유하고 있으며, 데이터 조회·모델링 관점에서 문제를 구조화하는 데 활용합니다.",
    },
  ],
  techStacks: [
    {
      category: "Frontend · Mobile",
      items: ["TypeScript", "React", "Next.js", "React Native", "Flutter"],
    },
    {
      category: "Backend · Cloud",
      items: ["NestJS", "Node.js", "Java", "Spring Boot", "AWS EC2", "AWS RDS", "AWS S3"],
    },
    {
      category: "AI · Data",
      items: ["OpenAI API", "SQL"],
    },
    {
      category: "협업 툴",
      items: ["Notion", "Jira", "Confluence"],
    },
  ],
  contactEmail: "dnsfl2313@gmail.com",
  contactPhone: "010-5309-8813",
  links: [],
};
