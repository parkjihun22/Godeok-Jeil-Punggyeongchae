// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect, useRef } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>고덕 제일풍경채</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>경기도 평택시 고덕국제화계획지구 Abc-61BL</span>
        </li>
        <li>
          <strong>건축규모</strong>
          <span>지하 2층~지상 최고 23층, 총 5개 동</span>
        </li>
        <li>
          <strong>세대수</strong>
          <span>총 456세대</span>
        </li>
        <li>
          <strong>세대정보</strong>
          <span>전용 84㎡A · 84㎡B · 84㎡C · 101㎡</span>
        </li>
        <li>
          <strong>입지환경</strong>
          <span>평택 고덕국제신도시 생활권</span>
        </li>
        <li>
          <strong>직주근접</strong>
          <span>삼성전자 평택캠퍼스 인접 생활권</span>
        </li>
        <li>
          <strong>시공사</strong>
          <span>제일건설㈜</span>
        </li>
      </ul>
    ),
  },

  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="고덕 제일풍경채 입지환경 지도"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="고덕 제일풍경채 고덕국제신도시 생활권 지도"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            고덕국제신도시 생활 인프라와 미래가치를 누리는
            <br />
            고덕 제일풍경채 프리미엄 라이프
          </p>
        </div>
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "평택 고덕국제신도시 중심 입지",
      desc:
        "고덕국제신도시 핵심 생활권 입지<br/>생활·교육·교통 인프라를 가까이 누리는 주거환경<br/>Abc-61BL 고덕 제일풍경채",
    },
    {
      img: slide2,
      title: "전용 84㎡ · 101㎡ 평면",
      desc:
        "실수요 선호도가 높은 전용 84㎡·101㎡ 구성<br/>공간 활용과 생활 동선을 고려한 특화 설계<br/>가족 중심 라이프스타일을 담은 주거 공간",
    },
    {
      img: slide3,
      title: "삼성전자 평택캠퍼스 직주근접",
      desc:
        "삼성전자 평택캠퍼스와 가까운 직주근접 입지<br/>평택 주요 도로망과 광역 교통망 이용 편리<br/>출퇴근과 생활 편의성을 모두 갖춘 주거 환경",
    },
    {
      img: slide4,
      title: "생활·교육 인프라를 모두 누리다",
      desc:
        "고덕국제신도시 생활권을 가까이 누리는 입지<br/>교육시설과 상업시설, 공원까지 편리한 생활환경<br/>쾌적한 신도시 라이프를 완성하는 주거단지",
    },
    {
      img: slide5,
      title: "제일건설의 주거 철학",
      desc:
        "차별화된 단지 설계와 다양한 커뮤니티 시설<br/>입주민 중심의 편리한 주거 환경 제공<br/>제일건설이 시공하는 고덕 제일풍경채",
    },
    {
      img: slide6,
      title: "미래가치가 기대되는 주거 선택",
      desc:
        "고덕국제신도시 개발과 함께 성장하는 미래가치<br/>삼성전자 평택캠퍼스 배후 주거단지 프리미엄<br/>실거주와 미래가치를 함께 갖춘 고덕 제일풍경채",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{
              __html: slides[current].title.replace(/\n/g, "<br/>"),
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: slides[current].desc,
            }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const itemRefs = useRef({});

  const toggle = (key) => {
    setOpenKey((prevKey) => (prevKey === key ? null : key));

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const targetItem = itemRefs.current[key];
        if (!targetItem) return;

        const fixedHeaderOffset = 96;
        const targetTop =
          window.scrollY +
          targetItem.getBoundingClientRect().top -
          fixedHeaderOffset;

        window.scrollTo({
          top: Math.max(targetTop, 0),
          behavior: "auto",
        });
      });
    });
  };

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>HILLSTATE BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      <img
        src={heroImage}
        className={styles.heroImage}
        alt="고덕 제일풍경채 히어로 메인사진"
      />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div
          key={key}
          className={styles.accordionItem}
          ref={(node) => {
            itemRefs.current[key] = node;
          }}
        >
          <button
            type="button"
            className={`${styles.accordionHeader} ${
              openKey === key ? styles.active : ""
            }`}
            onClick={() => toggle(key)}
            aria-expanded={openKey === key}
          >
            <span className={styles.label}>{label}</span>
            <span
              className={`${styles.arrow} ${
                openKey === key ? styles.up : styles.down
              }`}
            />
          </button>
          {openKey === key && (
            <div className={styles.accordionContent}>{content}</div>
          )}
        </div>
      ))}
    </section>
  );
}