import React from "react";
import ErrorMsg from "./ErrorMsg";

class InputField extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.label}</label>

        <input
          className={this.props.className}
          id={this.props.id}
          type={this.props.type}
          placeholder={this.props.placeholder}
          ref={this.props.refProp}
          required={this.props.requiredProp}
        />

        <ErrorMsg msg={this.props.msg} hidden={this.props.hidden} />
      </div>
    );
  }
}

export default InputField;
