import {
  Container,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  IconButton,
} from "@mui/material";
import Dish from "./Dish";
import DeleteIcon from "@mui/icons-material/Delete";
import api from "../../utils/api";
import { useState } from "react";

const style = {
  card: {
    background: "#F8F8F8",
    color: "#000",
    padding: "15px",
  },
};

function Dishes({ dishes, reLoad, setReLoad }) {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Box sx={{ boxShadow: 2 }} style={style.card}>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          {dishes.name}
        </Typography>
        {dishes.dishes.map((dish, i) => {
          return (
            <Dish
              key={dish.id}
              reLoad={reLoad}
              setReLoad={setReLoad}
              dish={dish}
            />
          );
        })}
      </Box>
    </Grid>
  );
}

export default Dishes;
