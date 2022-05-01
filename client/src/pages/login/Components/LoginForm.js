import './LoginForm.css';
import React, { useState } from 'react';
import ErrorMsg from './ErrorMsg';
import { URL_ACCOUNTS } from './Config.js';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  let navigate = useNavigate();

  const initialState = {
    email: '',
    password: '',
  };

  const [formValues, setFormValues] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState(false);

  const onChangeHandler = (e) => {
    let { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  function isInputEmpty(input) {
    return input === '';
  }

  const pullData = async function () {
    try {
      const res = await fetch(URL_ACCOUNTS);

      if (!res.ok) 
        throw new Error('Error fetching data');

      const data = await res.json();

      return data;
    } catch (err) {
      throw err;
    }
  };

  const checkForCredentials = async (values) => {
    const errors = {};

    if (isInputEmpty(values.email)) 
      errors.email = 'Cannot be empty';

    if (isInputEmpty(values.password)) 
      errors.password = 'Cannot be empty';

    return errors;
  };

  let onClickHandler = async (credentials = formValues) => {
    try {
      const data = await pullData();
      const emails = data.map((account) => account.email);
      const passwords = data.map((account) => account.password);

      if (emails.some((email) => email === credentials.email) && 
          passwords.some((password) => password === credentials.password))
        navigate('/');
      else 
        setErrorMessage(true);
    } catch (err) {
      alert(err);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setFormErrors(await checkForCredentials(formValues));
    onClickHandler();
  };

  return (
    <div>
      <div className='container-form'>
        <div className='form-title'>
          <div className='form-title-text'>
            <span className='form-title-text-dash'>
              &mdash;&mdash;&mdash;&mdash;
            </span>
            <p className='form-title-text-main'>Login</p>
            <span className='form-title-text-dash'>
              &mdash;&mdash;&mdash;&mdash;
            </span>
          </div>
          <p className='form-title-description'>
            Log in to start swapping!
          </p>
        </div>

        <form className='form-register' onSubmit={submitHandler}>

          { errorMessage && 
            <div className='invalid-password'>
              <b>Incorrect password. </b> 
              Please try again or you can <a href="/reset_password">reset your password</a>.
            </div> }

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

          <button 
            className='btn-login'
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
