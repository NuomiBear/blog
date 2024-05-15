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
      <div className='content'>
        {/* PROFILE */}
        <header className="header">
          <div className='user'>
            <a href='/' className='link_user'>
              <div className='userinfo'>
                <span className='avatar'>
                  <img src="/avatar.png"></img>
                </span>
                <div className='names'>
                  <span className='name'>EKB</span>
                  <span className='info'>JavaScript 工程师，学徒。</span>
                </div>
              </div>
            </a>
          </div>
          <div className='link'>
            <a href='/blog'>所有文章</a>
            <a href='/about'>关于我</a>
            <a href='/others'>其他</a>
          </div>
        </header>
        {/* NOTES */}
        <div className='dynamic-content'>
          <section>
            <h2>最近</h2>
            <div className='content'>
              <div className='jsx_1'>
                <a>文章1
                  <span>2024年5月16日</span>
                </a>
              </div>
              <div className='jsx_2'>
                <a>文章2
                  <span>2024年5月16日</span>
                </a>
              </div>
              <div className='jsx_3'>
                <a>文章3
                  <span>2024年5月16日</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

    </div>
  );
}

export default App;