import {
  Container,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import trustone from "../public/images/trustone.png";
import trusttwo from "../public/images/trusttwo.png";
import trustthree from "../public/images/trustthree.png";
import trustfour from "../public/images/trustfour.png";
import trustfive from "../public/images/trustfive.png";

const media = [
  trustone.src,
  trusttwo.src,
  trustthree.src,
  trustfour.src,
  trustfive.src,
];

const style = {
  h1: {
    fontWeight: 800,
    fontSize: "64px",
    lineHeight: "84.52%",
    letterSpacing: "-0.02em",
    color: "#2A2A2A",
    marginBottom: "10px",
  },
  block: {
    fontWeight: 300,
    fontSize: "24px",
    lineHeight: "84.52%",
    letterSpacing: "-0.02em",
    color: "#2A2A2A",
    textAlign: "center",
    padding: "40px 0",
  },
};

function Trust() {
  return (
    <Container maxWidth="md" sx={{ mt: 20 }}>
      <Grid container sx={{ textAlign: "center" }}>
        <Grid item xs={12}>
          <Typography className="sectionHeader">Нам доверяют</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={4} style={style.block}>
          <div>
            <img src={trustone.src} />
          </div>
          <div>
            8 лет
            <br />
            на рынке
          </div>
        </Grid>
        <Grid item xs={4} style={style.block}>
          <div>
            <img src={trusttwo.src} />
          </div>
          <div>
            Собственное
            <br />
            производство
          </div>
        </Grid>
        <Grid item xs={4} style={style.block}>
          <div>
            <img src={trustthree.src} />
          </div>
          <div>
            Контроль
            <br />
            качества
          </div>
        </Grid>
      </Grid>
      <Grid container style={style.cont}>
        <Grid item xs={6} style={style.block}>
          <div>
            <img src={trustfour.src} />
          </div>
          <div>
            Собственный
            <br />
            транспорт
          </div>
        </Grid>
        <Grid item xs={6} style={style.block}>
          <div>
            <img src={trustfive.src} />
          </div>
          <div>
            Гибкая ценовая
            <br />
            политика
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Trust;
