import { useState } from "react";
import ProfilePage from "./ProfilePage";
import { useRouter } from "next/router";
import { exit } from "../../redux/action";
import { connect } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Container,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  Button,
  Drawer,
} from "@mui/material";

const style = {
  h1: {
    fontWeight: 800,
    fontSize: "64px",
    lineHeight: "84.52%",
    letterSpacing: "-0.02em",
    color: "#2A2A2A",
    marginBottom: "10px",
  },
  button: {
    padding: "10px",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "84.52%",
    textAlign: "left",
    letterSpacing: "-0.02em",
    color: "white",
    border: "none",
    height: "38px",
    background: "transparent",
  },
  buttonD: {
    padding: "10px",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "84.52%",
    textAlign: "left",
    letterSpacing: "-0.02em",
    color: "white",
    border: "none",
    height: "38px",
    background: "rgb(72,72,72)",
  },
  buttonActive: {
    padding: "10px",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "84.52%",
    textAlign: "left",
    letterSpacing: "-0.02em",
    color: "black",
    border: "none",
    borderRadius: "24.5px",
    width: "100%",
    height: "38px",
    background: "#f4f4f4",
  },
  closeBtn: {
    border: "none",
    outline: "none",
    background: "none",
    color: "#11D028",
    position: "absolute",
    top: "5px",
    right: "5px",
  },
  menu: {
    flexDirection: "column",
    background: "#48484A",
    padding: "20px",
    justifyСontent: " space-around",
  },
};

function Profile({ exit, user }) {
  let nav = [];

  user.role === "manager"
    ? (nav = ["Заказы", "Меню", "Компании", "Статистика", "Отзывы"])
    : user.role === "operator"
    ? (nav = ["Заказы", "Меню"])
    : user.role === "company_admin"
    ? (nav = ["Заказы", "Создать заказ", "Сотрудники"])
    : user.role === "company_user"
    ? (nav = ["Заказы", "Создать заказ", "Профиль"])
    : [];

  const router = useRouter();
  const [page, setPage] = useState("Заказы");
  const [modal, setModal] = useState(false);

  const handleClick = (i, event) => {
    setPage(event.target.innerHTML);
  };

  const handleExit = () => {
    localStorage.clear();
    exit();
    router.push("/");
  };

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: { xs: "20px 0 0 0" },
        }}
      >
        <MenuIcon
          sx={{
            display: { xs: "flex", md: "none" },
            color: "rgb(17, 208, 40)",
            margin: "0 0 -5px 0",
          }}
          onClick={handleModal}
        />
        {
          modal && (
            // <React.Fragment>
            <Drawer
              anchor="left"
              open={open}
              onClose={handleModal}
              style={style.box}
              sx={{ zIndex: "9999" }}
            >
              {/*<Box sx={{ height: '100vh' }}>*/}
              <button onClick={handleModal} style={style.closeBtn}>
                X
              </button>
              <br />
              {nav.map((item, i) => {
                return page === item ? (
                  <button
                    key={item}
                    value={item}
                    onClick={() => handleClick(i, event)}
                    style={style.buttonActive}
                  >
                    {item}
                  </button>
                ) : (
                  <button
                    key={item}
                    value={item}
                    onClick={() => handleClick(i, event)}
                    style={style.buttonD}
                  >
                    {item}
                  </button>
                );
              })}
              {/*</Box>*/}
            </Drawer>
          )
          // </React.Fragment>
        }
        <Button
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={handleExit}
        >
          Выйти
        </Button>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          style={style.menu}
          sx={{
            display: { xs: "none", md: "flex" },
          }}
        >
          {nav.map((item, i) => {
            return page === item ? (
              <button
                key={item}
                value={item}
                onClick={() => handleClick(i, event)}
                style={style.buttonActive}
              >
                {item}
              </button>
            ) : (
              <button
                key={item}
                value={item}
                onClick={() => handleClick(i, event)}
                style={style.button}
              >
                {item}
              </button>
            );
          })}
          <Button onClick={handleExit}>Выйти</Button>
        </Box>

        <ProfilePage modal={modal} setModal={setModal} page={page} />
      </Box>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  exit,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
