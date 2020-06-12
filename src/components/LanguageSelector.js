import React, { Component } from "react";
import LanguageContex from "../context/LanguageContext";

export default class LanguageSelector extends Component {
  static contextType = LanguageContex;
  render() {
    return (
      <div>
        Select language:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="flag nl"
          onClick={() => this.context.onLanguageChange("dutch")}
        />
      </div>
    );
  }
}
