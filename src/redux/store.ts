import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/mainReducer";

export const store = createStore(reducers, composeWithDevTools());