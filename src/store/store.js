import { legacy_createStore as createStore } from "redux";
import DataReducer from "./reducers/DataReducer";

export const myStore = createStore(DataReducer);
