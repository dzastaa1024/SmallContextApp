import React, { Component } from "react";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

export default class Button extends Component {
  // static contextType = LanguageContext;
  // it have to be exatly contextType
  // using keyword static we are adding the property directly to the class itself

  render() {
    // console.log(this.context) => english, because in LanguageContext file we declare english inside in createContext
    // const text = this.context === "english" ? "Submit" : "Voorleggen";
    return (
      <ColorContext.Consumer>
        {(color) => (
          <button className={`ui button ${color}`}>
            {/* one child inside */}
            <LanguageContext.Consumer>
              {(value) => (value === "english" ? "Submit" : "Voorleggen")}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

// it is possible use this as well:
// Button.contextType = LanguageContext;
