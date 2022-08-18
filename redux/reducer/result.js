import produce from "immer";

export default produce((draft = [], action) => {
  const { result, type } = action;

  switch (type) {
    case "setResult": {
      draft = result;
      return draft;
    }
    default: {
      return draft;
    }
  }
});