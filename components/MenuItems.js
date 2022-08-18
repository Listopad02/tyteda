import {
  Container,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import MenuItemOne from "./MenuItemOne";
import MenuItemOneSmall from "./MenuItemOneSmall";
import MenuItemTwo from "./MenuItemTwo";
import MenuItemTwoSmall from "./MenuItemTwoSmall";
import MenuItemTree from "./MenuItemTree";
import MenuItemTreeSmall from "./MenuItemTreeSmall";
import MenuItemFour from "./MenuItemFour";
import MenuItemFourSmall from "./MenuItemFourSmall";

const style = {
  card: {
    borderRadius: "15px",
    background: "#F8F8F8",
    color: "#8A8A8A",
  },
};

function MenuItems({ meal }) {
  let activePage;
  let activePageSmall;

  if (meal === 0) {
    activePage = <MenuItemOne />;
    activePageSmall = <MenuItemOneSmall />;
  } else if (meal === 1) {
    activePage = <MenuItemTwo />;
    activePageSmall = <MenuItemTwoSmall />;
  } else if (meal === 2) {
    activePage = <MenuItemTree />;
    activePageSmall = <MenuItemTreeSmall />;
  } else if (meal === 3) {
    activePage = <MenuItemFour />;
    activePageSmall = <MenuItemFourSmall />;
  }

  return (
    <Container maxWidth="md">
      <Box
        sx={{ boxShadow: 5, display: { xs: "none", md: "block" } }}
        style={style.card}
      >
        {activePage}
      </Box>
      <Box
        sx={{ boxShadow: 5, display: { xs: "block", md: "none" } }}
        style={style.card}
      >
        {activePageSmall}
      </Box>
    </Container>
  );
}

export default MenuItems;
