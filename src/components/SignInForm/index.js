import "./style.scss";
import React from "react";
import { FormInput } from "../FormInput";
import { CustomButton } from "../CustomButton";

import { signInWithGoogle } from "../../firebase/utils";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isInputAutoCompleted: false,
    };
  }

  componentDidMount() {
    //checks for autocompleted background
    let emailStyle = window.getComputedStyle(document.getElementById("email"));
    if (emailStyle && emailStyle.backgroundColor !== "white") {
      this.setState({ isInputAutoCompleted: true });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "", isInputAutoCompleted: false });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign_in_form">
        <h2 className="sign_in-title">I already have an account</h2>
        <p>Sign in with your email and password.</p>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            id="email"
            name="email"
            type="email"
            handleChange={this.handleChange}
            label="Email"
            value={this.state.email}
            required
            isInputAutoCompleted={this.state.isInputAutoCompleted}
          />

          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            label="Password"
            value={this.state.password}
            required
            isInputAutoCompleted={this.state.isInputAutoCompleted}
          />

          <div className="sign_in_form-buttons">
            <CustomButton type="submit">sign in</CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export { SignInForm };
