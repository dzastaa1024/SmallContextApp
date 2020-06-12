import React, { Component } from "react";

const Context = React.createContext("english");

// purpose of this file is to create a context object and export it
// the reason why we putting this in the sepearate file is that we can import the context object into only the component that we care about

export class LanguageStore extends Component {
  state = {
    language: "english",
  };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
