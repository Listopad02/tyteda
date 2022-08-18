import { Block } from "@mui/icons-material";
import {
  Container,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import Link from "next/link";
import styles from "./Nav3.module.css";
import { link } from "./Nav3";

const style = {
  container: {
    marginTop: "150px",
    padding: "20px 0",
    background: " #2A2A2A",
    color: "#A6A6A6",
  },
};

function Footer() {
  return (
    <Box style={style.container}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} md={4}>
            <Typography sx={{ color: "#FFFFFF" }}>
              TYTEDA Корпоративное питание
            </Typography>
            <List>
              <ListItem>
                <Link href="/info">
                  <a>Информация</a>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/">
                  <a>Отзывы</a>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/contacts">
                  <a>Контакты</a>
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{ color: "#FFFFFF" }}>Дополнительные услуги</Typography>
            <List>
              <ListItem>
                <a href="https://shashlandia.ru/" target="_blanck">
                  Все для пикника
                </a>
              </ListItem>
              <ListItem>
                <a href="https://pominkizal.ru/" target="_blanck">
                  Доставка поминильных обедов
                </a>
              </ListItem>
              <ListItem>
                <a href="https://vezu-banket.ru/" target="_blanck">
                  Везу банкет
                </a>
              </ListItem>
              <ListItem>
                <a href="https://tyteda.ru/" target="_blanck">
                  Доставка готовой еды
                </a>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography sx={{ color: "#FFFFFF" }}>Контакты</Typography>
            <List>
              <ListItem>8 (495) 139-66-11</ListItem>
              <ListItem>corp-pitanie@tyteda.ru</ListItem>
              <ListItem>Москва, ул. Сталеваров 14к1</ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            ООО "БКФ" ОГРН: 5177746201221 ИНН: 7720402524 Не является публичной
            офертой
            <br />
            2021 Сделано{" "}
            <a href="https://wetop.ru/" target="_blanck">
              WeTop digital agency
            </a>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
