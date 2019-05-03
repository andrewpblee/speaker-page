import JsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchSpeakers = () => async dispatch => {
  const response = await JsonPlaceholder.get("/users");
  dispatch({
    type: "FETCH_SPEAKERS",
    payload: response.data
  });
};
