import "./styles.scss";

export const CustomButton = ({
  children,
  isGoogleSignIn,
  ...otherButtonProps
}) => {
  return (
    <button
      className={`custom_button ${isGoogleSignIn ? "google-sign-in" : ""}`}
      {...otherButtonProps}
    >
      {children}
    </button>
  );
};
