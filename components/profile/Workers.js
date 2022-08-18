import {
  Container,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  Button,
  Input,
  IconButton,
} from "@mui/material";
import { useState, useEffect } from "react";
import Loader from "../Loader";
import api from "../../utils/api";
import { connect } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

function Workers({ companyId }) {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [reload, setReload] = useState(0);
  const [pass, setPass] = useState(null);
  const [input, setInput] = useState("");
  const [inputValues, setInputValues] = useState({
    name: "",
    password: "",
    fullName: "",
  });

  const handleChangeName = (e) => {
    const target = e.target;
    const value = target.value;
    setInputValues({ ...inputValues, name: value });
  };
  const handleChangePassword = (e) => {
    const target = e.target;
    const value = target.value;
    setInputValues({ ...inputValues, password: value });
  };
  const handleChangeFullName = (e) => {
    const target = e.target;
    const value = target.value;
    setInputValues({ ...inputValues, fullName: value });
  };
  const handleInput = (id) => {
    setPass(id);
  };
  useEffect(async () => {
    const res = await api(`/companies/${companyId}`, {
      method: "GET",
      headers: {},
    });
    const users = res.data.users.filter((e) => {
      return e.role === "company_user";
    });
    setUsers(users);
    setLoading(false);
  }, [reload]);

  if (loading) return <Loader />;
  const handleAddUser = async () => {
    try {
      await api(`/companies/${companyId}/users/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: inputValues.name,
          password: inputValues.password,
          full_name: inputValues.fullName,
          role: "user",
        }),
      });
      setReload(reload + 1);
    } catch (err) {
      console.log(err);
    }
    setInputValues({
      name: "",
      password: "",
      fullName: "",
    });
  };

  const handleDeleteUser = async (id) => {
    console.log(id);
    try {
      await api(`/companies/${companyId}/users/`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: id,
        }),
      });
      setReload(reload + 1);
    } catch (err) {
      console.log(err);
    }
  };
  const handleEditPasswordUser = async (id) => {
    try {
      await api(`/companies/${companyId}/changePassword`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: input,
          userId: id,
        }),
      });
    } catch (err) {
      console.log(err);
    }
    setInput("");
    setPass(null);
  };
  return (
    <Container sx={{ m: 5 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "200px",
          border: "1px solid #1976d2",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <Input
          sx={{ marginBottom: "10px" }}
          type="text"
          value={inputValues.name}
          name="name"
          onChange={(e) => handleChangeName(e)}
          placeholder="Логин"
        />
        <Input
          sx={{ marginBottom: "10px" }}
          type="text"
          value={inputValues.password}
          name="password"
          onChange={(e) => handleChangePassword(e)}
          placeholder="Пароль"
        />
        <Input
          type="text"
          value={inputValues.fullName}
          name="full_name"
          onChange={(e) => handleChangeFullName(e)}
          placeholder="Имя"
        />
        <Button sx={{ marginTop: "20px" }} onClick={() => handleAddUser()}>
          Сохранить
        </Button>
      </Box>
      <Grid
        grid
        container
        gridTemplateColumns="1fr"
        sx={{
          margin: "30px 0 0 0",
          gap: "15px",
        }}
      >
        {users.map((user) => {
          return (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid #bbbbbb",
                padding: "20px 30px",
                borderRadius: "10px",
                width: "200px",
                overflow: "hidden",
                position: "relative",
                height: "90px",
              }}
            >
              <IconButton
                onClick={() => handleDeleteUser(user.id)}
                component="span"
                sx={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  zIndex: "1",
                }}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                onClick={() => handleInput(user.id)}
                component="span"
                sx={{
                  position: "absolute",
                  right: "10px",
                  top: "45px",
                  zIndex: "1",
                }}
              >
                <EditIcon />
              </IconButton>
              <Typography sx={{ margin: " 0 0 10px 0 " }}>
                Логин: {user.username}
              </Typography>
              <Typography>Имя: {user.full_name}</Typography>
              {user.id === pass && (
                <Box
                  sx={{
                    marginTop: "10px",
                    display: "flex",
                    position: "relative",
                  }}
                >
                  <Input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    name="password"
                    placeholder="Введите пароль"
                    sx={{ width: "150px" }}
                  />
                  <IconButton
                    onClick={() => handleEditPasswordUser(user.id)}
                    component="span"
                    sx={{ position: "absolute", right: "-20px", zIndex: "1" }}
                  >
                    <CheckIcon />
                  </IconButton>
                </Box>
              )}
            </Box>
          );
        })}
      </Grid>
    </Container>
  );
}

const mapStateToProps = (state, props) => ({
  companyId: state.user.companyId,
});

export default connect(mapStateToProps)(Workers);
