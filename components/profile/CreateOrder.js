import { useEffect, useState } from "react";
import api from "../../utils/api";
import { connect } from "react-redux";
import Loader from "../Loader";
import MiniCart from "./MiniCart";
import Cart from "./Cart";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  setSubOrders,
  addToCart,
  setDishes,
  setDishType,
} from "../../redux/action";
import {
  Container,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  IconButton,
  Button,
  Card,
} from "@mui/material";

function CreateOrder(props) {
  const cartLength = Object.keys(props.cart).length;
  const companyId = store.getState().user.companyId;
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(async () => {
    fetchCompaniesDishes();
  }, []);

  if (loading) {
    return <Loader />;
  }

  async function fetchData(num) {
    const data = await api(`/dishes?type=${num}`, {
      method: "GET",
    });
    props.setSubOrders(data.data.products);
    props.setDishType(num);
  }

  async function fetchCompaniesDishes() {
    const resdishes = await api(`/companies/${companyId}}`, {
      method: "GET",
    });
    props.setDishes(resdishes.data.dishesTypes);
    setLoading(false);
  }

  function openCart() {
    setOpen(true);
  }

  return (
    <Container sx={{ m: 5 }}>
      <Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{ flexGrow: 1 }}>
            {props.dishes
              ? props.dishes.map((dish) => {
                  return (
                    <Button key={dish.id} onClick={() => fetchData(dish.id)}>
                      {dish.name}
                    </Button>
                  );
                })
              : null}
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "right",
            }}
          >
            <MiniCart
              cartLength={cartLength}
              modal={props.modal}
              setModal={props.setModal}
            />
          </Box>
        </Box>
        {/* новый */}
        <Grid container>
          <Grid xs={12} md={8}>
            <Grid container>
              {props.subOrders
                ? props.subOrders.map((product) => (
                    <Grid item xs={12} md={6} lg={4} key={product.id}>
                      <Card variant="outlined" sx={{ padding: "10px" }}>
                        <Box>
                          <img width="180px" src={product.image} />
                        </Box>
                        <Box>{product.name}</Box>
                        <Box>
                          {product.price}₽/
                          {product.size}
                          {product.size_type === "gram"
                            ? "гр."
                            : product.size_type === "milliliters"
                            ? "мл."
                            : "шт."}
                        </Box>
                        <Button
                          onClick={() => {
                            props.addToCart(
                              props.dishType,
                              product.id,
                              product.name,
                              product.image
                            );
                          }}
                          sx={{ marginLeft: 2 }}
                        >
                          Выбрать
                        </Button>
                      </Card>
                    </Grid>
                  ))
                : null}
            </Grid>
          </Grid>
          <Grid md={4} sx={{ display: { xs: "none", md: "flex" } }}>
            <Cart />
          </Grid>
        </Grid>
        {/* новый */}
        {/* <Box
          sx={{ display: "flex", justifyContent: "space-between" }}
          mt={4}
          mb={2}
        >
          <Typography fontWeight={900}>Продукты:</Typography>
          <IconButton
            aria-label="cart"
            onClick={() => openCart()}
            disabled={!cartLength}
          >
            <StyledBadge badgeContent={cartLength} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </Box>
        <Container xs={12} sx={{ display: "flex" }}>
          <Grid container spacing={3} md={12}>
            {props.subOrders
              ? props.subOrders.map((product) => (
                  <Grid item xs={12} md={4} key={product.id}>
                    <Card variant="outlined" sx={{ padding: "10px" }}>
                      <p>Название: {product.name}</p>
                      <p>Стоимость: {product.price}</p>
                      <p>Вес: {product.weight}</p>
                      <Button
                        onClick={() => {
                          props.addToCart(
                            props.dishType,
                            product.id,
                            product.name,
                            product.image
                          );
                        }}
                        sx={{ marginLeft: 2 }}
                      >
                        Добавить
                      </Button>
                    </Card>
                  </Grid>
                ))
              : null}
          </Grid>
        </Container> */}
        {open && cartLength !== 0 ? <Cart /> : null}
      </Box>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    subOrders: state.subOrders,
    addedProduct: state.addedProduct,
    dishes: state.dishes,
    dishType: state.dishType,
    cart: state.cart,
  };
}

const mapDispatchToProps = {
  addToCart,
  setSubOrders,
  setDishes,
  setDishType,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrder);
