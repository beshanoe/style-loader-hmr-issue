import React from "react";
import Styles from "./Body.css";

export default class extends React.Component {
  render() {
    return (
      <div className={Styles.Body}>
        {this.props.children}
      </div>
    );
  }
}
