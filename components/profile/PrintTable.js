import * as React from "react";
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
  DataGrid,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { connect } from "react-redux";
import { useEffect } from "react";

function PrintTable(props) {
  const keys = Object.keys(props.print);
  const values = Object.values(props.print);

  useEffect(() => {
    printPage();
  });

  function printPage() {
    window.print();
  }
  return (
    <TableContainer component={Paper}>
      <Table
        aria-label="simple table"
        sx={{ height: "100vh", owerflow: "scroll" }}
      >
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <h3>Категория</h3>
            </TableCell>
            <TableCell align="center">
              <h3>Заказ</h3>
            </TableCell>
            <TableCell align="center">
              <h3>Количество</h3>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {keys.map((item, i) => {
            return (
              <TableRow key={i}>
                {item[i] ? (
                  <>
                    {/* first */}
                    <TableCell align="center">{item}</TableCell>

                    {/* second */}
                    <TableCell align="center">
                    {
                      Object.keys(values[i]).map((key, i) => {
                        return (
                          <p align="center" key={key}>{i}</p>
                        )
                      })
                    }
                    </TableCell>

                    {/* third */}
                    <TableCell align="center">
                    {
                      Object.values(values[i]).map((key, i) => {
                        return (
                          <p align="center" key={i}>{key}</p>
                        )
                      })
                    }
                    </TableCell>
                  </>
                ) : null}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function mapStateToProps(state) {
  return {
    result: state.result,
    print: state.print,
  };
}

const mapDispatchToProps = {
  // future actions
};

export default connect(mapStateToProps, mapDispatchToProps)(PrintTable);