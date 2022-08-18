import produce from "immer";

export default produce((draft = {}, action) => {
  const { user, type } = action;

  switch (type) {
    case "setUser": {
      draft = user;
      return draft;
    }
    case "exit": {
      draft = {};
      return draft;
    }
    default: {
      return draft;
    }
  }
});
