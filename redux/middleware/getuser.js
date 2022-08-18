import api from "../../utils/api";

export default (store) => (next) => async (action) => {
  if (Object.keys(store.getState().user).length === 0) {
    const res = await api("/profile", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    });
    store.dispatch({ type: "setUser", user: res.data });
    return next(action);
  }
  next(action);
};
