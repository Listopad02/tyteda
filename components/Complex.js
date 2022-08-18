import {
  Container,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import ComplexItems from "./ComplexItems";
import ComplexNewItems from "./ComplexNewItems";
import { useState } from "react";

const style = {
  button: {
    padding: "10px",
    margin: "30px 10px",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "84.52%",
    textAlign: "center",
    letterSpacing: "-0.02em",
    color: "#2A2A2A",
    border: "none",
    borderRadius: "24.5px",
    width: "107px",
    height: "38px",
    background: "transparent",
  },
  buttonActive: {
    padding: "10px",
    margin: "30px 10px",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "84.52%",
    textAlign: "center",
    letterSpacing: "-0.02em",
    color: "#F4F4F4",
    border: "none",
    borderRadius: "24.5px",
    width: "107px",
    height: "38px",
    background: "#11D028",
  },
  buttonMin: {
    padding: "10px",
    margin: "30px 5px",
    fontWeight: 600,
    fontSize: "15px",
    lineHeight: "84.52%",
    textAlign: "center",
    letterSpacing: "-0.02em",
    color: "#2A2A2A",
    border: "none",
    borderRadius: "24.5px",
    width: "80px",
    height: "30px",
    background: "transparent",
  },
  buttonActiveMin: {
    padding: "10px",
    margin: "30px 5px",
    fontWeight: 600,
    fontSize: "15px",
    lineHeight: "84.52%",
    textAlign: "center",
    letterSpacing: "-0.02em",
    color: "#F4F4F4",
    border: "none",
    borderRadius: "24.5px",
    width: "80px",
    height: "30px",
    background: "#11D028",
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

function Complex() {
  const meals = ["Завтрак", "Обед", "Ужин"];
  const [meal, setMeal] = useState(0);

  const handleClick = (i, event) => {
    setMeal(i);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 15, textAlign: "center" }}>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            style={style.sectionHeader}
            sx={{ fontSize: { xs: "32px", md: "64px" } }}
          >
            Выберите свой
            <br />
            комплекс питания
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {meals.map((item, i) => {
              return meal === i ? (
                <button
                  key={item}
                  onClick={() => handleClick(i, event)}
                  style={style.buttonActive}
                >
                  {item}
                </button>
              ) : (
                <button
                  key={item}
                  onClick={() => handleClick(i, event)}
                  style={style.button}
                >
                  {item}
                </button>
              );
            })}
          </Box>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            {meals.map((item, i) => {
              return meal === i ? (
                <button
                  key={item}
                  onClick={() => handleClick(i, event)}
                  style={style.buttonActiveMin}
                >
                  {item}
                </button>
              ) : (
                <button
                  key={item}
                  onClick={() => handleClick(i, event)}
                  style={style.buttonMin}
                >
                  {item}
                </button>
              );
            })}
          </Box>
        </Grid>
      </Grid>
      {/* <ComplexItems meal={meal} /> */}
      <ComplexNewItems meal={meal} />
    </Container>
  );
}

export default Complex;
