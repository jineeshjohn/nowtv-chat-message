import chatMessageReducer, { initialState } from "./reducer";
import { fetchChatMessageSuccess, fetchChatMessageFailure } from "./actions";

describe("chatMessageReducer", () => {
  it("should return state for unknown action", () => {
    const mockState = { test: "testItem" };
    const mockAction = { type: "Mr.watercress", payload: null };
    const result = chatMessageReducer(mockState, mockAction);
    expect(result).toEqual(mockState);
  });

  it("should use initial state if state not provided", () => {
    const mockAction = { type: "Mr.watercress" };
    // eslint-disable-next-line no-undefined
    const result = chatMessageReducer(undefined, mockAction);
    expect(result).toEqual(initialState);
  });

  it("should load chatMessage on FETCH_CHAT_MESSAGE_SUCCESS", () => {
    const chatMessage = [
      { id: 1, content: "watercress" },
      { id: 2, content: "spinach" }
    ];
    const mockAction = fetchChatMessageSuccess(chatMessage);
    const result = chatMessageReducer(initialState, mockAction);
    expect(result.chatMessage).toHaveLength(2);
    expect(result.chatMessage[1].id).toEqual(2);
    expect(result.chatMessage[0].content).toEqual("watercress");
  });

  it("should load status error on FETCH_CHAT_MESSAGE_FAILURE", () => {
    const mockAction = fetchChatMessageFailure(
      "error fetching data from the api"
    );
    const result = chatMessageReducer(initialState, mockAction);
    expect(result.chatMessage).toHaveLength(0);
    expect(result.status.error).toBe("error fetching data from the api");
    expect(result.status.success).toBe(false);
  });
});
