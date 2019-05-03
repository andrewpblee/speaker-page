export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_SPEAKERS":
      return action.payload;
    default:
      return state;
  }
};
