import React, { Component } from "react";
import "./style.css";

class AutoCompleteTex extends Component {
  state = {
    suggestions: [],
    text: "",
    showItems: false,
    errors: "",
  };
  onTextChange = e => {
    // getting values using  props
    const items  = this.props.items;
    // sorting onChange value
    const value = e.target.value;
    //  console.log(value)
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, `i`);
      suggestions = items.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value }));
  };
  renderSuggestion() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map(item => (
          <li onClick={() => this.suggestionSelected(item)}>{item}</li>
        ))}
      </ul>
    );
  }

  suggestionSelected = (value) =>
    this.setState(() => ({
      text: value,
      suggestions: [],
      showItems: false,
    }));

  handleSubmit = e => {
    if (this.state.text.length === 0) {
      e.preventDefault();
      this.setState({
        errors: "Please Enter User name"
      });
    } else {
      e.preventDefault();
      this.props.saveUser(this.state.text);
      this.setState({
        text: "",
        suggestions: [],
        errors: "clear",
      });
    }
  };
  handleClear=()=>{
    this.setState({
        text: "",
        suggestions: [],
        errors: "clear",
        id:""

      });
  }

  render() {
    const { text } = this.state;
    return (
      <div className="AutoComleted">
        <p>{this.state.errors}</p>
        <form onSubmit={this.handleSubmit}>
          <input value={text} onChange={this.onTextChange} text="text" />
          {/* <span className={`${this.state.showItems ? 'select-box--arrow-up' : 'select-box--arrow-down'}`}>co</span> */}
        </form>
        {this.renderSuggestion()}
        <div className="button">
          <button className="button_one" onClick={this.handleSubmit}>
            {this.props.Name || "Save" }
          </button>
          <button onClick={this.handleClear} className="button_two">clear</button>
        </div>
      </div>
    );
  }
}

export default AutoCompleteTex;
