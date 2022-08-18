import {
  Container,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import MenuItems from "./MenuItems";
import MenuItemsNew from "./MenuItemsNew";
import { useState, useEffect } from "react";
import api from "../utils/api";

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
    padding: "5px",
    margin: "30px 3px",
    fontWeight: 600,
    fontSize: "13px",
    lineHeight: "84.52%",
    textAlign: "center",
    letterSpacing: "-0.02em",
    color: "#2A2A2A",
    border: "none",
    borderRadius: "24.5px",
    width: "70px",
    height: "30px",
    background: "transparent",
  },
  buttonActiveMin: {
    padding: "10px",
    margin: "30px 3px",
    fontWeight: 600,
    fontSize: "13px",
    lineHeight: "84.52%",
    textAlign: "center",
    letterSpacing: "-0.02em",
    color: "#F4F4F4",
    border: "none",
    borderRadius: "24.5px",
    width: "70px",
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

function Menu() {
  // const meals = ["Завтрак", "Обед", "Ужин", "Напитки"];
  const [meal, setMeal] = useState(1);

  const [button, setButton] = useState({});

  useEffect(async () => {
    const res = await api("/public/dishes/types", {
      method: "GET",
    });
    const r = {};
    res.data.map((e) => {
      r[e.id] = e.name;
    });
    setButton(r);
  }, []);

  const handleClick = (i, event) => {
    setMeal(+i);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 10, textAlign: "center" }}>
      {/* <Grid container>
        <Grid item xs={12}>
          <Typography
            style={style.sectionHeader}
            sx={{ fontSize: { xs: "32px", md: "64px" } }}
          >
            Меню
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
      <MenuItems meal={meal} /> */}

      <Grid container>
        <Grid item xs={12}>
          <Typography
            style={style.sectionHeader}
            sx={{ fontSize: { xs: "32px", md: "64px" } }}
          >
            Меню
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {Object.keys(button).map((item) => {
              return meal === +item ? (
                <button
                  key={item}
                  onClick={() => handleClick(item, event)}
                  style={style.buttonActive}
                >
                  {button[item]}
                </button>
              ) : (
                <button
                  key={item}
                  onClick={() => handleClick(item, event)}
                  style={style.button}
                >
                  {button[item]}
                </button>
              );
            })}
          </Box>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Grid container>
              {Object.keys(button).map((item) => {
                return meal === +item ? (
                  <Grid item xs={4}>
                    <button
                      key={item}
                      onClick={() => handleClick(item, event)}
                      style={style.buttonActiveMin}
                    >
                      {button[item]}
                    </button>
                  </Grid>
                ) : (
                  <Grid item xs={4}>
                    <button
                      key={item}
                      onClick={() => handleClick(item, event)}
                      style={style.buttonMin}
                    >
                      {button[item]}
                    </button>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <MenuItemsNew meal={meal} />
    </Container>
  );
}

export default Menu;
