import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./store";

import "./App.css";
import ChatListContainerConnected from "./containers/ChatListContainer";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="AppContainer">
          <ChatListContainerConnected key="ChatListContainer" />
        </div>
      </Provider>
    );
  }
}

export default App;
