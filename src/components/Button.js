import React, { Component } from "react";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

export default class Button extends Component {
  // static contextType = LanguageContext;
  // it have to be exatly contextType
  // using keyword static we are adding the property directly to the class itself

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(language) => this.renderSubmit(language)}
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

// it is possible use this as well:
// Button.contextType = LanguageContext;
