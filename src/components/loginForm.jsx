import React, { Component } from "react";

class LoginForm extends Component {
  state = { account: { username: "", password: "" } };

  handleSubmit = e => {
    e.preventDefault();

    // call the server

    console.log("submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div style={{ width: "100%" }}>
        <h1 style={{ textAlign: "center" }}>LOGIN</h1>
        <div className="col-sm-6 offset-sm-3 mt-5">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                value={account.username}
                onChange={this.handleChange}
                name="username"
                id="username"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                value={account.password}
                onChange={this.handleChange}
                name="password"
                id="password"
                type="text"
                className="form-control"
              />
            </div>
            <button className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
