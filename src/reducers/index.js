import { combineReducers } from "redux";
import speakerReducer from "./SpeakerReducer";

export default combineReducers({
  speakers: speakerReducer
});
