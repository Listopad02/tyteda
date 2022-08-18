import { useState } from "react";
import styles from "./Nav3.module.css";
import { BurgerMenu } from "./BurgerMenu";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import account from "../public/images/account.png";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { ModalApplication } from "./ModalApplication";

export const items = ["Информация", "Отзывы", "Контакты"];
export const link = ["/info", "/reviews", "/contacts"];

export const Nav3 = () => {
  const [modal, setModal] = useState(false);
  const [popup, setPopup] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };
  const handlePopup = () => {
    setPopup(!popup);
  };

  const style = {
    logo: {
      fontFamily: "Nickelodeon2001headline",
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "84.52%",
      letterSpacing: "0.02em",
      color: "#11D028",
      textAlign: "center",
      cursor: "pointer",
    },
  };

  return (
    <>
      <section className={styles.header__menu}>
        <div className={styles.nav2}>
          <Box sx={{ display: { sx: "flex", md: "none" } }}>
            <MenuIcon
              sx={{ m: 2 }}
              style={{ color: "#11D028" }}
              onClick={handleModal}
            />
          </Box>
          {modal && <BurgerMenu onClose={handleModal} />}
          {/* <h6 className={styles.logo__title}> */}
          <Link href="/">
            <Typography style={style.logo}>
              TYT
              <br />
              EDA
            </Typography>
          </Link>
          {/* </h6> */}
          <div className={styles.menu__links}>
            {items.map((item, i) => {
              return (
                <Link key={item} href={link[i]}>
                  <a key={item} className={styles.button}>
                    {item}
                  </a>
                </Link>
              );
            })}
          </div>
          <div className={styles.nav__links}>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <Link href="/profile">
                <AccountBoxIcon sx={{ m: 2 }} style={{ color: "#11D028" }} />
              </Link>
            </Box>
            <Link href="/profile">
              <a className={`${styles.else} ${styles.else__cabinet}`}>
                Личный кабинет
              </a>
            </Link>
            <button
              onClick={handlePopup}
              style={{ cursor: "pointer" }}
              className={`${styles.else} ${styles.else__application}`}
            >
              Оставить заявку
            </button>
            {popup && <ModalApplication onClose={handlePopup} />}
          </div>
        </div>
      </section>
    </>
  );
};

export default Nav3;
