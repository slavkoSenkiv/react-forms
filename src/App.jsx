import Header from './components/Header.jsx';
import RefLogin from './components/RefLogin.jsx';
import StateLogin from './components/StateLogin.jsx';
import Signup from './components/Signup.jsx';
import ComponentLogin from './components/ComponentLogin';

function App() {
  return (
    <>
      <Header />
      <main>
        <Signup />
        <ComponentLogin />
        <RefLogin />
        <StateLogin />
      </main>
    </>
  );
}

export default App;
