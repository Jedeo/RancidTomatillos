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

    this.setState(()=> {return {currentState} });

    this.props.handleSearch(this.state.searchedMovie);
  };

  render() {
    const {filterMessage} = this.props
    return (
      <form className="form-Content">
        <input
          className="searchInput"
          name="searchedMovie"
          value={this.state.searchedMovie}
          onChange={this.handleChange}
          placeholder="Search Movie"
        />
        {filterMessage.length !== 0 && <p>{filterMessage}</p>}
      </form>
    );
  }
}

export default Form;
