import { useEffect, useState } from "react";
import { connect } from "react-redux";
import api from "../../utils/api";
import { setMenu } from "../../redux/action";
import Loader from "../Loader";

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
  IconButton,
  Checkbox,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { styled } from "@mui/material/styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "15px",
  p: 4,
  textAlign: "center",
};

const InputPhoto = styled("input")({
  display: "none",
});

function CreateCompany({ menu, setMenuN, reLoad, setReLoad }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [dishesTypesApi, setDishesTypesApi] = useState([]);
  const [company, setCompany] = useState({
    name: "",
    username: "",
    image: "",
    dishesTypes: [],
    full_name: "",
  });

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  useEffect(async () => {
    const resdishes = await api("/dishes/types", {
      method: "GET",
    });
    setDishesTypesApi(resdishes.data);
  }, [setDishesTypesApi]);

  const handleClick = async (event) => {
    try {
      await api("/companies", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: company.name,
          dishesTypes: company.dishesTypes,
          user: {
            username: company.username,
            full_name: company.full_name,
          },
          image: company.image,
        }),
      });
      setReLoad(reLoad + 1);
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeUser = (event) => {
    const target = event.target;
    const value = target.value;
    setCompany({ ...company, username: value });
  };
  const handleChangeUserName = (event) => {
    const target = event.target;
    const value = target.value;
    setCompany({ ...company, full_name: value });
  };

  const handleChangeName = (event) => {
    const target = event.target;
    const value = target.value;
    setCompany({ ...company, name: value });
  };
  const handleChangePhoto = (event) => {
    const target = event.target;
    const file = target.files;
    var reader = new FileReader();
    reader.onloadend = function () {
      const image = reader.result.split(",");
      const photo = document.getElementById("photo");
      photo.innerHTML = " ";
      const img = document.createElement("img");
      img.style.width = "200px";
      img.src = reader.result;

      photo.append(img);
      setCompany({ ...company, image: image[1] });
    };
    reader.readAsDataURL(file[0]);
  };

  const handleCheck = (event) => {
    const containerCheckbox = document.getElementById("allCheckbox");
    const allCheckbox = containerCheckbox.querySelectorAll("input");
    const allCheckboxArr = Array.from(allCheckbox);
    const checked = allCheckboxArr
      .filter((e) => {
        return e.checked;
      })
      .map((elem) => {
        return elem.value;
      });
    setCompany({ ...company, dishesTypes: checked });
  };

  return (
    <>
      <Button onClick={handleOpen}>Добавить компанию</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ mt: 2 }}>
            <div id="photo"></div>
            <label htmlFor="icon-button-file">
              <InputPhoto
                onChange={handleChangePhoto}
                accept="image/*"
                id="icon-button-file"
                type="file"
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
          </Box>
          <Grid
            id="allCheckbox"
            container
            sx={{ mt: 2, display: "flex", flexDirection: "row" }}
          >
            {dishesTypesApi.map((e) => {
              return (
                <Grid item xs={6} md={4} lg={2} sx={{ pl: 1, pr: 1 }}>
                  <Box>
                    <Checkbox onChange={handleCheck} value={e.id} {...label} />
                  </Box>
                  <Box>{e.name}</Box>
                </Grid>
              );
            })}
          </Grid>
          <Box sx={{ mt: 2 }}>
            <Input
              onChange={handleChangeName}
              placeholder="Название компании"
            ></Input>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Input
              onChange={handleChangeUserName}
              placeholder="Имя сотрудника"
            ></Input>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Input onChange={handleChangeUser} placeholder="Логин"></Input>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Button onClick={handleClick}>Добавить</Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default CreateCompany;
