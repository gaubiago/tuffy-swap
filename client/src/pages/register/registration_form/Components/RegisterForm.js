import './RegisterForm.css';
import React, { useState, useEffect } from 'react';
import ErrorMsg from './ErrorMsg';
import { URL_ACCOUNTS } from './Config.js';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    policy: false,
  };

  const navigate = useNavigate();

  const [formValues, setFormValues] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const onChangeHandler = (e) => {
    let { name, value } = e.target;
    value = name === 'policy' ? e.target.checked : value;

    setFormValues({ ...formValues, [name]: value });
  };

  const validate = async (values) => {
    const errors = {};

    if (isInputEmpty(values.firstName)) errors.firstName = 'Cannot be empty';
    if (isInputEmpty(values.lastName)) errors.lastName = 'Cannot be empty';

    if (isInputEmpty(values.email)) errors.email = 'Cannot be empty';
    else if (await existingEmail(values.email))
      errors.email = 'Email already exists';

    if (isInputEmpty(values.password)) errors.password = 'Cannot be empty';
    if (isInputEmpty(values.confirmPassword))
      errors.confirmPassword = 'Cannot be empty';

    if (values.password !== values.confirmPassword) {
      errors.password = 'Passwords do not match';
      errors.confirmPassword = 'Passwords do not match';
    }

    if (!values.policy) {
      errors.policy = 'Please agree to these terms';
    }

    return errors;
  };

  function isInputEmpty(input) {
    return input === '';
  }

  const getEmails = async function () {
    try {
      const res = await fetch(URL_ACCOUNTS);

      if (!res.ok) throw new Error('Error fetching data');

      const data = await res.json();

      return data;
    } catch (err) {
      throw err;
    }
  };

  const existingEmail = async function (email) {
    try {
      const data = await getEmails();
      const emails = data.map((entry) => entry.email);

      return emails.some((em) => em === email);
    } catch (err) {
      alert(err);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setFormErrors(await validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length !== 0 || !isSubmit) return;

    let newId;

    (async () => {
      try {
        const res = await fetch(URL_ACCOUNTS);

        if (!res.ok) throw new Error('Error fetching data');

        newId = (await res.json()).length + 1;
      } catch (err) {
        return alert(err);
      }
    })();

    const account = {
      id: newId,
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      password: formValues.password,
    };

    const postData = async (url, data) => {
      const option = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };

      try {
        const res = await fetch(url, option);

        if (!res.ok) throw new Error('Error posting data');

        const data = await res.json();

        return data;
      } catch (err) {
        return alert(err);
      }
    };

    postData(URL_ACCOUNTS, account);
    navigate('/');
  }, [formErrors, isSubmit]);

  return (
    <div>
      <div className='container-form'>
        <div className='form-title'>
          <div className='form-title-text'>
            <span className='form-title-text-dash'>
              &mdash;&mdash;&mdash;&mdash;
            </span>
            <p className='form-title-text-main'>Register</p>
            <span className='form-title-text-dash'>
              &mdash;&mdash;&mdash;&mdash;
            </span>
          </div>
          <p className='form-title-description'>
            Create an account and start swapping !
          </p>
        </div>

        <form className='form-register' onSubmit={submitHandler}>
          <div className='form-fullname'>
            <div>
              <label htmlFor='form-firstname'>First Name</label>
              <input
                className={formErrors.firstName ? 'input-invalid' : ''}
                name='firstName'
                id='form-firstname'
                type='text'
                placeholder='First Name'
                value={formValues.firstName}
                onChange={onChangeHandler}
              />

              <ErrorMsg
                msg={formErrors.firstName}
                hidden={!formErrors.firstName}
              />
            </div>

            <div>
              <label htmlFor='form-lastname'>Last Name</label>
              <input
                className={formErrors.lastName ? 'input-invalid' : ''}
                name='lastName'
                id='form-lastname'
                type='text'
                placeholder='Last Name'
                value={formValues.lastName}
                onChange={onChangeHandler}
              />

              <ErrorMsg
                msg={formErrors.lastName}
                hidden={!formErrors.lastName}
              />
            </div>
          </div>

          <div>
            <label htmlFor='form-email'>Email</label>
            <input
              className={formErrors.email ? 'input-invalid' : ''}
              name='email'
              id='form-email'
              type='email'
              placeholder='me@example.com'
              value={formValues.email}
              onChange={onChangeHandler}
            />

            <ErrorMsg msg={formErrors.email} hidden={!formErrors.email} />
          </div>

          <div>
            <label htmlFor='form-password'>Password</label>
            <input
              className={formErrors.password ? 'input-invalid' : ''}
              name='password'
              id='form-password'
              type='password'
              placeholder='Password'
              value={formValues.password}
              onChange={onChangeHandler}
            />

            <ErrorMsg msg={formErrors.password} hidden={!formErrors.password} />
          </div>

          <div>
            <label htmlFor='form-password-confirm'>Confirm Password</label>
            <input
              className={formErrors.confirmPassword ? 'input-invalid' : ''}
              name='confirmPassword'
              id='form-password-confirm'
              type='password'
              placeholder='confirm Password'
              value={formValues.confirmPassword}
              onChange={onChangeHandler}
            />

            <ErrorMsg
              msg={formErrors.confirmPassword}
              hidden={!formErrors.confirmPassword}
            />
          </div>

          <div
            className={
              'form-policy ' + (formErrors.policy ? 'input-invalid' : '')
            }
          >
            <input
              type='checkbox'
              name='policy'
              id='form-policy-agree'
              value={formValues.policy}
              onChange={onChangeHandler}
            />
            <div className='form-policy-text'>
              <span>I accept the </span>
              <a href='#'>Terms of Use</a>
              <span> & </span>
              <a href='#'> Privacy Policy</a>
            </div>
          </div>

          <button className='btn-submit-form'>Register Now</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
