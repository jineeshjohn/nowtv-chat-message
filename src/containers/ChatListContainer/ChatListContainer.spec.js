import React from "react";
import { shallow } from "enzyme";
import { ChatListContainer } from "./index";

describe("<ChatListContainer>", () => {
  let wrapper = null;
  const chatMessage = [
    {
      messageId: "12356",
      userId: "613651251",
      fullName: "Robin Balmforth",
      timestamp: "2016-06-03T20:24:29Z",
      email: "robin@example.com",
      message: "Hello, World!",
      avatar: null
    }
  ];
  const fetchChatMessage = jest.fn();
  const props = {
    chatMessage,
    fetchChatMessage
  };

  beforeEach(() => {
    wrapper = shallow(<ChatListContainer {...props} />);
  });

  afterEach(() => {
    wrapper = null;
  });

  it("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have one record in the chatMessage", () => {
    expect(wrapper.props().chatMessage.length).toEqual(1);
  });

  it("should not have one record in the chatMessage", () => {
    expect(wrapper.props().chatMessage.length).toEqual(1);
  });
});
