import logo from "./logo.svg";
import "./App.css";
import Heading from "./Heading.js";

function HelloWorld() {
  return <h1>Hello world</h1>;
}

function App() {
  return (
    <>
      <HelloWorld />
      <Heading />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
