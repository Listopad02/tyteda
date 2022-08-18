import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import getuser from "./middleware/getuser";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducer";

const enhancer = applyMiddleware(thunk, getuser);

export default createStore(reducer, composeWithDevTools(enhancer));
