import './App.css';
import logo from './imagens/logo.svg';
function App() {
  return (
    <div className='App'>
      <header className='App-heade'>
        <div className='logo'>
          <img src={logo} alt='logo '></img>
          <p><strong>Alura</strong>Books</p>
        </div>
      </header>
    </div>
  );
}

export default App;