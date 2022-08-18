import {
  Container,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import ComplexItemOne from "./ComplexItemOne";
import ComplexItemTwo from "./ComplexItemTwo";
import ComplexItemThree from "./ComplexItemThree";

function ComplexItems({ meal }) {
  let activePage;

  meal === 0
    ? (activePage = <ComplexItemOne />)
    : meal === 1
    ? (activePage = <ComplexItemTwo />)
    : meal === 2
    ? (activePage = <ComplexItemThree />)
    : false;

  return <>{activePage}</>;
}

export default ComplexItems;
