import {
  Container,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  autocompleteClasses,
} from "@mui/material";
import delleft from "../public/images/delleft.png";
import delright from "../public/images/delright.png";
import {ModalApplication} from "./ModalApplication";
import {useState} from "react";

const style = {
  block: {
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "84.52%",
    letterSpacing: "-0.02em",
    color: "#8A8A8A",
    margin: "20px 0",
  },
  button: {
    background: "#11D028",
    borderRadius: "10px",
    border: "none",
    width: "100%",
    maxWidth: "280px",
    height: "auto",
    minHeight: "50px",
    color: "#F6F5F4",
    fontWeight: "400",
    fontSize: "24px",
  },
  sectionHeader: {
    fontWeight: "800",
    letterWpacing: "-0.02em",
    lineHeight: "84.52%",
    color: "#2A2A2A",
    textAlign: "center",
    paddingBottom: "30px"
  }
};

function Delivery() {
  const [modal, setModal] = useState(false)

  const handleModal = () => {
    setModal(!modal)
  }
  return (
    <Container maxWidth="lg" sx={{ mt: 20 }}>
      <Grid container sx={{ textAlign: "center", mt: 20 }}>
        <Grid item xs={12}>
          <Typography style={style.sectionHeader} sx={{ fontSize: { xs: "32px", md: "64px" }}}>Оплата и доставка</Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ textAlign: "center" }}>
        <Grid
          item
          xs={3}
          sx={{ display: { xs: "none", md: "flex" }, zIndex: { xs: "-1" } }}
        >
          <img src={delleft.src} style={style.img} />
        </Grid>
        <Grid item xs={12} md={6} style={style.block}>
          Оплата наличным и безналичным способом
          <br />
          <br />
          Доставка в Москве и Московской области
          <br />
          <br />
          Круглосуточно без праздников и выходных
          <br />
          <br />
          Время доставки от 60 минут
          <br />
          <br />
          Используемая упаковка и посуда
          <br />
          сертифицирована РСТ (Ростестом)
          <br />
          <br />
          Гарантия срока годности и сохранения
          <br />
          вкусовых качеств при соблюдении
          <br />
          условий хранения.
          <br />
          <br />
          <button style={style.button} onClick={handleModal}>Оставить заявку</button>
          {modal && <ModalApplication onClose={handleModal} /> }
        </Grid>
        <Grid item xs={3} sx={{ display: { xs: "none", md: "flex" } }}>
          <img src={delright.src} style={style.img} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Delivery;
