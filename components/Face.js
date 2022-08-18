import {
  Container,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import React, { useState } from "react";
import pngwing from "../public/images/pngwing.png";
import main_bg from "../public/images/havaut.png";
import account from "../public/images/account.png";
import a247 from "../public/images/247.png";
import food from "../public/images/food.png";
import { ModalApplication } from "./ModalApplication";

const style = {
  face: {
    height: "100vh",
    marginTop: "52px",
    backgroundImage: `url(${main_bg.src})`,
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    // backgroundSize: "100%",
  },
  left: {
    backgroundColor: "rgba(39, 39, 39, 0.8)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  right: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
    color: "#FFFFFF",
    background:
      "linear-gradient(-90deg, rgba(0, 0, 0, 0.5), rgba(100, 100, 100, 0.33) 85.69%)",
  },
  button: {
    background: "#11D028",
    borderRadius: "32px",
    border: "none",
    width: "280px",
    minHeight: "64px",
    color: "#F6F5F4",
    fontWeight: "400",
    fontSize: "24px",
  },
};

function Face() {
  const [popup, setPopup] = useState(false);
  function handlePopup() {
    setPopup(!popup);
  }

  return (
    <>
      <Box style={style.face}>
        <Grid container>
          <Grid item xs={12} md={6} lg={5}>
            <Box
              style={style.left}
              sx={{ backdropFilter: { md: "blur(13px)", xs: "blur(3px)" } }}
            >
              <Typography
                sx={{
                  fontFamily: "Nickelodeon2001headline",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "96px",
                  lineHeight: " 84.52%",
                  letterSpacing: "0.02em",
                  color: "#11D028",
                  textAlign: "center",
                  mb: 4,
                }}
              >
                TYT
                <br />
                EDA
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "30px",
                  lineHeight: "84.52%",
                  letterSpacing: "-0.005em",
                  color: "white",
                  display: {
                    lg: "none",
                    md: "flex",
                  },
                  textAlign: "center",
                }}
              >
                Корпоративное питание
              </Typography>
              <List
                sx={{
                  color: "#fff",
                  mt: 3,
                  mb: 3,
                }}
              >
                <ListItem>
                  <img src={account.src} />
                  <Typography
                    sx={{ fontSize: { xs: "18px", md: "24px" }, ml: 2 }}
                  >
                    Индивидуальный подход
                  </Typography>
                </ListItem>
                <ListItem>
                  <img src={a247.src} />
                  <Typography
                    sx={{ fontSize: { xs: "18px", md: "24px" }, ml: 2 }}
                  >
                    Бесплатная дегустация
                  </Typography>
                </ListItem>
                <ListItem>
                  <img src={food.src} />
                  <Typography
                    sx={{ fontSize: { xs: "18px", md: "24px" }, ml: 2 }}
                  >
                    Доставка 24/7
                  </Typography>
                </ListItem>
              </List>
              <button
                onClick={() => {
                  handlePopup();
                }}
                style={style.button}
              >
                Оставить заявку
              </button>
              {popup && <ModalApplication onClose={handlePopup} />}
            </Box>
          </Grid>
          <Grid
            item
            lg={7}
            sx={{ display: { xs: "none", md: "none", lg: "flex" } }}
          >
            <Box style={style.right}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "45px",
                  lineHeight: "84.52%",
                  letterSpacing: "-0.005em",
                }}
              >
                Корпоративное питание
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Face;
