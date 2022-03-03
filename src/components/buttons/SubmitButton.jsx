import React from "react";

const SubmitButton = (props) => {
  return (
    <button className={props.className} disabled={props.disabled} type="submit">
      {props.Label}
    </button>
  );
};

export default SubmitButton;