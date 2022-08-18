import produce from "immer";

export default produce((draft = [], action) => {
  const { orders, type } = action;

  switch (type) {
    case "setOrders": {
      draft = orders;
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
