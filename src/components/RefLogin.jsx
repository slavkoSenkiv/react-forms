import { useRef, useState } from 'react';
export default function RefLogin() {
  /* 
  useRef approach 
  pross - less code:
  no handle change function, 
  less code 
  prevents submiting invalide data 
  
  cons - reseting these values in a clean way is a bit harder
  becasue you are discouraged to use refs to manipulate the DOM
  you cant validate input on every key stroke, 
  but you can validate it upon submition
  ref.current = '' would work but not recomended or you should use with care
  and you can endup with more refs
  */
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    const emailIsValid = enteredEmail.includes('@');
    if (!emailIsValid) {
      setEmailIsInvalid(true);
      return;
    }
    console.log('sending http request...');
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Ref Login</h2>

      <div className='control-row'>
        <div className='control no-margin'>
          <label htmlFor='email'>Email</label>
          <input id='email' type='email' name='email' ref={email} />
          <div className='control-error'>
            {emailIsInvalid && <p>Plase enter a valid email address.</p>}
          </div>
        </div>

        <div className='control no-margin'>
          <label htmlFor='password'>Password</label>
          <input id='password' type='password' name='password' ref={password} />
        </div>
      </div>

      <p className='form-actions'>
        <button className='button button-flat'>Reset</button>
        <button className='button'>Login</button>
      </p>
    </form>
  );
}
