import "./styles.scss";
import { SignIn } from "../../components/SignIn";
import { SignUp } from "../../components/SignUp";

export const SignInAndUp = () => {
  return (
    <div className="sign_in_and_up">
      <SignIn />
      <SignUp />
    </div>
  );
};
