import getChatLog from "./../../service";
import {
  FETCHING_CHAT_MESSAGE,
  FETCH_CHAT_MESSAGE_SUCCESS,
  FETCH_CHAT_MESSAGE_FAILURE
} from "./actionTypes";

export const fetchChatMessage = () => {
  return { type: FETCHING_CHAT_MESSAGE, payload: null };
};
export const fetchChatMessageSuccess = payload => {
  return { type: FETCH_CHAT_MESSAGE_SUCCESS, payload };
};
export const fetchChatMessageFailure = payload => {
  return { type: FETCH_CHAT_MESSAGE_FAILURE, payload };
};

export const fetchChatMessageFromApi = dispatch => {
  dispatch(fetchChatMessage());

  return getChatLog()
    .then(json => {
      dispatch(fetchChatMessageSuccess(json));
    })
    .catch(error => {
      dispatch(fetchChatMessageFailure(error.message));
    });
};
export default fetchChatMessageFromApi;
