import {
  Container,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  Input,
  FormControl,
  Select,
  MenuItem,
  Button,
  Snackbar,
  Alert,
  IconButton,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import Loader from "../Loader";
import api from "../../utils/api";
import DeleteIcon from "@mui/icons-material/Delete";
import company from "./Company";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "15px",
  p: 4,
  height: '60%',
  overflow:'scroll'
};

function CompanyMore({ companyId, reLoad, setReLoad }) {
  const [toast, setToast] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const [input, setInput] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [info, setInfo] = useState({
    name: "",
    users: [],
  });
  const [user, setUser] = useState({
    name: "",
    password: "",
    fullName: "",
  });

  const handleMore = () => {
    setOpen(true);
    getUsers();
  };

  const handleDeleteUser = async (id) => {
    try {
      await api(`/companies/${companyId}/users`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: id,
        }),
      });
      setReLoad(reLoad + 1);
      getUsers();
    } catch (err) {
      setToast(true);
    }
  };

  const handleCreateNewPass = async (id) => {
    try {
      await api(`/companies/${companyId}/changePassword`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: inputValue,
          userId: id,
        }),
      });
      getUsers();
    } catch (err) {
      setToast(true);
    }
    setInput(null);
    setInputValue("");
  };

  const handleInput = (id) => {
    setInput(id);
  };

  const handleClickAddUser = async () => {
    try {
      await api(`/companies/${companyId}/users/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.name,
          password: user.password,
          full_name: user.fullName,
          role: "admin",
        }),
      });
      handleClose2();
      setReLoad(reLoad + 1);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeName = (event) => {
    const target = event.target;
    const value = target.value;
    setUser({ ...user, name: value });
  };

  const handleChangePassword = (event) => {
    const target = event.target;
    const value = target.value;
    setUser({ ...user, password: value });
  };

  const handleChangeFullName = (event) => {
    const target = event.target;
    const value = target.value;
    setUser({ ...user, fullName: value });
  };

  const getUsers = async () => {
    const res = await api(`/companies/${companyId}`, {
      method: "GET",
    });
    const name = res.data.name;
    const users = res.data.users;
    setInfo({ name: name, users: users });
  };
  return (
    <>
      <Button onClick={handleMore}>Сотрудники</Button>
      <Button onClick={() => setOpen2(true)}>Добавить админа</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>Компания: {info.name}</Box>
          <Box>
            Пользователи:
            {info.users.map((user, i) => {
              return (
                <Box key={i} sx={{ display: "flex", flexDirection: "column" }}>
                  <Box sx={{ display: "flex" }}>
                    <p
                      style={{
                        width: "200px",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <span style={{ marginBottom: '5px' }}>Роль: {user.role}</span>
                      <span style={{ marginBottom: '5px' }}>Логин: {user.username}</span>{" "}
                      <span>Имя: {user.full_name}</span>{" "}
                    </p>
                    <Button onClick={() => handleInput(user.id)}>
                      Изменить пароль
                    </Button>
                    <IconButton
                      onClick={() => handleDeleteUser(user.id)}
                      component="span"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                  {user.id === input && (
                    <Box>
                      <Input
                        type="text"
                        sx={{
                          margin: "0 20px 0 0",
                        }}
                        value={inputValue}
                        onChange={(e) => {
                          setInputValue(e.target.value);
                        }}
                      />
                      <Button
                        type="button"
                        onClick={() => handleCreateNewPass(user.id)}
                      >
                        Сохранить
                      </Button>
                    </Box>
                  )}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Modal>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ mt: 2 }}>
            <Input onChange={handleChangeName} placeholder="User" />
          </Box>
          <Box sx={{ mt: 2 }}>
            <Input onChange={handleChangePassword} placeholder="Password" />
          </Box>
          <Box sx={{ mt: 2 }}>
            <Input onChange={handleChangeFullName} placeholder="Name" />
          </Box>
          <Box sx={{ mt: 2 }}>
            <Button onClick={handleClickAddUser}>Добавить</Button>
          </Box>
        </Box>
      </Modal>
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
          severity="info"
          sx={{ width: "100%" }}
        >
          Нельзя удалить главного админа
        </Alert>
      </Snackbar>
    </>
  );
}

export default CompanyMore;
