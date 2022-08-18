import { useEffect, useState } from "react";
import { connect } from "react-redux";
import api from "../../utils/api";
import { setOrders } from "../../redux/action";
import Loader from "../Loader";
import Order from "./Order";
import Report from "./Report";
import CreateOrder from "./CreateOrder";
import {
  Container,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  Select,
  Input,
  InputLabel,
  FormControl,
  MenuItem,
  Button,
} from "@mui/material";

function Orders({ user, orders, setOrders }) {
  const [ordersFilter, setOrdersFilter] = useState([]);
  const [reload, setReload] = useState(0);

  const [filter, setFilter] = useState({
    company: "",
    dishes: "",
    status: "",
  });
  const [changeFilter, setChangeFilter] = useState({
    date: "",
    company: "",
    dishes: "",
    status: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const resorders = await api("/orders?company_id=0", {
      method: "GET",
    });
    const resdishes = await api("/dishes/types", {
      method: "GET",
    });

    const dishesTypes = resdishes.data.map((e) => {
      return e.name;
    });
    const company = resorders.data.map((e) => {
      return e.order.company_name;
    });
    const companyActual = company.filter(function (item, pos) {
      return company.indexOf(item) == pos;
    });

    const status = resorders.data.map((e) => {
      return e.order.order_status;
    });
    const statusActual = status.filter(function (item, pos) {
      return status.indexOf(item) == pos;
    });

    setFilter({
      ...filter,
      dishes: dishesTypes,
      company: companyActual,
      status: statusActual,
    });
    setOrders(resorders.data);
    setLoading(false);
  }, [setOrdersFilter, reload]);

  useEffect(() => {
    let res = orders;
    if (changeFilter.date.length > 0) {
      res = res.filter((item) => {
        if (converterDate(item.order.order_delivery) === changeFilter.date)
          return item;
      });
    }
    if (changeFilter.company.length > 0) {
      res = res.filter((item) => {
        if (item.order.company_name === changeFilter.company) return item;
      });
    }
    if (changeFilter.status.length > 0) {
      res = res.filter((item) => {
        if (item.order.order_status === changeFilter.status) return item;
      });
    }
    setOrdersFilter(res);
  }, [changeFilter, orders]);

  function converterDate(date) {
    const newDate = new Date(date);
    let res = [
      newDate.getFullYear(),
      addLeadZero(newDate.getMonth() + 1),
      addLeadZero(newDate.getDate()),
    ].join("-");
    function addLeadZero(val) {
      if (+val < 10) return "0" + val;
      return val;
    }
    return res;
  }

  const handleChangeDate = (event) => {
    const target = event.target;
    const value = target.value;
    setChangeFilter({ ...changeFilter, date: value });
  };

  const handleFilter = (status, event) => {
    const target = event.target;
    const value = target.innerText;
    setChangeFilter({ ...changeFilter, [status]: value });
  };

  if (loading) {
    return <Loader />;
  }

  const handleClear = () => {
    setChangeFilter({
      date: "",
      company: "",
      dishes: "",
      status: "",
    });
    setOrdersFilter(orders);
  };
  // console.log(filter, changeFilter);
  // console.log(ordersFilter);
  // const res = orders.filter((item) => {
  //   if (converterDate(item.order.order_created) === value) return item;
  // });
  // setOrdersFilter(res);

  function converterDateSort(date) {
    const newDate = new Date(date);
    const ms = newDate.getTime();
    return ms;
  }

  let sortedOrders = ordersFilter
    .slice()
    .sort(
      (a, b) =>
        converterDateSort(b.order.order_delivery) -
        converterDateSort(a.order.order_delivery)
    );
  // if (sortedOrders.length < 1) sortedOrders = orders;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", m: 5 }}>
      <Container sx={{ m: 5 }}>
        <Grid container>
          <Grid item xs={12}>
            <FormControl variant="standard" sx={{ ml: 2, minWidth: 200 }}>
              Дата:
              <Input
                type="date"
                onChange={handleChangeDate}
                value={changeFilter.date}
              ></Input>
            </FormControl>
            {user.role === "manager" || user.role === "operator" ? (
              <>
                <FormControl variant="standard" sx={{ ml: 2, minWidth: 200 }}>
                  Компания:
                  <Select
                    onChange={() => handleFilter("company", event)}
                    value={changeFilter.company}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    {filter.company.map((e) => {
                      return (
                        <MenuItem key={e} value={e}>
                          {e}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ ml: 2, minWidth: 200 }}>
                  Статус:
                  <Select
                    onChange={() => handleFilter("status", event)}
                    value={changeFilter.status}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    {filter.status.map((e) => {
                      return (
                        <MenuItem key={e} value={e}>
                          {e}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                <Button onClick={handleClear}>Очистить фильтр</Button>
              </>
            ) : (
              false
            )}
          </Grid>
        </Grid>
      </Container>
      <Container>
        {user.role === "manager" || user.role === "operator" ? (
          <Report sortedOrders={sortedOrders} />
        ) : (
          false
        )}
      </Container>
      <Container>
        <Grid container spacing={2}>
          {sortedOrders.map((order, i) => {
            return (
              <Order
                role={user.role}
                key={i}
                order={order}
                reload={reload}
                setReload={setReload}
              />
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

const mapStateToProps = (state, props) => ({
  orders: state.orders,
  user: state.user,
});

const mapDispatchToProps = {
  setOrders,
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
