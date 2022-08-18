import produce from "immer";

export default produce((draft = [], action) => {
  const { print, type } = action;

  switch (type) {
    case "setPrint": {
      draft = print;
      return draft;
    }
    default: {
      return draft;
    }
  }
});