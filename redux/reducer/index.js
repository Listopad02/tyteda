import { combineReducers } from "redux";

import user from "./user";
import companies from "./companies";
import orders from "./orders";
import menu from "./menu";
import subOrders from "./subOrders";
import cart from "./cart";
import dishes from "./dishes";
import dishType from "./dishType";
import result from "./result";
import print from "./print";

export default combineReducers({
  user,
  companies,
  orders,
  menu,
  subOrders,
  cart,
  dishes,
  dishType,
  result,
  print
});
