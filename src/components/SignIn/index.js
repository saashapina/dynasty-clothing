import "./style.scss";
import React from "react";
import { FormInput } from "../FormInput";
import { CustomButton } from "../CustomButton";

import { auth, signInWithGoogle } from "../../firebase/utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isInputAutoCompleted: false,
      error: null,
    };
  }

  componentDidMount() {
    //checks for autocompleted background
    //fixes autofill bug: if text is autofilled by browser floating label style isnt applied
    let emailStyle = window.getComputedStyle(document.getElementById("email"));
    if (emailStyle && emailStyle.backgroundColor !== "white") {
      this.setState({ isInputAutoCompleted: true });
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "", isInputAutoCompleted: false });
    } catch (error) {
      console.log(error);
      this.setState({ error: error.message });
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign_in">
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

          {this.state.error ? (
            <div className="sign_in-error">{this.state.error}</div>
          ) : null}

          <div className="sign_in-buttons">
            <CustomButton type="submit">sign in</CustomButton>
            <CustomButton
              isGoogleSignIn
              onClick={signInWithGoogle}
              type="button"
            >
              sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export { SignIn };
