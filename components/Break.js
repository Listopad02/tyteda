import {
  Container,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import breakImg from "../public/images/break.png";

const style = {
  img: {
    width: "100%",
  },
  sectionHeader: {
    fontWeight: "800",
    letterSpacing: "-0.02em",
    lineHeight: "84.52%",
    color: "#2A2A2A",
    textAlign: "center",
    paddingBottom: "30px",
  },
  breakDescription: {
    fontWeight: "600",
    lineHeight: "84.52%",
    textAlign: "center",
    letterSpacing: "-0.005em",
    color: "#8A8A8A",
    margin: "40px 0",
  }
}

function Break() {
  return (
    <Container maxWidth="md" sx={{ mt: 20, textAlign: "center" }}>
      <Grid container>
        <Grid item xs={12}>
          <Typography style={style.sectionHeader} sx={{ fontSize: { xs: "32px", md: "64px" }}}>Сделай перерыв</Typography>
          <Typography style={style.breakDescription} sx={{ fontSize: { xs: "22px", md: "28px" }}}>
            Бесплатная дегустация
            <br />
            перед заключением договора
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <img src={breakImg.src} style={style.img} />
      </Grid>
    </Container>
  );
}

export default Break;