import { useState } from 'react';

export default function StateLogin() {
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

  const emailIsInvalid = didEdit.email && !enteredData.email.includes('@');

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
      <h2>State Login</h2>

      <div className='control-row'>
        <div className='control no-margin'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            name='email'
            onBlur={() => handleInputBlur('email')}
            onChange={(event) => handleChange('email', event.target.value)}
            value={enteredData.email}
          />
          <div className='control-error'>
            {emailIsInvalid && <p>Please enter a valid adress</p>}
          </div>
        </div>

        <div className='control no-margin'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            onBlur={() => handleInputBlur('password')}
            onChange={(event) => handleChange('password', event.target.value)}
            value={enteredData.password}
          />
        </div>
      </div>

      <p className='form-actions'>
        <button className='button button-flat'>Reset</button>
        <button className='button'>Login</button>
      </p>
    </form>
  );
}
