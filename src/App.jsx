import Header from './components/Header.jsx';
import RefLogin from './components/RefLogin.jsx';
import StateLogin from './components/StateLogin.jsx';
import Signup from './components/Signup.jsx';
function App() {
  return (
    <>
      <Header />
      <main>
        <Signup />
        <RefLogin />
        <StateLogin />
      </main>
    </>
  );
}

export default App;
