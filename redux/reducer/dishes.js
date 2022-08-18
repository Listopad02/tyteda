import produce from "immer";

export default produce((draft = [], action) => {
  const { dishes, type } = action;

  switch (type) {
    case "setDishes": {
      draft = dishes;
      return draft;
    }
    default: {
      return draft;
    }
  }
});