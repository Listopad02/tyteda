import { useEffect, useState } from "react";
import { connect } from "react-redux";
import api from "../../utils/api";
import { setMenu } from "../../redux/action";
import Loader from "../Loader";
import Dishes from "./Dishes";
import CreatDishe from "./CreatDishe";
import {
  Container,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  Input,
  FormControl,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

function Menu({ menu, setMenu }) {
  const [reLoad, setReLoad] = useState(0);
  const [menuN, setMenuN] = useState(1);
  const [activeMenu, setActiveMenu] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const res = await api(`/dishes?menu=${menuN}`, {
      method: "GET",
    });
    setMenu(res.data);
    setLoading(false);
  }, [menuN, reLoad]);

  useEffect(async () => {
    const res = await api(`/public/currentMenu`, {
      method: "GET",
    });
    setActiveMenu(res.data);
  }, [menuN, reLoad]);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    setMenuN(value);
  };

  const handleActiveMenu = async () => {
    const res = await api(`/dishes/setMenu`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        menu: menuN,
      }),
    });
    setReLoad(reLoad + 1);
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Container sx={{ m: 5 }}>
        <Grid container>
          <Grid item xs={12}>
            <Box>Активное меню: {activeMenu}</Box>
            <FormControl variant="standard">
              <Select
                placeholder="Меню"
                value={menuN}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                onChange={handleChange}
              >
                <MenuItem value={1}>Меню 1</MenuItem>
                <MenuItem value={2}>Меню 2</MenuItem>
                <MenuItem value={3}>Меню 3</MenuItem>
                <MenuItem value={4}>Меню 4</MenuItem>
              </Select>
            </FormControl>
            <Button onClick={handleActiveMenu}>Сделать активным</Button>
            <CreatDishe setMenuN={setMenuN} menu={menuN} />
            <Button onClick={() => setReLoad(reLoad + 1)}>Обновить</Button>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ m: 5 }}>
        <Grid container spacing={2}>
          {menu.map((dishes) => {
            return (
              <Dishes
                key={dishes.id}
                dishes={dishes}
                reLoad={reLoad}
                setReLoad={setReLoad}
              />
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

const mapStateToProps = (state, props) => ({
  menu: state.menu,
});

const mapDispatchToProps = {
  setMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
