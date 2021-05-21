import "./styles.scss";
import React from "react";

import { FormInput } from "../FormInput";
import { CustomButton } from "../CustomButton";
import { auth, createUserProfileDocument } from "../../firebase/utils";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: null,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    const { displayName, email, password, confirmPassword } = this.state;

    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      //create a auth user in firebase using email and password
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      // add user to firestore using auth user data, and display name
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
      this.setState({ error: error.message });
    }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign_up">
        <h2 className="sign_up-title">I do not have an account</h2>
        <p>Sign up with your email and password.</p>
        <form className="sign_up-form" onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            label="display name"
            name="displayName"
            required
            type="text"
            value={displayName}
          />
          <FormInput
            handleChange={this.handleChange}
            label="email"
            name="email"
            required
            type="email"
            value={email}
          />
          <FormInput
            handleChange={this.handleChange}
            label="password"
            name="password"
            required
            type="password"
            value={password}
          />
          <FormInput
            handleChange={this.handleChange}
            label="confirm password"
            name="confirmPassword"
            required
            type="password"
            value={confirmPassword}
          />

          {this.state.error ? (
            <div className="sign_up-error">{this.state.error}</div>
          ) : null}
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export { SignUp };
