const initialState = {
  uiState: "IN_PROGRESS",
  error: "",
  curUser: "",
};
const owner = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CURRENT_USER_DATA_IN_PROGRESS":
      return {
        ...state,
        uiState: "IN_PROGRESS",
        error: "",
      };
    case "GET_CURRENT_USER_DATA_SUCCESS":
      return {
        ...state,
        uiState: "SUCCESS",
        error: "",
        curUser: action.payload.curUser,
      };
    case "GET_CURRENT_USER_DATA_FAILED":
      return {
        ...state,
        uiState: "FAILED",
        error: action.payload.err,
      };
    default:
      return {
        ...state,
      };
  }
};
export default owner;
