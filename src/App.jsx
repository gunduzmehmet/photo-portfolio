import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import logo from "./logo.svg";
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App" role="main">
      <article className="App-article">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h3>Welcome to React!</h3>
        <Button variant="danger">Danger</Button>{' '}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          

          Learn React
        </a>
      </article>
    </div>
  );
}

export default App;
