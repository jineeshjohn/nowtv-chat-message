import React, { Fragment } from "react";
import { PropTypes } from "prop-types";
import "./style.css";
import ChatMessage from "./ChatMessage";

const ChatList = ({ chatMessage }) => {
  if (chatMessage.length === 0) {
    return <div>Failed to load api</div>; // failure case
  }
  const list = chatMessage.map(chat => (
    <ChatMessage key={chat.messageId} {...chat} />
  ));
  return (
    <Fragment>
      <div className="messages">{list}</div>
    </Fragment>
  );
};

ChatList.propTypes = {
  chatMessage: PropTypes.arrayOf(
    PropTypes.shape({
      messageId: PropTypes.string,
      userId: PropTypes.string,
      fullName: PropTypes.string,
      timestamp: PropTypes.string,
      email: PropTypes.string,
      message: PropTypes.string,
      avatar: PropTypes.string
    })
  )
};

ChatMessage.defaultProps = {
  chatMessage: []
};

export default ChatList;
