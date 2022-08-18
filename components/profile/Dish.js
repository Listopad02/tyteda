import {
  Container,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  IconButton,
  Divider,
  Avatar,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import api from "../../utils/api";

const style = {
  box: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  name: {
    paddingLeft: "10px",
    flexGrow: 1,
  },
};

function Dish({ reLoad, setReLoad, dish }) {
  const handleDeleteUser = async (id) => {
    try {
      const res = await api(`/dishes/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) setReLoad(reLoad + 1);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div style={style.box}>
        <div>
          <Avatar src={dish.image} />
        </div>
        <div style={style.name}>{dish.name}</div>
        <div>{dish.price}₽/</div>
        <div>
          {dish.size}
          {dish.size_type === "gram"
            ? "гр."
            : dish.size_type === "milliliters"
            ? "мл."
            : "шт."}
        </div>
        <div>
          <IconButton
            onClick={() => handleDeleteUser(dish.id)}
            component="span"
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
      <Divider light />
    </>
  );
}

export default Dish;

{
  /* <li key={i}>
{dishe.name} {dishe.price} руб.
<IconButton
  key={i}
  onClick={() => handleDeleteUser(dishe.id)}
  component="span"
>
  <DeleteIcon key={i} />
</IconButton>
</li> */
}
