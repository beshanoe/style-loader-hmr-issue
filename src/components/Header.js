import React from "react";
import Styles from "./Header.css";

export default class extends React.Component {
  render() {
    return <div className={Styles.Header}>{this.props.children}</div>;
  }
}
