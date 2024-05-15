import { useState, useEffect } from 'react';
import './App.css';
import AppClass from './library/compoents/AppClass';

function App() {

  const [index, setIndex] = useState(0)

  // useEffect(() => {
  //   console.log('fetch')
  //   fetch('http://localhost:3000/get').then(response => response.text()).then(data => {
  //     console.log(data)
  //   })
  // })

  console.log(index)

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          This is first version 0.0.1
        </p>
        <a
          className="App-link"
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Learn React */}
        </a>
        <AppClass />
      </header>
    </div>
  );
}

export default App;






