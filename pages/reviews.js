import React, { useState } from "react";
import Header from "../components/Header";
import Nav3 from "../components/Nav3";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import styles from "./info.module.css";
import personIcon from "../public/icons/info-kp-icon.svg";
import schoolIcon from "../public/icons/school-icon.svg";

import arrowDown from "../public/icons/arrowDown.svg";
import globe from "../public/icons/globe.svg";

const Page = () => {
  return (
    <>
      <Header />
      <Nav3 />
      <section className={styles.info}>
        <div className={styles.info__image}>
          <h2 className={styles.info__title}>Отзывы</h2>
          <div className={styles.opacity} />
        </div>
      </section>
      <Reviews />
      <Footer />
    </>
  );
};

export default Page;
