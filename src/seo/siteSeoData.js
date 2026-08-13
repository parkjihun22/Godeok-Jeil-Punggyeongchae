const SITE_URL = "https://godeok-sujainhouse.co.kr";

export const siteSeo = {
  siteName: "고덕 제일풍경채",
  siteUrl: SITE_URL,
  phone: "1533-8848",
  ogImage: "/img/og/main.jpg",
  locale: "ko_KR",
  organizationId: `${SITE_URL}/#organization`,
  websiteId: `${SITE_URL}/#website`,
  defaultTitle: "고덕 제일풍경채",
  defaultDescription:
    "고덕 제일풍경채 공식 홈페이지입니다. 평택 고덕국제화계획지구 Abc-61BL 입지, 총 456세대 사업개요, 공급안내, 분양일정, 84㎡·101㎡ 평면도, E-모델하우스와 방문예약 정보를 확인하세요.",
  project: {
    addressCountry: "KR",
    addressRegion: "경기도",
    addressLocality: "평택시",
    streetAddress: "고덕국제화계획지구 Abc-61BL",
    block: "Abc-61BL",
    households: "456세대",
    scale: "지하 2층~지상 최고 23층, 5개 동, 총 456세대",
    unitTypes: ["84㎡", "101㎡"],
    brand: "제일풍경채",
    brands: ["제일건설", "풍경채"],
    navigationSchemaName: "고덕 제일풍경채 주요 메뉴",
  },
  keywords: [
    "고덕 제일풍경채",
    "평택 고덕 제일풍경채",
    "고덕국제신도시 제일풍경채",
    "평택 고덕국제신도시",
    "고덕국제신도시 아파트",
    "평택 고덕 아파트 분양",
    "Abc-61BL",
    "제일건설",
    "총 456세대",
    "삼성전자 평택캠퍼스 직주근접",
    "84㎡ 101㎡ 평면도",
    "E-모델하우스",
    "모델하우스 방문예약",
  ],
};

export const seoNavigation = [
  {
    name: "브랜드소개",
    path: "/Brand/intro",
    children: [
      { name: "브랜드소개", path: "/Brand/intro" },
      { name: "홍보영상", path: "/Brand/video" },
    ],
  },
  {
    name: "사업개요",
    path: "/BusinessGuide/intro",
    children: [
      { name: "사업안내", path: "/BusinessGuide/intro" },
      { name: "분양일정", path: "/BusinessGuide/plan" },
    ],
  },
  {
    name: "분양안내",
    path: "/BusinessGuide/documents",
    children: [
      { name: "공급안내", path: "/BusinessGuide/documents" },
      { name: "모집공고안내", path: "/SalesInfo/announcement" },
      { name: "청약안내", path: "/SalesInfo/SubscriptionGuide" },
      { name: "인지세 납부안내", path: "/SalesInfo/StampTax" },
    ],
  },
  {
    name: "입지환경",
    path: "/LocationEnvironment/intro",
    children: [
      { name: "입지안내", path: "/LocationEnvironment/intro" },
      { name: "프리미엄", path: "/LocationEnvironment/primium" },
    ],
  },
  {
    name: "단지안내",
    path: "/ComplexGuide/intro",
    children: [
      { name: "단지 배치도", path: "/ComplexGuide/intro" },
      { name: "호수 배치도", path: "/ComplexGuide/detailintro" },
      { name: "커뮤니티", path: "/ComplexGuide/community" },
    ],
  },
  {
    name: "세대안내",
    path: "/FloorPlan/59A",
    children: [
      { name: "84A㎡", path: "/FloorPlan/59A" },
      { name: "84C㎡", path: "/FloorPlan/59B" },
      { name: "101㎡", path: "/FloorPlan/84A" },
      { name: "E-모델하우스", path: "/FloorPlan/Emodel" },
    ],
  },
  {
    name: "인테리어",
    path: "/Interior/59A",
    children: [
      { name: "84A㎡", path: "/Interior/59A" },
      { name: "84C㎡", path: "/Interior/84A" },
      { name: "101㎡", path: "/Interior/84B" },
    ],
  },
  {
    name: "홍보센터",
    path: "/Promotion/Press",
    children: [
      { name: "언론보도", path: "/Promotion/Press" },
      { name: "관심고객등록", path: "/Promotion/Customer" },
    ],
  },
];

const page = ({
  path,
  title,
  description,
  menu,
  image = siteSeo.ogImage,
  priority = 0.8,
  changefreq = "weekly",
  robots = "index, follow, max-snippet:-1, max-image-preview:large",
}) => ({
  path,
  title,
  description,
  menu,
  image,
  priority,
  changefreq,
  robots,
});

export const seoPages = {
  home: page({
    path: "/",
    title: "고덕 제일풍경채",
    description: siteSeo.defaultDescription,
    menu: "홈",
    priority: 1,
    changefreq: "daily",
  }),

  brandIntro: page({
    path: "/Brand/intro",
    title: "브랜드소개 | 고덕 제일풍경채",
    description:
      "고덕 제일풍경채에 담긴 제일건설의 주거 철학과 풍경채 브랜드 가치를 소개합니다. 평택 고덕국제신도시 Abc-61BL에서 만나는 새로운 주거 가치를 확인하세요.",
    menu: "브랜드소개",
  }),

  brandVideo: page({
    path: "/Brand/video",
    title: "홍보영상 | 고덕 제일풍경채",
    description:
      "고덕 제일풍경채 홍보영상을 통해 평택 고덕국제신도시 Abc-61BL 입지와 제일건설의 주거 철학, 단지의 주거 가치를 확인하세요.",
    menu: "브랜드소개",
  }),

  businessIntro: page({
    path: "/BusinessGuide/intro",
    title: "사업개요 | 고덕 제일풍경채",
    description:
      "고덕 제일풍경채 사업개요 안내입니다. 평택 고덕국제화계획지구 Abc-61BL, 지하 2층~지상 최고 23층, 5개 동, 총 456세대 및 전용 84㎡·101㎡ 정보를 확인하세요.",
    menu: "사업개요",
    image: "/img/og/business.jpg",
    priority: 0.9,
  }),

  businessPlan: page({
    path: "/BusinessGuide/plan",
    title: "분양일정 | 고덕 제일풍경채",
    description:
      "고덕 제일풍경채 분양일정 안내입니다. 특별공급, 일반공급, 당첨자 발표, 서류접수와 정당계약 등 주요 청약 일정을 확인하세요.",
    menu: "사업개요",
  }),

  salesGuide: page({
    path: "/BusinessGuide/documents",
    title: "공급안내 | 고덕 제일풍경채",
    description:
      "고덕 제일풍경채 공급안내 페이지입니다. 타입별 공급 구성, 모집공고, 분양 조건과 청약 전 확인해야 할 주요 정보를 안내합니다.",
    menu: "분양안내",
  }),

  salesInfoGuide: page({
    path: "/SalesInfo/guide",
    title: "분양안내 | 고덕 제일풍경채",
    description:
      "고덕 제일풍경채 분양안내 페이지입니다. 공급 정보, 청약 절차, 분양 일정과 계약 관련 주요 안내를 한눈에 확인하세요.",
    menu: "분양안내",
  }),

  subscriptionGuide: page({
    path: "/SalesInfo/SubscriptionGuide",
    title: "청약안내 | 고덕 제일풍경채",
    description:
      "고덕 제일풍경채 청약안내입니다. 특별공급과 일반공급 신청 전 확인해야 할 청약 자격, 접수 절차, 당첨자 발표 정보를 안내합니다.",
    menu: "분양안내",
  }),

  announcement: page({
    path: "/SalesInfo/announcement",
    title: "모집공고안내 | 고덕 제일풍경채",
    description:
      "고덕 제일풍경채 모집공고안내 페이지입니다. 공급 세대, 청약 일정, 계약 조건 등 분양 전 반드시 확인해야 할 공고 정보를 제공합니다.",
    menu: "분양안내",
  }),

  stampTax: page({
    path: "/SalesInfo/StampTax",
    title: "인지세 납부안내 | 고덕 제일풍경채",
    description:
      "고덕 제일풍경채 인지세 납부안내입니다. 분양계약 시 필요한 인지세 납부 기준과 계약 관련 유의사항을 확인하세요.",
    menu: "분양안내",
  }),

  locationIntro: page({
    path: "/LocationEnvironment/intro",
    title: "입지환경 | 고덕 제일풍경채",
    description:
      "고덕 제일풍경채 입지환경 안내입니다. 삼성전자 평택캠퍼스 직주근접, 평택 고덕국제신도시 생활권, 교통·교육·생활 인프라와 미래가치를 확인하세요.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
    priority: 0.9,
  }),

  locationPremium: page({
    path: "/LocationEnvironment/primium",
    title: "프리미엄 | 고덕 제일풍경채",
    description:
      "고덕 제일풍경채 프리미엄 안내입니다. 평택 고덕국제신도시 중심 생활권, 삼성전자 평택캠퍼스 직주근접, 교통망과 제일건설의 주거 가치를 소개합니다.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
  }),

  complexIntro: page({
    path: "/ComplexGuide/intro",
    title: "단지 배치도 | 고덕 제일풍경채",
    description:
      "고덕 제일풍경채 단지 배치도 안내입니다. 동선, 조망, 생활 편의와 쾌적성을 고려한 단지 구성과 배치 계획을 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
    priority: 0.9,
  }),

  complexDetail: page({
    path: "/ComplexGuide/detailintro",
    title: "호수 배치도 | 고덕 제일풍경채",
    description:
      "고덕 제일풍경채 호수 배치도 안내입니다. 동·호수 구성과 단지 내 위치 정보를 통해 세대별 배치 흐름을 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  complexCommunity: page({
    path: "/ComplexGuide/community",
    title: "커뮤니티 | 고덕 제일풍경채",
    description:
      "고덕 제일풍경채 커뮤니티 안내입니다. 입주민의 일상 편의와 여가를 고려한 커뮤니티 시설과 단지 생활 가치를 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  floorPlan84A: page({
    path: "/FloorPlan/59A",
    title: "84A㎡ 평면도 | 고덕 제일풍경채",
    description:
      "고덕 제일풍경채 84A㎡ 평면도 안내입니다. 실거주 선호도가 높은 대표 타입의 공간 구성과 생활 동선을 확인하세요.",
    menu: "세대안내",
  }),

  floorPlan84C: page({
    path: "/FloorPlan/59B",
    title: "84C㎡ 평면도 | 고덕 제일풍경채",
    description:
      "고덕 제일풍경채 84C㎡ 평면도 안내입니다. 공간 활용과 수납, 가족 생활 동선을 고려한 세대 구성을 확인하세요.",
    menu: "세대안내",
  }),

  floorPlan101: page({
    path: "/FloorPlan/84A",
    title: "101㎡ 평면도 | 고덕 제일풍경채",
    description:
      "고덕 제일풍경채 101㎡ 평면도 안내입니다. 여유로운 중대형 타입의 공간감과 실내 구성을 확인하세요.",
    menu: "세대안내",
  }),

  floorPlan84B: page({
    path: "/FloorPlan/84B",
    title: "타입별 평면도 | 고덕 제일풍경채",
    description:
      "고덕 제일풍경채 타입별 평면도 안내입니다. 전용 84㎡·101㎡ 중심의 세대 구성과 공간 활용 포인트를 확인하세요.",
    menu: "세대안내",
  }),

  floorPlan114A: page({
    path: "/FloorPlan/114A",
    title: "세대안내 | 고덕 제일풍경채",
    description:
      "고덕 제일풍경채 세대안내 페이지입니다. 전용 84㎡·101㎡ 중심의 타입별 평면 구성과 주거 동선을 확인하세요.",
    menu: "세대안내",
  }),

  floorPlan114B: page({
    path: "/FloorPlan/114B",
    title: "세대안내 | 고덕 제일풍경채",
    description:
      "고덕 제일풍경채 세대안내 페이지입니다. 타입별 공간 구성, 수납 계획과 생활 동선 등 세대별 특장점을 확인하세요.",
    menu: "세대안내",
  }),

  floorPlanVideos: page({
    path: "/FloorPlan/videos",
    title: "세대안내영상 | 고덕 제일풍경채",
    description:
      "고덕 제일풍경채 세대안내영상 페이지입니다. 타입별 공간 구성과 실내 포인트를 영상으로 확인하세요.",
    menu: "세대안내",
  }),

  emodel: page({
    path: "/FloorPlan/Emodel",
    title: "E-모델하우스 | 고덕 제일풍경채",
    description:
      "고덕 제일풍경채 E-모델하우스입니다. 84A㎡, 84C㎡, 101㎡ 타입의 실내 구조, 공간 구성과 주거 동선을 온라인으로 확인하세요.",
    menu: "세대안내",
    image: "/img/og/emodel.jpg",
    priority: 0.9,
  }),

  interior84A: page({
    path: "/Interior/59A",
    title: "84A㎡ 인테리어 | 고덕 제일풍경채",
    description:
      "고덕 제일풍경채 84A㎡ 인테리어 안내입니다. 실내 마감, 공간 분위기와 타입별 인테리어 포인트를 확인하세요.",
    menu: "인테리어",
  }),

  interior84C: page({
    path: "/Interior/84A",
    title: "84C㎡ 인테리어 | 고덕 제일풍경채",
    description:
      "고덕 제일풍경채 84C㎡ 인테리어 안내입니다. 타입별 실내 분위기와 공간 활용 포인트를 확인하세요.",
    menu: "인테리어",
  }),

  interior101: page({
    path: "/Interior/84B",
    title: "101㎡ 인테리어 | 고덕 제일풍경채",
    description:
      "고덕 제일풍경채 101㎡ 인테리어 안내입니다. 여유로운 실내 공간과 마감 포인트를 확인하세요.",
    menu: "인테리어",
  }),

  press: page({
    path: "/Promotion/Press",
    title: "언론보도 | 고덕 제일풍경채",
    description:
      "고덕 제일풍경채 언론보도 페이지입니다. 평택 고덕국제신도시 Abc-61BL 총 456세대 공급 정보, 청약, 입지환경, E-모델하우스와 방문예약 관련 보도자료와 분양 소식을 확인하세요.",
    menu: "홍보센터",
    image: "/img/og/main.jpg",
    priority: 0.9,
    changefreq: "daily",
  }),

  customer: page({
    path: "/Promotion/Customer",
    title: "관심고객등록 | 고덕 제일풍경채",
    description:
      "고덕 제일풍경채 관심고객등록 페이지입니다. 분양 일정, 모델하우스 방문예약, 청약 정보와 주요 안내를 빠르게 받아보세요.",
    menu: "홍보센터",
    image: "/img/og/customer.jpg",
    priority: 0.9,
    changefreq: "daily",
  }),

  notFound: page({
    path: "/404",
    title: "페이지를 찾을 수 없습니다 | 고덕 제일풍경채",
    description:
      "요청하신 페이지를 찾을 수 없습니다. 고덕 제일풍경채 공식 홈페이지의 사업안내, 입지환경, 세대안내, E-모델하우스와 관심고객등록 메뉴를 이용해 주세요.",
    menu: "오류",
    priority: 0,
    changefreq: "yearly",
    robots: "noindex, follow",
  }),
};

export const seoPathMap = Object.fromEntries(
  Object.entries(seoPages).map(([key, value]) => [
    value.path.toLowerCase(),
    key,
  ])
);

export const getAbsoluteUrl = (path = "/") => {
  if (/^https?:\/\//.test(path)) return path;

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${siteSeo.siteUrl}${normalizedPath}`;
};

export const getSeoPageByPath = (pathname = "/") => {
  const decodedPath = decodeURI(pathname).replace(/\/$/, "") || "/";
  const normalizedPath = decodedPath.toLowerCase();
  const exactKey = seoPathMap[normalizedPath];

  if (exactKey) return seoPages[exactKey];

  if (normalizedPath.endsWith("/press")) return seoPages.press;
  if (normalizedPath.includes("/press/")) return seoPages.press;
  if (normalizedPath.endsWith("/customer")) return seoPages.customer;

  return seoPages.notFound;
};