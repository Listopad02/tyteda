import React from "react";
import { connect } from "react-redux";
import { removeItem, removeCart } from "../../redux/action";
import DeleteIcon from "@mui/icons-material/Delete";
import api from "../../utils/api";
import { useState } from "react";
import {
  Container,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  Button,
  Snackbar,
  Alert,
  Card,
  Avatar,
  Input,
} from "@mui/material";
import { Store } from "@mui/icons-material";
import { display } from "@mui/system";

function Cart({ cart, dishes, removeItem, removeCart }) {
  const [toast, setToast] = useState(false);
  const [date, setDate] = useState(getDate);
  const cartLength = Object.keys(cart).length;
  const cartArray = Object.values(cart).map((e) => {
    return e.id;
  });

  function getDate() {
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1;
    if (curr_month < 10) curr_month = "0" + curr_month;
    var curr_year = d.getFullYear();
    let dd = curr_year + "-" + curr_month + "-" + (curr_date + 1);
    return dd;
  }

  function showSuccessMessage() {
    return (
      <Snackbar
        open={toast}
        autoHideDuration={3000}
        onClose={() => setToast(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Alert
          onClose={() => setToast(false)}
          variant="filled"
          severity="info"
          sx={{ width: "100%" }}
        >
          Ваш заказ был принят на обработку!
        </Alert>
      </Snackbar>
    );
  }

  const handleChangeDate = (event) => {
    const value = event.target.value;
    setDate(value);
  };

  async function pushCart() {
    try {
      const res = await api("/orders", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          deliveredAt: date,
          dishes: cartArray,
        }),
      });
      if (res.status === 200) {
        removeCart();
        setToast(true);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      {/* новый */}
      Заказ на:{" "}
      <Input type="date" onChange={handleChangeDate} value={date}></Input>
      <List>
        {dishes.map((dishesType) => {
          return (
            <>
              <Typography variant="h6" component="div">
                {dishesType.name}
              </Typography>
              <ListItem>
                {cart[dishesType.id] ? (
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Box>
                      <Avatar
                        src={cart[dishesType.id].image}
                        sx={{ marginRight: "15px" }}
                      />
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      {cart[dishesType.id].name}
                    </Box>
                    <Button onClick={() => removeItem(dishesType.id)}>
                      <DeleteIcon />
                    </Button>
                  </Box>
                ) : (
                  <div>
                    Пусто
                    {/* <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Box>
                      <img
                        height="130px"
                        src="https://cb.scene7.com/is/image/Crate/EssentialDinnerPlate10p5inSSS20/$web_pdp_main_carousel_low$/200305104316/essential-dinner-plate.jpg"
                        alt="temporary img"
                      />
                    </Box>
                    <Box></Box>
                  </Box> */}
                  </div>
                )}
              </ListItem>
            </>
          );
        })}
      </List>
      {/* новый */}
      {/* <Typography variant="h6" component="div">
        Моя корзина
      </Typography>
      <List
        sx={{
          width: "100%",
          // maxWidth: 360,
          // bgcolor: "background.paper",
          borderLeft: "1px solid #eee",
          paddingLeft: "10px",
          display: "flex",
        }}
      >
        {dishes.map((dishesType) => {
          return (
            <Grid item key={dishesType.id}>
              <div>
                {dishesType.name}:
                {cart[dishesType.id] ? (
                  <div style={{ marginBottom: "20px" }}>
                    <span width="50%">{cart[dishesType.id].name}</span>
                    <span>
                      <Button onClick={() => removeItem(dishesType.id)}>
                        <DeleteIcon />
                      </Button>
                    </span>
                    <div>
                      <img src={cart[dishesType.id].image} height="130px" />
                    </div>
                  </div>
                ) : (
                  <div>
                    <div>&nbsp;</div>
                    <div>
                      <img
                        height="130px"
                        src="https://cb.scene7.com/is/image/Crate/EssentialDinnerPlate10p5inSSS20/$web_pdp_main_carousel_low$/200305104316/essential-dinner-plate.jpg"
                        alt="temporary img"
                      />
                    </div>
                  </div>
                )}
              </div>
            </Grid>
          );
        })}
      </List> */}
      <Button onClick={pushCart} disabled={!cartArray.length}>
        Заказать
      </Button>
      {pushCart ? showSuccessMessage() : null}
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  dishes: state.dishes,
});

const mapDispatchToProps = {
  removeItem,
  removeCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
