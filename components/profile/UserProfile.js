import React, { useEffect, useState } from "react";
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
  IconButton,
} from "@mui/material";
import api from "../../utils/api";
import EditIcon from "@mui/icons-material/Edit";

const UserProfile = () => {
  const [values, setValues] = useState({
    name: "",
    password: "",
    oldPassword: "",
    repeatPassword: "",
    fullName: "",
  });
  const [info, setInfo] = useState({});
  const [editName, setEditName] = useState(false);
  const [editLogin, setEditLogin] = useState(false);
  const [reload, setReload] = useState(0);
  useEffect(async () => {
    const res = await api("/profile", {
      method: "GET",
      headers: {},
    });
    setInfo(res.data);
  }, [reload]);

  const handleChangeName = (e) => {
    const target = e.target;
    const value = target.value;
    setValues({ ...values, name: value });
  };
  const handleChangeOldPassword = (e) => {
    const target = e.target;
    const value = target.value;
    setValues({ ...values, oldPassword: value });
  };
  const handleChangeRepeatPassword = (e) => {
    const target = e.target;
    const value = target.value;
    setValues({ ...values, repeatPassword: value });
  };
  const handleChangePassword = (e) => {
    const target = e.target;
    const value = target.value;
    setValues({ ...values, password: value });
  };
  const handleChangeFullName = (e) => {
    const target = e.target;
    const value = target.value;
    setValues({ ...values, fullName: value });
  };
  const handleEditName = () => {
    setEditName(true);
  };
  const handleEditLogin = () => {
    setEditLogin(true);
  };
  console.log(info);

  const handlePostLogin = async () => {
    try {
      await api(`/profile`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: values.name,
          action: "changeUsername",
        }),
      });
      setReload(reload + 1);
      setEditLogin(false);
      setValues({ ...values, name: "" });
    } catch (err) {
      console.log(err);
    }
  };

  const handlePostName = async () => {
    try {
      await api(`/profile`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "changeFullname",
          full_name: values.fullName,
        }),
      });
      setReload(reload + 1);
      setEditName(false);
      setValues({ ...values, fullName: "" });
    } catch (err) {
      console.log(err);
    }
  };
  const [error, setError] = useState(false);
  const handlePostPassword = async () => {
    try {
      if (info.password === info.repeatPassword) {
        setError(false);
        await api(`/profile`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action: "changePassword",
            currentPassword: values.oldPassword,
            password: values.password,
            repeatPassword: values.repeatPassword,
          }),
        });
        info.oldPassword = "";
        setValues({
          ...values,
          oldPassword: "",
          password: "",
          repeatPassword: "",
        });
      } else {
        setError(true);
      }
      setReload(reload + 1);
      setInfo({ ...info, oldPassword: "" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container sx={{ m: 5 }}>
      <Box sx={{ width: { xs: "300px", md: "auto" }, margin: "0 auto" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "start", md: "center" },
            marginBottom: "15px",
          }}
        >
          <Typography sx={{ width: "200px" }}>Имя: {info.full_name}</Typography>
          <>
            <Input
              sx={{ marginLeft: { xs: 0, md: "20px" }, width: "200px" }}
              type="text"
              value={values.fullName}
              onChange={handleChangeFullName}
              placeholder="Введите имя"
            />
            <Button onClick={() => handlePostName()}>Изменить имя</Button>
          </>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "start", md: "center" },
            marginBottom: "15px",
          }}
        >
          <Typography sx={{ width: "200px" }}>
            Логин: {info.username}
          </Typography>
          <>
            <Input
              sx={{ marginLeft: { xs: 0, md: "20px" }, width: "200px" }}
              type="text"
              value={values.username}
              onChange={handleChangeName}
              placeholder="Введите логин"
            />
            <Button onClick={() => handlePostLogin()}>Изменить логин</Button>
          </>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "start", md: "center" },
              margin: " 20px 0 15px 0",
            }}
          >
            <Typography sx={{ width: "200px" }}>Старый пароль:</Typography>
            <Input
              sx={{ marginLeft: { xs: 0, md: "20px" }, width: "200px" }}
              type="text"
              value={values.oldPassword}
              onChange={handleChangeOldPassword}
              placeholder="Старый пароль"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "start", md: "center" },
              margin: " 0 0 15px 0",
            }}
          >
            <Typography sx={{ width: "200px" }}>Новый пароль:</Typography>
            <Input
              sx={{ marginLeft: { xs: 0, md: "20px" }, width: "200px" }}
              type="text"
              value={values.password}
              onChange={handleChangePassword}
              placeholder="Новый пароль"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "start", md: "center" },
            }}
          >
            <Typography sx={{ width: "200px" }}>
              Повторите новый пароль:
            </Typography>
            <Input
              sx={{ marginLeft: { xs: 0, md: "20px" }, width: "200px" }}
              type="text"
              value={values.repeatPassword}
              onChange={handleChangeRepeatPassword}
              placeholder="Повторите новый пароль"
            />
          </Box>
          <Button
            sx={{ margin: "0 0 0 auto" }}
            onClick={() => handlePostPassword()}
          >
            Изменить пароль
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default UserProfile;
