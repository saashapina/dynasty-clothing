import "./styles.scss";

export const FormInput = ({
  handleChange,
  isInputAutoCompleted,
  label,
  ...otherInputProps
}) => {
  return (
    <div className="form_input-container">
      <input
        className="form_input"
        onChange={handleChange}
        {...otherInputProps}
      />
      {label ? (
        <label
          className={`${
            otherInputProps.value.length || isInputAutoCompleted ? "shrink" : ""
          } form-input-label`}
        >
          {label.charAt(0).toUpperCase() + label.slice(1)}
        </label>
      ) : null}
    </div>
  );
};
