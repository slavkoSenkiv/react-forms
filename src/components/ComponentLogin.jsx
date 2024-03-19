import { useState } from 'react';
import Input from './Input';
import {isEmail, isNotEmpty, hasMinLength} from '../util/validation'

export default function ComponentLogin() {
  /* 
  useState approach
  pros: allows to validate input on every key stroke
  + you can validate input on every key stroke
  cons - more code
  user sees warning but still can submit invalid data
  */
  const [enteredData, setEnteredData] = useState({
    email: '',
    password: ''
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  });

  //const emailIsInvalid = didEdit.email && !enteredData.email.includes('@');
  const emailIsInvalid = didEdit.email && !isEmail(enteredData.email) && !isNotEmpty(enteredData.email);
  //const passwordIsInvalid = didEdit.password && enteredData.password.trim() < 6;
  const passwordIsInvalid = didEdit.password && !hasMinLength(enteredData.password, 6);


  function handleSubmit(event) {
    event.preventDefault();
    console.log('sumbmitted');
    console.log(enteredData);
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true
    }));
  }

  function handleChange(identifier, value) {
    setEnteredData((prevValue) => ({
      ...prevValue,
      [identifier]: value
    }));
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false
    }));
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Component Login</h2>

      <div className='control-row'>
        <Input
          label='Email'
          id='email'
          type='email'
          name='email'
          onBlur={() => handleInputBlur('email')}
          onChange={(event) => handleChange('email', event.target.value)}
          value={enteredData.email}
          error={emailIsInvalid && 'Please enter a valid email'}
          />
        <Input
          label='Password'
          id='password'
          type='password'
          name='password'
          onBlur={() => handleInputBlur('password')}
          onChange={(event) => handleChange('password', event.target.value)}
          value={enteredData.password}
          error={passwordIsInvalid && 'Please enter a valid password'}
        />
      </div>

      <p className='form-actions'>
        <button className='button button-flat'>Reset</button>
        <button className='button'>Login</button>
      </p>
    </form>
  );
}
