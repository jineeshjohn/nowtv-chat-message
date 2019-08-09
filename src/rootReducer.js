import { combineReducers } from "redux";
import chatMessageReducer from "./model/messages/reducer";

export default function createReducer() {
  return combineReducers({
    chatMessageReducer
  });
}
