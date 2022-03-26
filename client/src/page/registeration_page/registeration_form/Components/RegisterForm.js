import "./RegisterForm.css";
import React, { Component } from "react";
import InputField from "./InputField";
import { URL_ACCOUNTS } from "./Config.js";

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validFn: true,
      validLn: true,
      validEmail: true,
      validPw: true,
      validCpw: true,
      validPolicy: true,
    };

    this.fnRef = React.createRef();
    this.lnRef = React.createRef();
    this.emailRef = React.createRef();
    this.pwRef = React.createRef();
    this.cpwRef = React.createRef();
    this.policyRef = React.createRef();

    this.submitHandler = this.submitHandler.bind(this);
  }

  checkValidInput = async function () {
    this.setState({
      validFn: !this.isInputEmpty(this.fnRef.current.value),
      validLn: !this.isInputEmpty(this.lnRef.current.value),
      validEmail: await this.checkEmail(this.emailRef.current.value),
      validPw: this.checkPassword(),
      validCpw: this.checkPassword(),
      validPolicy: this.checkPolicy(),
    });
  };

  allInputValid() {
    const values = Object.values(this.state);
    return values.every((valid) => valid);
  }

  isInputEmpty(input) {
    return input === "";
  }

  getEmails = async function () {
    try {
      const res = await fetch(URL_ACCOUNTS);

      if (!res.ok) throw new Error("Error fetching data");

      const data = await res.json();

      return data;
    } catch (err) {
      throw err;
    }
  };

  checkEmail = async function (email) {
    try {
      const data = await this.getEmails();
      const emails = data.map((entry) => entry.email);

      return !emails.some((em) => em === email) && email !== "";
    } catch (err) {
      alert(err);
    }
  };

  checkPassword() {
    const pw = this.pwRef.current.value;
    const cpw = this.cpwRef.current.value;
    return pw === cpw && pw !== "";
  }

  checkPolicy() {
    return this.policyRef.current.checked;
  }

  postData = async (url, data) => {
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const res = await fetch(url, option);

      if (!res.ok) throw new Error("Error posting data");

      const data = await res.json();

      return data;
    } catch (err) {
      throw err;
    }
  };

  submitHandler = async (e) => {
    e.preventDefault();

    await this.checkValidInput();

    if (!this.allInputValid()) return;

    const emails = await this.getEmails();

    const account = {
      id: emails.length + 1,
      firstName: this.fnRef.current.value,
      lastName: this.lnRef.current.value,
      email: this.emailRef.current.value,
      password: this.pwRef.current.value,
    };

    try {
      const data = await this.postData(URL_ACCOUNTS, account);
      console.log("Account registered");
    } catch (err) {
      alert(err);
    }
  };

  render() {
    return (
      <div>
        <div className="container-form">
          <div className="form-title">
            <div className="form-title-text">
              <span className="form-title-text-dash">
                &mdash;&mdash;&mdash;&mdash;
              </span>
              <p className="form-title-text-main">Register</p>
              <span className="form-title-text-dash">
                &mdash;&mdash;&mdash;&mdash;
              </span>
            </div>
            <p className="form-title-description">
              Create an account and start swapping !
            </p>
          </div>

          <form className="form-register" onSubmit={this.submitHandler}>
            <div className="form-fullname">
              <InputField
                label="First Name"
                className={this.state.validFn ? "" : "input-invalid"}
                id="form-firstname"
                type="text"
                placeholder="First Name"
                refProp={this.fnRef}
                msg={"Cannot be empty"}
                hidden={this.state.validFn}
                requiredProp=""
              />

              <InputField
                label="Last Name"
                className={this.state.validLn ? "" : "input-invalid"}
                id="form-lastname"
                type="text"
                placeholder="Last Name"
                refProp={this.lnRef}
                msg={"Cannot be empty"}
                hidden={this.state.validLn}
                requiredProp=""
              />
            </div>

            <InputField
              label="Email"
              className={this.state.validEmail ? "" : "input-invalid"}
              id="form-email"
              type="email"
              placeholder="me@example.com"
              refProp={this.emailRef}
              msg={"Invalid email"}
              hidden={this.state.validEmail}
              requiredProp=""
            />

            <InputField
              label="Password"
              className={this.state.validPw ? "" : "input-invalid"}
              id="form-password"
              type="password"
              placeholder="password"
              refProp={this.pwRef}
              msg={"Invalid password"}
              hidden={this.state.validPw}
              requiredProp=""
            />

            <InputField
              label="Comfirm Password"
              className={this.state.validCpw ? "" : "input-invalid"}
              id="form-password-comfirm"
              type="password"
              placeholder="Comfirm Password"
              refProp={this.cpwRef}
              msg={"Invalid password"}
              hidden={this.state.validCpw}
              requiredProp=""
            />

            <div
              className={
                "form-policy " + (this.state.validPolicy ? "" : "input-invalid")
              }
            >
              <input
                type="checkbox"
                id="form-policy-agree"
                value="agree"
                ref={this.policyRef}
              />
              <div className="form-policy-text">
                <span>I accept the </span>
                <a href="#">Terms of Use</a>
                <span> & </span>
                <a href="#"> Privacy Policy</a>
              </div>
            </div>

            <button className="btn-submit-form">Register Now</button>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
