import {
  Container,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import consalt from "../public/images/be-consalt.jpg";
import moskino from "../public/images/moskino.jpg";
import rif from "../public/images/rif.jpg";
import sovetnik from "../public/images/sovetnik.jpg";
import teatr from "../public/images/teatr-doc.jpg";
import hcb from "../public/images/hcb.jpg";

const media = [
  consalt.src,
  moskino.src,
  rif.src,
  sovetnik.src,
  teatr.src,
  hcb.src,
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
    display: "flex",
    flexDirection: "row",
    justifyСontent: "center",
    alignItems: "center",
  },
  img: {
    width: "80%",
    margin: "auto",
    padding: "20px 0",
  },
  sectionHeader: {
    fontWeight: "800",
    letterSpacing: "-0.02em",
    lineHeight: "84.52%",
    color: "#2A2A2A",
    textAlign: "center",
    paddingBottom: "30px",
  },
};

function Clients() {
  return (
    <Container maxWidth="md">
      <Grid container sx={{ textAlign: "center" }}>
        <Grid item xs={12} sx={{ mt: 20, mb: 5 }}>
          <Typography
            style={style.sectionHeader}
            sx={{ fontSize: { xs: "32px", md: "64px" } }}
          >
            Наши клиенты
          </Typography>
        </Grid>
        <Grid
          container
          spacing={4}
          sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          {media.map((item, i) => {
            return (
              <Grid key={i} item xs={8} sm={4}>
                <Box
                  style={style.block}
                  sx={{
                    background: "white",
                    borderRadius: "15px",
                    boxShadow: 3,
                    minHeight: {md: "200px", sm: "200px", xs: "250px"}
                  }}
                >
                  <img style={style.img} src={item} />
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Clients;
