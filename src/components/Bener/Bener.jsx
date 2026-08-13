import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title = "고덕 제일풍경채" }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="고덕 제일풍경채 배너이미지"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <h1
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </h1>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  const normalizedText = text.replace(/\s/g, "");

  const brandTitles = ["홍보영상", "브랜드소개", "고덕제일풍경채"];

  const businessTitles = [
    "사업개요",
    "사업안내",
    "분양일정",
    "공급안내",
    "분양안내",
    "청약안내",
    "모집공고안내",
    "인지세납부안내",
  ];

  const locationTitles = ["입지환경", "입지안내", "프리미엄"];

  const complexTitles = [
    "단지안내",
    "단지배치도",
    "호수배치도",
    "커뮤니티",
  ];

  const unitTitles = [
    "세대안내",
    "세대안내영상",
    "84A㎡평면도",
    "84B㎡평면도",
    "84C㎡평면도",
    "101㎡평면도",
    "E모델하우스",
    "E-모델하우스",
  ];

  const promotionTitles = [
    "홍보센터",
    "언론보도",
    "관심고객등록",
    "방문예약등록",
  ];

  if (brandTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          평택 고덕국제신도시 Abc-61BL에서 만나는 고덕 제일풍경채의 새로운 주거 가치.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          제일건설의 주거 철학과 풍경채 브랜드 가치를 담은 총 456세대 아파트.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          교통·교육·생활 인프라와 미래가치를 갖춘 고덕국제신도시의 새로운 주거 선택지.
        </div>
      </>
    );
  } else if (
    businessTitles.includes(normalizedText) ||
    unitTitles.includes(normalizedText) ||
    normalizedText.includes("인테리어")
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          평택 고덕국제신도시 Abc-61BL에 조성되는 고덕 제일풍경채 사업 안내.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          지하 2층~지상 최고 23층, 5개 동, 총 456세대로 조성되는 주거단지.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          청약 정보부터 모집공고, 세대 구성, 인테리어까지 한눈에 확인하세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          고덕 제일풍경채
        </div>
      </>
    );
  } else if (locationTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          고덕국제신도시의 교통·생활·교육 인프라를 가까이 누리는 입지 환경.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          삼성전자 평택캠퍼스 직주근접과 고덕국제신도시의 미래가치를 기대할 수 있는 주거단지.
        </div>
      </>
    );
  } else if (complexTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          쾌적한 단지 설계와 실용적인 공간 구성을 갖춘 고덕 제일풍경채.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          총 456세대에 맞춰 계획된 조경과 커뮤니티, 주거 편의시설을 확인하세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          제일건설이 시공하는 고덕국제신도시 Abc-61BL의 새로운 주거공간.
        </div>
      </>
    );
  } else if (promotionTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          고덕 제일풍경채의 분양 소식과 모델하우스 방문예약 안내를 확인하세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          관심고객등록을 통해 공급 정보와 상담 안내를 빠르게 받아보실 수 있습니다.
        </div>
      </>
    );
  }

  return (
    <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
      고덕 제일풍경채 공식 홈페이지에서 Abc-61BL의 주요 분양 정보를 확인하세요.
    </div>
  );
};