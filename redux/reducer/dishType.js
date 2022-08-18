import produce from "immer";

export default produce((draft = {}, action) => {
  const { dishType, type } = action;

  switch (type) {
    case "setDishType": {
      draft = dishType;
      return draft;
    }
    default: {
      return draft;
    }
  }
});