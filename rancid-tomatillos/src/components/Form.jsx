import React, { Component } from "react";
import './Form.css'


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedMovie: "",
    };
  }
  handleChange = (event) => {
    const currentState = this.state;
    currentState[event.currentTarget.name] = event.currentTarget.value;

    this.setState({ currentState });
    this.props.handleSearch(this.state.searchedMovie);
  };

  render() {
    const { hidden } = this.props;
    return (
      <form className={hidden()}>
        <input
          className="searchInput"
          name="searchedMovie"
          value={this.state.searchedMovie}
          onChange={this.handleChange}
          placeholder="Search Movie"
        />
      </form>
    );
  }
}

export default Form;
