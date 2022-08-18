import api from "../utils/api";

export const setUser = (user) => ({
   user: user, 
   type: "setUser" 
});
export const exit = () => ({
   type: "exit" 
});
export const setCompanies = (companies) => ({
  companies: companies,
  type: "setCompanies",
});
export const setOrders = (orders) => ({
  orders: orders,
  type: "setOrders",
});
export const setMenu = (menu) => ({
  menu,
  type: "setMenu",
});
export const setSubOrders = (subOrders) => ({
  subOrders,
  type: "setSubOrders",
});
export const addToCart = (productType, addedProduct, productName, productImg) => ({
  productType,
  addedProduct,
  productName,
  productImg,
  type: "addToCart",
});
export const removeItem = (dishTypeID) => ({
  dishTypeID,
  type: "removeItem",
});
export const removeCart = () => ({
  type: "removeCart"
})
export const setDishes = (dishes) => ({
  dishes,
  type: "setDishes",
});
export const setDishType = (dishType) => ({
  dishType,
  type: "setDishType",
});
export const setResult = (result) => ({
  result,
  type: "setResult"
})
export const setPrint = (print) => ({
  print,
  type: "setPrint"
})