import {
  FETCH_CHAT_MESSAGE_SUCCESS,
  FETCH_CHAT_MESSAGE_FAILURE
} from "./actionTypes";

export const initialState = {
  chatMessage: [],
  status: {
    success: false,
    error: null
  }
};

const chatMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHAT_MESSAGE_SUCCESS:
      return {
        ...state,
        chatMessage: action.payload,
        status: {
          success: true,
          error: null
        }
      };
    case FETCH_CHAT_MESSAGE_FAILURE:
      return {
        ...state,
        chatMessage: [],
        status: {
          success: false,
          error: action.payload
        }
      };
    default:
      return state;
  }
};

export default chatMessageReducer;
