import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    rating: 0,
    sadImage: "",
    happyImage: ""
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      console.log("state", this.state.name);
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.submitHandler(this.state);
    this.setState({
      name: "",
      sadImage: "",
      happyImage: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={this.state.name}
          onChange={this.changeHandler}
        />
        <input
          type="text"
          name="sadImage"
          placeholder="sadImage"
          value={this.state.sadImage}
          onChange={this.changeHandler}
        />
        <input
          type="text"
          name="happyImage"
          placeholder="happyImage"
          value={this.state.happyImage}
          onChange={this.changeHandler}
        />
        <button>Add Rapper</button>
      </form>
    );
  }
}

export default Form;
