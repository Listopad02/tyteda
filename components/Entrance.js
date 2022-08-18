import {
  Box,
  Container,
  Typography,
  Alert,
  Snackbar,
  Grid,
  Avatar,
  Button,
  Link,
} from "@mui/material";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { setUser } from "../redux/action";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import api from "../utils/api";

const style = {
  cont: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    background: "white",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    boxShadow: 3,
  },
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#11D028",
    },
  },
});

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://tyteda.ru/">
        TYTEDA
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Entrance({ setUser }) {
  const [toast, setToast] = useState(false);
  // const [login, setLogin] = useState({
  //   username: null,
  //   password: null,
  // });

  const router = useRouter();

  // const handleChange = (event) => {
  //   const target = event.target;
  //   const value = target.value;
  //   const name = target.name;
  //   setLogin({ ...login, [name]: value });
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api("/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: event.target.login.value,
          password: event.target.password.value,
        }),
      });
      localStorage.setItem("access_token", response.access_token);
      await router.push("/profile");
    } catch (err) {
      setToast(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        {/* <Grid container>
        <Grid style={style.cont} item xs={12} md={6}>
          <Box style={style.box}>
            <Typography variant="body1">Вход в личный кабинет</Typography>
            <br />
            <form onSubmit={handleSubmit}>
              <input
                type="login"
                placeholder="username"
                name="username"
                onChange={handleChange}
              ></input>
              <br />
              <br />
              <input
                type="password"
                placeholder="password"
                name="password"
                onChange={handleChange}
              ></input>
              <br />
              <br />
              <input type="submit" value="Вход"></input>
            </form>
          </Box>{" "}
        </Grid>
      </Grid> */}

        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              paddingTop: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Вход в личный кабинет
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="login"
                label="Логин"
                name="login"
                autoComplete="login"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, color: "white" }}
              >
                Войти
              </Button>
              <Grid container sx={{ textAlign: "center" }}>
                <Grid item xs={12}>
                  <Link href="#" variant="body2">
                    {"Нет аккаунта? Оптавьте заявку"}
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link href="#" variant="body2">
                    Забыли пароль?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
        </Container>

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
            severity="error"
            sx={{ width: "100%" }}
          >
            Неверный логин или пароль
          </Alert>
        </Snackbar>
      </Container>
    </ThemeProvider>
  );
}

const mapDispatchToProps = {
  setUser,
};

export default connect(null, mapDispatchToProps)(Entrance);
