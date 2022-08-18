import produce from "immer";

export default produce((draft = [], action) => {
  const { menu, type } = action;

  switch (type) {
    case "setMenu": {
      draft = menu;
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
