import { useEffect, useState } from "react";
import { connect } from "react-redux";
import api from "../../utils/api";
import { setMenu } from "../../redux/action";
import Loader from "../Loader";
import Dishes from "./Dishes";
import { styled } from "@mui/material/styles";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import {
  Container,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  Input,
  Select,
  MenuItem,
  Button,
  Snackbar,
  Alert,
  IconButton,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "15px",
  p: 4,
};

const InputPhoto = styled("input")({
  display: "none",
});

function CreatDishe({ menu, setMenuN }) {
  const [toast, setToast] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [dishe, setDishe] = useState({
    name: "",
    type: null,
    price: null,
    image: "",
    size: null,
    size_type: "",
  });
  const [types, setTypes] = useState([]);

  useEffect(async () => {
    const res = await api("/dishes/types", {
      method: "GET",
    });
    setTypes(res.data);
  }, [setTypes]);

  const handleClick = async (event) => {
    try {
      const res = await api("/dishes", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: dishe.name,
          menu: menu,
          type: dishe.type,
          price: dishe.price,
          image: dishe.image,
          size: dishe.size,
          size_type: dishe.size_type,
        }),
      });
      if (res.status === 200) setToast(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    setDishe({ ...dishe, type: value });
  };

  const handleChangeName = (event) => {
    const target = event.target;
    const value = target.value;
    setDishe({ ...dishe, name: value });
  };

  const handleChangeSize = (event) => {
    const target = event.target;
    const value = target.value;
    setDishe({ ...dishe, size: value });
  };

  const handleChangeType = (event) => {
    const target = event.target;
    const value = target.value;
    setDishe({ ...dishe, size_type: value });
  };

  const handleChangePrice = (event) => {
    const target = event.target;
    const value = target.value;
    setDishe({ ...dishe, price: value });
  };

  if (types.length < 1) return <>Error</>;

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
      setDishe({ ...dishe, image: image[1] });
    };
    reader.readAsDataURL(file[0]);
  };
  return (
    <>
      <Button onClick={handleOpen}>Добавить блюдо</Button>
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
          <Box sx={{ mt: 2 }}>Меню: {menu}</Box>
          <FormControl variant="standard" sx={{ mt: 2, minWidth: 200 }}>
            <Select
              value={dishe.type}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              onChange={handleChange}
            >
              <MenuItem disabled value="">
                <em>Тип блюда</em>
              </MenuItem>
              {types.map((type) => {
                return (
                  <MenuItem key={type.id} value={type.id}>
                    {type.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <Box sx={{ mt: 2 }}>
            <Input onChange={handleChangeName} placeholder="Название"></Input>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Input onChange={handleChangeSize} placeholder="Размер"></Input>
          </Box>
          <Box sx={{ mt: 2 }}>
            <FormControl>
              <RadioGroup
                onChange={handleChangeType}
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="milliliters"
                  control={<Radio />}
                  label="мл"
                />
                <FormControlLabel value="gram" control={<Radio />} label="гр" />
                <FormControlLabel
                  value="pieces"
                  control={<Radio />}
                  label="шт"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Input onChange={handleChangePrice} placeholder="Цена"></Input>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Button onClick={handleClick}>Добавить</Button>
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
          Добавлено
        </Alert>
      </Snackbar>
    </>
  );
}

export default CreatDishe;
