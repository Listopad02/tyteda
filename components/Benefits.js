import {
  Container,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
} from "@mui/material";

import one from "../public/images/one.png";
import two from "../public/images/two.png";
import three from "../public/images/three.png";
import four from "../public/images/four.png";
import five from "../public/images/five.png";
import six from "../public/images/six.png";
import seven from "../public/images/seven.png";
import eight from "../public/images/eight.png";
import nine from "../public/images/nine.png";

const style = {
  benefitsCont: {
    textAlign: "center",
    display: "flex",
  },
  sectionHeader: {
    fontWeight: "800",
    letterSpacing: "-0.02em",
    lineHeight: "84.52%",
    color: "#2A2A2A",
    textAlign: "center",
    paddingBottom: "30px",
  },
  benefitsCard: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    letterSpacing: "-0.02em",
    color: "#8A8A8A",
    paddingBottom: "16px",
    lineHeight: "22px",
  },
  benefitsImageContainer: {
    textAlign: "center",
    width: "43px",
    margin: "auto",
  },
  benefitsBox: {
    fontFamily: "Roboto",
    fontWeight: "200",
    fontStyle: "normal",
    textAlign: "center",
  },
};

function Benefits() {
  return (
    <>
      <Container maxWidth="sm" style={style.benefitsCont} sx={{ mt: 15 }}>
        <Grid container>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Typography
              style={style.sectionHeader}
              sx={{ fontSize: { xs: "32px", md: "64px" } }}
            >
              Преимущества
              <br />
              работы с нами:
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" style={style.benefitsCont} sx={{ mt: 2 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box style={style.benefitsCard}>
              <Box>
                <div style={style.benefitsImageContainer}>
                  <img src={one.src} />
                </div>
              </Box>
              <Box
                style={style.benefitsBox}
                sx={{ fontSize: { xs: "20px", md: "24px" } }}
              >
                Зона доставки Москва
                <br />и Московская область
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box style={style.benefitsCard}>
              <Box>
                <div style={style.benefitsImageContainer}>
                  <img src={four.src} />
                </div>
              </Box>
              <Box
                style={style.benefitsBox}
                sx={{ fontSize: { xs: "20px", md: "24px" } }}
              >
                Доставим заказ 24/7
                <br />в установленное время
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box style={style.benefitsCard}>
              <Box>
                <div style={style.benefitsImageContainer}>
                  <img src={seven.src} />
                </div>
              </Box>
              <Box
                style={style.benefitsBox}
                sx={{ fontSize: { xs: "20px", md: "24px" } }}
              >
                Бесплатно доставим
                <br />
                холодильник и СВЧ-печь
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box style={style.benefitsCard}>
              <Box>
                <div style={style.benefitsImageContainer}>
                  <img src={two.src} />
                </div>
              </Box>
              <Box
                style={style.benefitsBox}
                sx={{ fontSize: { xs: "20px", md: "24px" } }}
              >
                Собственное
                <br />
                производство
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box style={style.benefitsCard}>
              <Box>
                <div style={style.benefitsImageContainer}>
                  <img src={five.src} />
                </div>
              </Box>
              <Box
                style={style.benefitsBox}
                sx={{ fontSize: { xs: "20px", md: "24px" } }}
              >
                Заключение
                <br />
                договора
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box style={style.benefitsCard}>
              <Box>
                <div style={style.benefitsImageContainer}>
                  <img src={eight.src} />
                </div>
              </Box>
              <Box
                style={style.benefitsBox}
                sx={{ fontSize: { xs: "20px", md: "24px" } }}
              >
                Гибкая ценовая
                <br />
                политика
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box style={style.benefitsCard}>
              <Box>
                <div style={style.benefitsImageContainer}>
                  <img src={nine.src} />
                </div>
              </Box>
              <Box
                style={style.benefitsBox}
                sx={{ fontSize: { xs: "20px", md: "24px" } }}
              >
                Без ГМО
                <br />и добавок
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box style={style.benefitsCard}>
              <Box>
                <div style={style.benefitsImageContainer}>
                  <img src={six.src} />
                </div>
              </Box>
              <Box
                style={style.benefitsBox}
                sx={{ fontSize: { xs: "20px", md: "24px" } }}
              >
                8 лет
                <br />
                на рынке
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box style={style.benefitsCard}>
              <Box>
                <div style={style.benefitsImageContainer}>
                  <img src={three.src} />
                </div>
              </Box>
              <Box
                style={style.benefitsBox}
                sx={{ fontSize: { xs: "20px", md: "24px" } }}
              >
                Контроль
                <br />
                качества
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Benefits;
