import produce from "immer";

export default produce((draft = [], action) => {
  const { companies, type } = action;

  switch (type) {
    case "setCompanies": {
      draft = companies;
      return draft;
    }
    case "exit": {
      draft = [];
      return draft;
    }
    default: {
      return draft;
    }
  }
});
