import { SpinnerContainer, SpinnerOverlay } from "./styles";

export const WithSpinner = (WrappedComponent) => {
  return ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
};
