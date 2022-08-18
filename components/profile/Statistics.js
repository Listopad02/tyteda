import {
  Container,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  Input,
  Divider,
} from "@mui/material";
import api from "../../utils/api";
import Loader from "../Loader";
import { useState, useEffect } from "react";

function Statistics() {
  const [stat, setStat] = useState(null);
  const [date, setDate] = useState(undefined);
  useEffect(async () => {
    const res = await api("/stats", {
      method: "GET",
    });
    setStat(res.data);
  }, []);

  const handleChangeDate = async (event) => {
    const month = new Date(event.target.value).getMonth();
    const res = await api(`/stats?date=${event.target.value}`, {
      method: "GET",
    });
    setStat(res.data);
  };

  if (stat === null) {
    return <Loader />;
  }

  return (
    <Container maxWidth="lg" sx={{ m: 5 }}>
      {/* <Box sx={{ m: 1 }}>
        <Input type="month" onChange={handleChangeDate} value={date}></Input>
      </Box> 
      <Divider />*/}
      <Box sx={{ mt: 1 }}>
        <Typography variant="h5">Компании:</Typography>
        <div>Всего компаний: {stat.main.companies.count}</div>
        <div>Всего заказов: {stat.main.orders.count}</div>
        <div>Сумма заказов: {stat.main.orders.price}</div>
        <Grid container>
          {stat.companies.map((company) => {
            return (
              <Grid key={company.id} item xs={12} md={6}>
                <Box sx={{ m: 1, p: 1, boxShadow: 2 }}>
                  <Typography variant="h6">{company.company_name}</Typography>
                  <div>Сумма заказов: {company.price}</div>
                  <div>Всего заказов: {company.orders}</div>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box sx={{ mt: 1 }}>
        <Typography variant="h5">Блюда:</Typography>
        <div>Всего заказов: {stat.main.orders.count}</div>
        <div>Сумма заказов: {stat.main.orders.price}</div>
        <Grid container>
          {stat.orders.map((order, i) => {
            return (
              <Grid key={i} item xs={12} md={6}>
                <Box sx={{ m: 1, p: 1, boxShadow: 2 }}>
                  <Typography variant="h6">{order.type.name}</Typography>
                  {order.dishes.map((dish, i) => {
                    return (
                      <Box key={i}>
                        <Divider />
                        <Box sx={{ m: 1, p: 1 }}>
                          <div>{dish.name}</div>
                          <div>Сумма заказов: {dish.price}</div>
                          <div>Кол-во: {dish.count}</div>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}

export default Statistics;
