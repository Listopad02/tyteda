import produce from "immer";

export default produce((draft = [], action) => {
  const { subOrders, type } = action;

  switch (type) {
    case "setSubOrders": {
      draft = subOrders;
      return draft;
    }
    default: {
      return draft;
    }
  }
});