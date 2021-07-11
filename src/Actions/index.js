import apiLink from "../Api/Link";

export const actionTypes = {
  FETCH_DATA: "FETCH_DATA"
};

export const fetchReqdata = () => async dispatch => {
  const response = await apiLink.get("./products.json");
  dispatch({
    type: actionTypes.FETCH_DATA,
    payload: response.data
  });
};
