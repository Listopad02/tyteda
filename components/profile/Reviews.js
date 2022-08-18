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
import api from "../../utils/api";
import { useState, useEffect } from "react";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [reload, setReload] = useState(0);

  useEffect(async () => {
    const res = await api("/reviews", {
      method: "GET",
    });
    setReviews(res.data);
  }, [reload]);

  const handleDel = async (id) => {
    try {
      await api(`/reviews/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      let reload1 = reload;
      setReload((reload1 += 1));
    } catch (err) {
      console.log(err);
    }
  };

  const handlePub = async (id) => {
    try {
      await api(`/reviews/${id}/publish`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      let reload1 = reload;
      setReload((reload1 += 1));
    } catch (err) {
      console.log(err);
    }
  };

  if (reviews.length < 1) return <>loading</>;

  return (
    <Container sx={{ m: 5 }}>
      <Grid container spacing={2}>
        {reviews.map((e) => {
          return (
            <Grid item xs={12}>
              <Box sx={{ boxShadow: 3, p: 3, background: "white" }}>
                <div>{e.name}</div>
                <div>{e.company}</div>
                <div>{e.comment}</div>
                <div>Рейтинг: {e.rating}</div>
                <Button onClick={() => handleDel(e.id)}>Удалить</Button>
                <Button onClick={() => handlePub(e.id)}>Опубликовать</Button>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Reviews;
