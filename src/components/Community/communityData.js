import bgImage from "../../assets/ComplexGuide/ComplexGuide1/bg-section.jpg";
import bannerImage from "../../assets/ComplexGuide/ComplexGuide1/complex-1024x573.jpg";
import layoutImage from "../../assets/ComplexGuide/ComplexGuide1/page1.webp";
import designImage from "../../assets/ComplexGuide/ComplexGuide2/page1.webp";
import communityImage from "../../assets/ComplexGuide/ComplexGuide3/page1.jpg";

export const communityData = {
  eyebrow: "COMMUNITY",
  title: "품격 있는 일상을 완성하는 단지 설계",
  description:
    "고덕 제일풍경채는 평택 고덕국제신도시 Abc-61BL에 조성되는 총 456세대 단지로, 쾌적한 단지 배치와 조경·커뮤니티 시설을 통해 일상과 휴식이 조화를 이루는 주거환경을 선보입니다.",
  backgroundImage: bgImage,
  banner: {
    image: bannerImage,
    alt: "평택 고덕국제신도시 Abc-61BL 고덕 제일풍경채 단지 전경",
  },
  items: [
    {
      id: "complex-layout",
      label: "단지 배치도",
      title: "쾌적한 생활을 고려한 단지 배치",
      description:
        "지하 2층~지상 최고 23층, 총 5개 동으로 구성되며 채광과 통풍, 입주민의 보행 동선을 고려한 단지 배치를 적용했습니다.",
      image: layoutImage,
      alt: "고덕 제일풍경채 Abc-61BL 단지 배치도",
    },
    {
      id: "complex-design",
      label: "단지 특화설계",
      title: "제일건설의 주거 철학을 담은 특화설계",
      description:
        "조경과 휴게 공간, 보행 동선을 유기적으로 연결해 입주민이 일상 속에서 쾌적함과 여유를 누릴 수 있도록 계획했습니다.",
      image: designImage,
      alt: "제일건설 고덕 제일풍경채 단지 특화설계",
    },
    {
      id: "community-space",
      label: "커뮤니티",
      title: "입주민을 위한 커뮤니티 공간",
      description:
        "입주민의 건강과 여가, 휴식과 소통을 고려한 커뮤니티 시설을 마련해 더욱 풍요로운 주거 생활을 제공합니다.",
      image: communityImage,
      alt: "고덕 제일풍경채 입주민 커뮤니티 시설",
    },
  ],
};
