import React, { useState, useMemo, useEffect } from 'react';
import './App.css';
import SunIcon from './library/compoents/SunIcon';
import MoonIcon from './library/compoents/MoonIcon';

function App() {

  const [index, setIndex] = useState(0)
  const [theme, setTheme] = useState('sun')

  const switchTheme = () => {
    if (theme === 'sun') {
      setTheme('moon')
    }
    if (theme === 'moon') {
      setTheme('sun')
    }
  }

  // useEffect(() => {
  //   console.log('fetch')
  //   fetch('http://localhost:3000/get').then(response => response.text()).then(data => {
  //     console.log(data)
  //   })
  // })

  return (
    <div className={`App ${theme}`}>
      <div className='content'>
        {/* PROFILE */}
        <header className='header'>
          <div className='user'>
            <a href='/' className='link_user'>
              <div className='userinfo'>
                <span className={`avatar ${theme}`}>
                  <img src="/avatar.png"></img>
                </span>
                <div className='names'>
                  <span className={`name ${theme}`}>EKB</span>
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
        <div className='notes'>
          <section>
            <h2>最近</h2>
            <div className='content'>
              <div className='jsx_1 item'>
                <a href=''>文章1
                  <span>2024年5月16日，周一</span>
                </a>
              </div>
              <div className='jsx_2 item'>
                <a>文章2
                  <span>2024年5月16日，周一</span>
                </a>
              </div>
              <div className='jsx_3 item'>
                <a>文章3
                  <span>2024年5月16日，周一</span>
                </a>
              </div>
              <div className='jsx_4 more'>
                <a href='/blog'>......</a>
              </div>
            </div>
          </section>
        </div>
        <span className='notes_span_contacts'></span>
        {/* CONTACTS */}
        <div className='contacts'>
          <div className='between'>
            <div className='socials'>
              <a>EMAIL</a>
              <a>GITHUB</a>
              <a>TWITTER</a>
            </div>
            <div className='light'>
              {theme === 'sun' && (
                <span title='点击切换主题' className='light_span'>
                  <SunIcon setThemeColor={switchTheme}></SunIcon>
                </span>
              )}
              {theme === 'moon' && (
                <span title='点击切换主题' className='light_span' >
                  <MoonIcon setThemeColor={switchTheme}></MoonIcon>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;