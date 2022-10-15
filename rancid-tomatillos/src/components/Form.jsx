import React, { Component } from "react";
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
      <form className={hidden()} style={{ margin: 10 }}>
        <input
          name="searchedMovie"
          value={this.state.searchedMovie}
          onChange={this.handleChange}
          style={{ margin: 10 }}
          placeholder="Search Movie"
        />
      </form>
    );
  }
}

export default Form;
