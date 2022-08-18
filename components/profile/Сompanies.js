import { useEffect, useState } from "react";
import { connect } from "react-redux";
import api from "../../utils/api";
import { setCompanies } from "../../redux/action";
import Company from "./Company";
import Loader from "../Loader";
import CreateCompany from "./CreateCompany";
import {
  Container,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  Input,
  Button,
} from "@mui/material";

function Сompanies({ companies, setCompanies }) {
  const [companiesFilter, setCompaniesFilter] = useState(0);
  const [reLoad, setReLoad] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const res = await api("/companies", {
      method: "GET",
      headers: {},
    });
    setCompanies(res.data);
    setCompaniesFilter(res.data);
    setLoading(false);
  }, [setCompanies, reLoad]);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;

    const res = companies.filter((item) => {
      if (item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
        return item;
      }
    });

    setCompaniesFilter(res);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Container sx={{ m: 5 }}>
        <Grid container>
          <Grid item xs={12}>
            <Input onChange={handleChange} placeholder="Поиск"></Input>
            <CreateCompany
              reLoad={reLoad}
              setReLoad={setReLoad}
              setLoading={setLoading}
            />
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ m: 5 }}>
        <Grid container spacing={2} gridTemplateColumns="1fr">
          {companiesFilter.map((company) => {
            return (
              <Company
                reLoad={reLoad}
                setReLoad={setReLoad}
                key={company.id}
                company={company}
              />
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

const mapStateToProps = (state, props) => ({
  companies: state.companies,
});

const mapDispatchToProps = {
  setCompanies,
};

export default connect(mapStateToProps, mapDispatchToProps)(Сompanies);
