import * as React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import MenuIcon from "@mui/icons-material/Menu";
import { BurgerMenu } from "./BurgerMenu";
import styles from "./Nav.module.css";
import account from "../public/images/account.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const style = {
  nav: {
    backdropFilter: "blur(12px)",
    background: "rgba(255, 255, 255, 0.8)",
  },
  logo: {
    fontFamily: "Nickelodeon2001headline",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "84.52%",
    letterSpacing: "0.02em",
    color: "#11D028",
    textAlign: "center",
  },
  menu: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
  button: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "84.52%",
    letterSpacing: "-0.005em",
    color: "#2B2B2B",
    margin: "0 10px",
  },
  else: {
    padding: "7px 25px",
    border: "1px solid #11D028",
    borderRadius: "18px",
    margin: "0 5px",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "84.52%",
    letterSpacing: "-0.005em",
    color: "#F4F4F4",
    backgroundColor: "#11D028",
  },
  burgerMenu: {},
};

export const items = [
  "Информация",
  "Наше меню",
  "Тарифы",
  "Отзывы",
  "Контакты",
];
export const link = ["/info", "/", "/", "/", "/"];

function Nav(props) {
  const [modal, setModal] = React.useState(false);

  const handleModal = () => {
    setModal(!modal);
    console.log(modal);
  };

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar className={styles.nav}>
          <Container>
            <Toolbar variant="dense" className={styles.tool__bar}>
              <MenuIcon
                style={{ color: "#11D028" }}
                onClick={() => handleModal()}
                className={styles.menu__icon}
                fontSize="large"
              />
              {modal && <BurgerMenu onClose={handleModal} />}
              <Box>
                <Typography
                  variant="h6"
                  component="div"
                  className={styles.logo}
                >
                  <Link href="/">
                    <a>
                      TYT
                      <br />
                      EDA
                    </a>
                  </Link>
                </Typography>
              </Box>
              <Box className={styles.menu}>
                {items.map((item, i) => {
                  return (
                    <Link key={item} href={link[i]}>
                      <a key={item} className={styles.button}>
                        {item}
                      </a>
                    </Link>
                  );
                })}
              </Box>
              <Box sx={{ display: "flex" }}>
                <Link href="/profile">
                  {/* <img src={account.src} className={styles.cabinet} /> */}
                  <AccountCircleIcon
                    fontSize="large"
                    className={styles.cabinet}
                  />
                </Link>
                <Link href="/profile">
                  <a className={`${styles.else} ${styles.else__cabinet}`}>
                    Личный кабинет
                  </a>
                </Link>
                <a className={`${styles.else} ${styles.else__application}`}>
                  Оставить заявку
                </a>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}

export default Nav;
