import React from 'react'
import ReactDOM from 'react-dom/client'
import Container from './components/container.jsx'
import Header from './components/header.jsx'
import Icon from './components/icon.jsx'
import Button from './components/button.jsx'

import './master.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Container size='big' headerSpace={true}>
      <div className='section left'>
        <h2>Hey I'm <h1>Ethan.</h1> What's up?</h2>
        <p>I'm a Graphic Designer and a Front End Web Designer with upwards of 5 years of experience and a passion for anything computer related, if you need a logo made, a website created, or a brand designed, I'm your guy.</p>
        <div className='buttonContainer'>
          <Button color='red' href='https://www.linkedin.com/in/ethan-hazel/'>Hire Me</Button>
          <Button color='gray' href='https://www.google.com'>View Resume</Button>
        </div>
      </div>
      <div className='section right'>
        <img src='./src/assets/face_one.png' />
      </div>
    </Container>
    <Container size='small'>
      <div className='section center'>
        <div>
          <h1>I'm</h1>
          <h2>Flexable</h2>
          <hr />
          <p>I won't deadlock you into just one style, I can create a wide variety of designs to fit your exact needs.</p>
        </div>
      </div>
      <div className='section center'>
        <div>
          <h1>I'm</h1>
          <h2>Stylistic</h2>
          <hr />
          <p>From modern and minimalistic, to retro and funky, I can create a design that fits your brand.</p>
        </div>
      </div>
      <div className='section center'>
        <div>
          <h1>I'm</h1>
          <h2>Defining</h2>
          <hr />
          <p>I can redesign your brand that will make it stand out from the competition.</p>
        </div>
      </div>
    </Container>
    <Container size='big'><h1>yo</h1></Container>
  </React.StrictMode>
)