import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Class from './Class';

function App() {

  const [index, setIndex] = useState(0)

  useEffect(() => {
    fetch('http://localhost:3000/get').then(response => response.text()).then(data => {
      console.log(data)
    })
  })

  console.log(index)

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Learn React */}
          <Class className='GUNDAM' />
        </a>
      </header>
    </div>
  );
}

export default App;
