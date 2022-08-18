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
} from "@mui/material";
import { useState } from "react";
import NoPhotographyIcon from "@mui/icons-material/NoPhotography";

import api from "../../utils/api";
import CompanyMore from "./CompanyMore";
import { useEffect } from "react";

const style = {
  card: {
    textAlign: "center",
    borderRadius: "15px",
    background: "#F8F8F8",
    color: "#8A8A8A",
    padding: "15px",
  },
};

function Company({ company, reLoad, setReLoad }) {
  const handleDelCom = async () => {
    try {
      await api(`/companies/${company.id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      setReLoad(reLoad + 1);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Grid item xs={12} md={6}>
      <Box sx={{ boxShadow: 2 }} style={style.card}>
        <div>
          {company.image !== null ? (
            <img
              key={company.id}
              width="200px"
              src={company.image}
              alt="logo company"
            />
          ) : (
            <NoPhotographyIcon
              key={company.id}
              style={{ width: "200px", height: "200px" }}
            />
          )}
        </div>
        <div>{company.name}</div>
        <div>Кол-во заказов: {company.orders.length}</div>
        <div>Кол-во сотрудников: {company.users.length}</div>
        <CompanyMore
          companyId={company.id}
          reLoad={reLoad}
          setReLoad={setReLoad}
        />
        <Button onClick={handleDelCom}>Удалить компанию</Button>
      </Box>
    </Grid>
  );
}

export default Company;
