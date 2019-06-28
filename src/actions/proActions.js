import axios from "axios";

const getPro = dispatch => {
  dispatch(getProBegin());
  axios
    .get("../products.json")
    .then(response => dispatch(getProSuccess(response)))
    .catch(error => dispatch(getProError(error)));
};
const getProBegin = () => {
  return {
    type: "getProBegin"
  };
};
const getProSuccess = response => {
  return {
    type: "getProSuccess",
    payload: response.data
  };
};
const getProError = error => {
  return {
    type: "getProError",
    payload: error
  };
};
export default getPro;
