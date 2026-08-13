import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./FloorPlan.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";

const Emodel = () => {
  const menuContents = [
    { title: "84A㎡", url: "/FloorPlan/59A" },
    { title: "84C㎡", url: "/FloorPlan/59B" },
    { title: "101㎡", url: "/FloorPlan/84A" },
    { title: "E-모델하우스", url: "/FloorPlan/Emodel" },
  ];

  const typeTabs = [
    { title: "84A㎡", key: "84A㎡" },
    { title: "84C㎡", key: "84C㎡" },
    { title: "101㎡", key: "101㎡" },
  ];

  const vrUrls = {
    "84A㎡": "https://xn--289apcxu78q5pay10eghb4a107h3gx0d900a0h0a.com/vr/84a.html",
    "84C㎡": "https://xn--289apcxu78q5pay10eghb4a107h3gx0d900a0h0a.com/vr/84c.html",
    "101㎡": "https://xn--289apcxu78q5pay10eghb4a107h3gx0d900a0h0a.com/vr/101.html",  
    // "84B": "https://www.prugio.com/hb/2025/onecluster/vr/84b.html",
  };


  const [selectedType, setSelectedType] = useState("84A㎡");
  const { pathname } = useLocation();
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <Header isChanged={isScroll} />
      <FixIcon />
      <Bener title="E-모델하우스" />
      <MenuBar contents={menuContents} />

      <div className={styles.textBox}>
        <div>평택 고덕국제화계획지구의 주거 공간을 온라인으로 확인</div>
        <div>고덕 제일풍경채 E모델하우스를 살펴보세요.</div>
      </div>

      <div className={styles.tabMenu}>
        {typeTabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedType(tab.key)}
            className={`${styles.tabButton} ${selectedType === tab.key ? styles.activeTab : ""}`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className={styles.vrSection}>
        <p className={styles.vrDescription}>
          화면의 아무 곳이나 클릭하시면 해당 VR을 감상하실 수 있습니다.
        </p>
        <iframe
          className={styles.vrIframe}
          src={vrUrls[selectedType]}
          title={`${selectedType} VR`}
          allowFullScreen
          frameBorder="0"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Emodel;
