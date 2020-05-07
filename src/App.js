import React, { Component } from "react";
import { store } from "redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Modules from "./Modules/Modules";
import "./style/App.scss";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Modules />
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
