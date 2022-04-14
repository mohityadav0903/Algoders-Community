import React from "react";

const SpinnerButton = (props) => {
  return (
    <button
      style={{ opacity: "0.7" }}
      className={props.spinnerclass}
      type="button"
      disabled={props.disabled}
    >
      <span
        className="spinner-grow spinner-grow-sm"
        role="status"
        aria-hidden="true"
      ></span>{" "}
      Loading...
    </button>
  );
};

export default SpinnerButton;