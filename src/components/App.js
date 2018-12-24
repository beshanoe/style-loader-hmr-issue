import React from "react";
import { hot } from "react-hot-loader/root";
import Header from "./Header";
import Body from "./Body";

const App = () => (
  <div>
    <Header>Header</Header>
    <Body>Body</Body>
  </div>
);

export default hot(App);
