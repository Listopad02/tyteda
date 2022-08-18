import {
  Container,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  Button,
} from "@mui/material";
import api from "../../utils/api";
import React, { useState } from "react";
import { render } from "react-dom";

const style = {
  card: {
    borderRadius: "15px",
    background: "#F8F8F8",
    color: "#8A8A8A",
    padding: "15px",
  },
};

function converterDate(date) {
  const newDate = new Date(date);
  let res = [
    addLeadZero(newDate.getDate()),
    addLeadZero(newDate.getMonth() + 1),
    newDate.getFullYear(),
  ].join(".");
  let time = [newDate.getHours(), newDate.getMinutes()].join(":");
  // res += " " + time;
  function addLeadZero(val) {
    if (+val < 10) return "0" + val;
    return val;
  }
  return res;
}

function Order({ role, order, reload, setReload }) {
  const [, updateState] = useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const handleDelete = async () => {
    try {
      await api(`/orders/${order.order.order_id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      setReload((reload += 1));
    } catch (err) {
      console.log(err);
    }
  };

  async function handleStatusComplete() {
    try {
      await api(`/orders/${order.order.order_id}/status`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: "completed",
        }),
      });
      setReload((reload += 1));
    } catch (err) {
      console.log(err);
    }
  }

  async function handleStatusOrdered() {
    try {
      await api(`/orders/${order.order.order_id}/status`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: "ordered",
        }),
      });
      setReload((reload += 1));
    } catch (err) {
      console.log(err);
    }
  }

  function switchStatus() {
    if (order.order.order_status === "completed") {
      handleStatusOrdered();
    } else {
      handleStatusComplete();
    }
  }

  return (
    <Grid item xs={12} md={6}>
      <Box sx={{ boxShadow: 2, position: "relative" }} style={style.card}>
        {role === "manager" || role === "operator" ? (
          <Box sx={{ position: "absolute", right: "15px" }}>
            <Box>
              <Button onClick={handleDelete}>Удалить заказ</Button>
            </Box>
            <Box>
              <Button onClick={() => switchStatus()}>Изменить статус</Button>
            </Box>
          </Box>
        ) : (
          false
        )}
        <Typography variant="h6">{order.order.company_name}</Typography>
        <Typography>Имя: {order.order.user_fullname}</Typography>
        <Typography>
          Дата: {converterDate(order.order.order_delivery)}
        </Typography>
        <Typography>
          {" "}
          Статус:{" "}
          {order.order.order_status === "ordered" ? (
            <b className="red">Новый</b>
          ) : (
            <b className="green">Выполнен</b>
          )}
        </Typography>

        <Typography>Заказ:</Typography>
        <Grid container sx={{ margin: "0 0 0 20px" }}>
          {order.dishes.map((dishe, i) => {
            return (
              <Grid item xs={12} key={i}>
                {dishe.name}
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Grid>
  );
}

export default Order;
