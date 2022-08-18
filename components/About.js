import {
  Container,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import image2screen from '../public/images/image2screen.png'

const style = {
  sectionHeader: {
    fontWeight: "800",
    letterSpacing: "-0.02em",
    lineHeight: "84.52%",
    color: "#2A2A2A",
    textAlign: "center",
    paddingBottom: "30px",
  },
  foodDescription: {
    fontWeight: "600",
    lineHeight: "88.52%",
    letterSpacing: "-0.005em",
    color: "#2A2A2A",
  },
  foodList: {
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "84.52%",
    letterSpacing: "-0.005em",
    color: "#696969",
  },
  foodFits: {
    fontWeight: "600",
    lineHeight: "84.52%",
    textAlign: "justify",
    letterSpacing: "-0.005em",
    color: "#2A2A2A",
  },
  img: {
    backgroundImage: `url(${image2screen.src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "80%",
    backgroundPosition: "center",
  },
};

function About() {
  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 10, textAlign: { xs: "center", md: "left" } }}
    >
      <Grid container>
        <Grid item xs={12} md={6}>
          {/* <Typography
            style={style.sectionHeader}
            sx={{ fontSize: { xs: "32px", md: "64px" } }}
          >
            Корпоративное питание
          </Typography> */}
          <Box sx={{ pt: 5, pb: 5, display: { xs: "none", md: "block" } }}>
            <Typography
              style={style.foodDescription}
              sx={{ fontSize: { xs: "22px", md: "45px" } }}
            >
              Корпоративное питание
            </Typography>
            <Typography
              style={style.foodDescription}
              sx={{ fontSize: { xs: "22px", md: "30px" } }}
            >
              в Москве и Московской области: современная столовая на
              аутсорсинге.
            </Typography>

            <List
              style={style.foodList}
              sx={{ width: { xs: "100%", md: "80%" } }}
            >
              <ListItem className="tire">
                Самый бюджетный и удобный способ – воспользоваться услугами
                доставки кейтеринговой компании.
              </ListItem>
              <ListItem className="tire">
                Мы накормим ваших сотрудников также вкусно, как в ресторане, с
                максимальной выгодой для Вас.
              </ListItem>
            </List>
            <Typography
              style={style.foodFits}
              sx={{ fontSize: { xs: "14px", md: "20px" } }}
            >
              Мы Вам подходим если:
            </Typography>
            <List style={style.foodList}>
              <ListItem className="tire">
                Вы хотите сэкономить на содержании собственной столовой.
              </ListItem>
              <ListItem className="tire">
                Вы хотите организовать корпоративное питание по трудовому
                законодательству.
              </ListItem>
              <ListItem className="tire">
                Для вас важно сформировать полноценный соцпакет и создать
                положительный имидж.
              </ListItem>
            </List>
          </Box>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Typography
              sx={{
                fontSize: { xs: "25px", md: "30px" },
                mt: 2,

                textAlign: "center",
                fontWeight: "600",
              }}
            >
              Корпоративное питание
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "20px", md: "22px" },

                mb: 2,
                textAlign: "center",
                fontWeight: "600",
              }}
            >
              в Москве и Московской области: современная столовая на
              аутсорсинге.
            </Typography>
            <Box>
              <Typography>
                Самый бюджетный и удобный способ – воспользоваться услугами
                доставки кейтеринговой компании.
              </Typography>
            </Box>
            <Box>
              <Typography>
                Мы накормим ваших сотрудников также вкусно, как в ресторане, с
                максимальной выгодой для Вас.
              </Typography>
            </Box>

            <Typography
              sx={{
                fontSize: { xs: "20px", md: "22px" },
                mt: 2,
                mb: 2,
                textAlign: "center",
                fontWeight: "600",
              }}
            >
              Мы Вам подходим если:
            </Typography>

            <Box>
              <Typography>
                Вы хотите сэкономить на содержании собственной столовой.
              </Typography>
            </Box>
            <Box>
              <Typography>
                Вы хотите организовать корпоративное питание по трудовому
                законодательству.
              </Typography>
            </Box>
            <Box>
              <Typography>
                Для вас важно сформировать полноценный соцпакет и создать
                положительный имидж.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          style={style.img}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {/* <img src={pngwing.src} /> */}
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
