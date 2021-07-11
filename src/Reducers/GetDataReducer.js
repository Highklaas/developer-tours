import { actionTypes } from "../Actions";

const getDataReducer = (products = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA:
      return action.payload;
    default:
      return products;
  }
};

export default getDataReducer;
