import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from "./BusinessGuide.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";

const projectData = [
  { label: "사업명", value: "고덕 제일풍경채" },
  {
    label: "대지위치",
    value: "경기도 평택시 고덕국제화계획지구 Abc-61BL",
  },
  {
    label: "주택형",
    value: "전용 84㎡A · 84㎡B · 84㎡C · 101㎡",
  },
  {
    label: "세대수",
    value: "총 456세대",
  },
  {
    label: "단지규모",
    value: "지하 2층~지상 최고 23층, 총 5개 동",
  },
  {
    label: "입지환경",
    value: "평택 고덕국제신도시 중심 생활권",
  },
  {
    label: "교통환경",
    value: "삼성전자 평택캠퍼스 직주근접 및 주요 도로망 이용 편리",
  },
  {
    label: "생활인프라",
    value: "교육·상업·공원 등 다양한 생활 인프라를 가까이 누리는 주거환경",
  },
  {
    label: "시공사",
    value: "제일건설㈜",
  },
];

const BusinessGuide1 = () => {
  const menuContents = [
    { title: "사업안내", url: "/BusinessGuide/intro" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation();
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="사업개요" />

      <MenuBar contents={menuContents} />

      <div className={styles.textBox}>
        <div>평택 고덕국제화계획지구가 품은 새로운 주거 가치</div>
        <div>고덕 제일풍경채, 브랜드 프리미엄을 완성합니다.</div>
      </div>

      <section className={styles.businessShell} aria-labelledby="business-title">
        <div className={styles.businessHeader}>
          <span>PROJECT</span>
          <h2 id="business-title">사업개요</h2>
          <p>
            경기도 평택시 고덕국제신도시 Abc-14BL · Abc-61BL에 조성되는
            총 1,126세대 브랜드 아파트입니다.
          </p>
        </div>

        <img
          className={styles.img3}
          src={page1}
          alt="고덕 제일풍경채 사업개요 이미지"
        />

        <div className={styles.tableContainer}>
          {!isMobile && (
            <img
              className={styles.tableImg}
              src={tableImage}
              alt="고덕 제일풍경채 사업개요 표 이미지"
            />
          )}

          <table className={styles.projectTable}>
            <tbody>
              {projectData.map((item, index) => (
                <tr key={index}>
                  <td className={styles.label}>{item.label}</td>
                  <td className={styles.contents}>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※ 본 홈페이지에 표기된 내용은 하기의 내용을 근거로 한 내용이며,
          추후 계획의 변동 등은 당사와 무관합니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BusinessGuide1;