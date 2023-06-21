import logo from './logo.svg';
import './App.scss';
import Demo from './Example/Demo';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Tran Hoang Thanh THy
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* Components */}
        <Demo/>

      </header>
    </div>
  );
}

export default App;
