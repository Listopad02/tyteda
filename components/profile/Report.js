import {
  Container,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  IconButton,
  Button,
  Modal,
  PrintTable,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useState, useEffect } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { setResult, setPrint } from "../../redux/action";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Report(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    sortResult();
    sortName();
  }, [props.sortedOrders]);

  function sortResult() {
    let sortType = {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
    };

    props.sortedOrders.map((e) => {
      return e.dishes.map((e) => {
        for (let i = 0; i <= Object.keys(sortType).length; i++) {
          if (e.dish_type_id === i) {
            sortType[e.dish_type_id].push(e);
          }
        }
      });
    });
    const result = Object.keys(sortType).map((value) =>
      Object.values(sortType[value])
    );
    // props.setResult(result);
  }

  function sortName() {
    const lengthArr = [];
    let nameSort = {};

    let sort = {};

    // part 1
    props.sortedOrders.map((e) => {
      return e.dishes.map((e) => {
        lengthArr.push(e);
        sort[e.dish_type_name] = {};
      });
    });

    props.sortedOrders.map((e) => {
      return e.dishes.map((e) => {
        sort[e.dish_type_name][e.name] = 0;
      });
    });
    props.sortedOrders.map((e) => {
      return e.dishes.map((e) => {
        Object.keys(sort[e.dish_type_name]).map((elem) => {
          if (elem === e.name) sort[e.dish_type_name][e.name] += 1;
        });
      });
    });

    // part 2
    lengthArr.map((e) => {
      if (!nameSort[`${e.name}`]) {
        nameSort[`${e.name}`] = [];
      }
      nameSort[`${e.name}`].push(e);
    });
    props.setPrint(sort);
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Button>
          <Link href="/print">Отчет для кухни</Link>
        </Button>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  orders: state.orders,
  result: state.result,
});

const mapDispatchToProps = {
  setResult,
  setPrint,
};

export default connect(mapStateToProps, mapDispatchToProps)(Report);
