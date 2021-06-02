import "./styles.scss";
import { classMap } from "../../utils/classMap";

export const CustomButton = ({
  children,
  inverted,
  isGoogleSignIn,
  ...otherButtonProps
}) => {
  const classNames = classMap({
    custom_button: true,
    inverted: inverted,
    "google-sign-in": isGoogleSignIn,
  });

  return (
    <button className={classNames} {...otherButtonProps}>
      {children}
    </button>
  );
};
