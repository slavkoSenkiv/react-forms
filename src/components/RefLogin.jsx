import { useRef } from 'react';
export default function RefLogin() {
  /* 
  useRef approach 
  pross - less code:
  no handle change function, 
  no onChange and onSubmit params
  
  cons - reseting these values in a clean way is a bit harder
  becasue you are discouraged to use refs to manipulate the DOM
  ref.current = '' would work but not recomended or you should use with care
  and you can endup with more refs
  */

  const email = useRef();
  const password = useRef();
  
  function handleSubmit(event) {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    console.log('sumbmitted: ', enteredEmail, enteredPassword);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ref Login</h2>

      <div className='control-row'>
        <div className='control no-margin'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            name='email'
            ref={email}
            />
        </div>

        <div className='control no-margin'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            ref={password}
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
