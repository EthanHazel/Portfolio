import React from 'react'
import ReactDOM from 'react-dom/client'
import Container from './components/container.jsx'
import Header from './components/header.jsx'
import Button from './components/button.jsx'
import Face from './components/face.jsx'
import Form from './components/form.jsx'

import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='noise' />
    <Header />
    <Container size='big'>
      <div className='section left'>
        <h2>Hey I'm <h1>Ethan.</h1> What's up?</h2>
        <p>I'm a Graphic Designer and a Front End Web Designer with upwards of 5 years of experience and a passion for anything computer related, if you need a logo made, a website created, or a brand designed, I'm your guy.</p>
        <div className='buttonContainer'>
          <Button color='red' href='https://www.linkedin.com/in/ethan-hazel/' label='Hire Me' />
          <Button color='gray' href='https://www.example.com' label='View Resume' />
        </div>
      </div>
      <div className='section right'>
        <Face source='./assets/face_one.png' />
      </div>
    </Container>
    <Container size='small'>
      <div className='section center'>
        <div>
          <h2>Web</h2>
          <h1>Design</h1>
          <hr />
          <p>Whether it's sleek or classic, I can craft a website that fits your brand's online presence.</p>
        </div>
      </div>
      <div className='section center'>
        <div>
          <h2>Logo</h2>
          <h1>Design</h1>
          <hr />
          <p>From modern and minimalistic, to retro and funky, I can create a logo that fits your brand.</p>
        </div>
      </div>
      <div className='section center'>
        <div>
          <h2>Interface</h2>
          <h1>Design</h1>
          <hr />
          <p>Your user's experience using your product is important, and I will make sure it's a good one.</p>
        </div>
      </div>
    </Container>
    <Container size='big'>
      <div className='section left'>
        <h2>Hey, let's get in <h1>touch!</h1></h2>
        <p>If you are interested in working together or have any questions, get in touch and I will respond as soon as I can.</p>
        <hr />
        <div className='linkContainer'>
          <div className='contactLink'>
            <label htmlFor='email'>E-Mail: </label>
            <a id='email' href='mailto:ethanyvonhazel@gmail.com'>ethanyvonhazel@gmail.com</a>
          </div>
          <div className='contactLink'>
            <label htmlFor='phone'>Phone: </label>
            <a id='phone' className='unavailable'>Currently unavailable</a>
          </div>
        </div>
      </div>
      <div className='section right'>
        <Form />
      </div>
    </Container>
  </React.StrictMode>
)