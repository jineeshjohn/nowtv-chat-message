import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import fetchFromApi from "../../model/messages/actions";
import ChatList from "./../../components/ChatList";

export class ChatListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchChatMessage();
  }
  render() {
    const { chatMessage } = this.props;
    return <ChatList key="ChatList" chatMessage={chatMessage} />;
  }
}

ChatListContainer.propTypes = {
  chatMessage: PropTypes.array,
  status: PropTypes.object,
  fetchChatMessage: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    chatMessage: state.chatMessageReducer.chatMessage,
    status: state.chatMessageReducer.status
  };
};

const mapDispatchToProps = dispatch => ({
  fetchChatMessage: () => fetchFromApi(dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatListContainer);
