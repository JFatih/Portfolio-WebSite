import { data } from "../../mocks/data";
import { CHANGE_LANGUAGE } from "../action/DataAction";

const initialState = localStorage.getItem("Language")
  ? data[`${JSON.parse(localStorage.getItem("Language"))}`]
  : data[navigator.language];

const DataReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...data[action.payload],
      };
    default:
      return state;
  }
};
export default DataReducer;
