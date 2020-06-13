import React, { Component } from "react";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

export default class Button extends Component {
  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  renderSubmit(language) {
    return language === "english" ? "Submit" : "Voorleggen";
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}
