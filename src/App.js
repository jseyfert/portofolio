import React from 'react';
import './App.css';
import './product.css';
import { faEnvelope, faExternalLinkSquareAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram, faSpotify, faApple, faAndroid } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <img className="img-thumbnail rounded-circle" src="/avatar3.jpg" style={{height: '30vh', width: '30vh'}} alt="Avatar" />
          <h1 className="display-4 font-weight-normal">John Seyfert</h1>
          <h4 className="display-5">
            <span style={{color: '#6c757d'}}>{'{ '}</span>
            Full Stack Developer
            <span style={{color: '#6c757d'}}>{' }'}</span>
          </h4>
          <br/>
          <p className="lead">React, React-Native, Vue, Laravel, Node/Express, Firebase<br/>Scroll down to see what I've been up to.</p>
          <br/>
          <br/>
          <div>
            <a href="https://github.com/jseyfert" target="_blank" rel="noopener noreferrer" style={{marginRight: '25px', color: '#6c757d'}}>
              <FontAwesomeIcon icon={faGithub} size="2x"/>
            </a>
            <a href="https://www.linkedin.com/in/johnseyfert/" target="_blank" rel="noopener noreferrer" style={{marginRight: '25px', color: '#6c757d'}}>
              <FontAwesomeIcon icon={faLinkedin} size="2x"/>
            </a>
            <a href="https://www.instagram.com/johnny.montana/" target="_blank" rel="noopener noreferrer" style={{marginRight: '25px', color: '#6c757d'}}>
            <FontAwesomeIcon icon={faInstagram} size="2x"/>
            </a>
            <a href="https://open.spotify.com/user/1232230335?si=nmj9HnOZRRaTkYeRdvleAg" target="_blank" rel="noopener noreferrer" style={{marginRight: '25px', color: '#6c757d'}}>
              <FontAwesomeIcon icon={faSpotify} size="2x"/>
            </a>
            <a href="mailto:johnseyfert@gmail.com" target="_blank" rel="noopener noreferrer" style={{marginRight: '25px',color: '#6c757d'}}>
              <FontAwesomeIcon icon={faEnvelope} size="2x"/>
            </a>
            <a href="tel:+1-406-262-3266" style={{color: '#6c757d'}}>
              <FontAwesomeIcon icon={faPhone} size="2x"/>
            </a>
          </div>
        </div>

        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">

        <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">EASY ALFRED</h2>
            <p className="lead">Designed and built a premium concierge web app with a React frontend and a Firebase backend.</p>
            <div>
              <a href="https://app.easyalfred.com/" target="_blank" rel="noopener noreferrer" style={{marginRight: '33px', color: '#fff'}}>
                <FontAwesomeIcon icon={faExternalLinkSquareAlt} size="2x"/>
              </a>
              <a href="https://github.com/jseyfert/easyAlfred" target="_blank" rel="noopener noreferrer" style={{marginRight: '33px', color: '#fff'}}>
                <FontAwesomeIcon icon={faGithub} size="2x"/>
              </a>
            </div>
          </div>
          <div 
          className="bg-light shadow-sm mx-auto" 
          style={{
            width: "90%", 
            height: '300px', 
            borderRadius: '21px 21px 0 0',
            backgroundImage: 'url(/easyAlfred1new.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          ></div>
        </div>

        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">GAUGR</h2>
            <p className="lead">This is a multi platform music intelligence phone app I regularly contract for. It is built in React-Naive with a Firebase backend.</p>
            <div>
              <a href="https://gaugr.com/" target="_blank" rel="noopener noreferrer" style={{marginRight: '33px', color: '#6c757d'}}>
                <FontAwesomeIcon icon={faExternalLinkSquareAlt} size="2x"/>
              </a>
              <a href="https://apps.apple.com/us/app/gaugr/id1323225732" target="_blank" rel="noopener noreferrer" style={{marginRight: '33px', color: '#6c757d'}}>
                <FontAwesomeIcon icon={faApple} size="2x"/>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.gaugr&hl=en_US" target="_blank" rel="noopener noreferrer" style={{marginRight: '33px', color: '#6c757d'}}>
                <FontAwesomeIcon icon={faAndroid} size="2x"/>
              </a>
            </div>
          </div>
          <div className="bg-dark shadow-sm mx-auto gaugrBackground"></div>
        </div>

      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">

      <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">PACIFIC SCREENING</h2>
            <p className="lead">Helped client build a communication portal with a Vue frontend and a Laravel backend.</p>
            <div>
              <a href="https://pacificscreening.com/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '33px', color: '#6c757d' }}>
                <FontAwesomeIcon icon={faExternalLinkSquareAlt} size="2x" />
              </a>
            </div>
          </div>
          <div className="bg-dark shadow-sm mx-auto pacificScreeningBackground"></div>
        </div>
        
        <div className="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">PRICING IQ</h2>
            <p className="lead">Pricing intelligence dashboard - I work on the React frontend of this dash and build data aggregation spiders in python for the backend.</p>
            <div>
              <a href="https://app.pricingiq.io/" target="_blank" rel="noopener noreferrer" style={{marginRight: '33px', color: '#fff'}}>
                <FontAwesomeIcon icon={faExternalLinkSquareAlt} size="2x"/>
              </a>
            </div>
          </div>
          <div 
          className="bg-light shadow-sm mx-auto" 
          style={{
            width: "90%", 
            height: '300px', 
            borderRadius: '21px 21px 0 0',
            backgroundImage: 'url(/piq.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          ></div>
        </div>

      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">STCKY</h2>
            <p className="lead">iPhone app built in React-Native that helps you select the correct glue depending on the substrate.</p>
            <div>
              <a href="https://github.com/jseyfert/STCKY" target="_blank" rel="noopener noreferrer" style={{marginRight: '33px', color: '#fff'}}>
                <FontAwesomeIcon icon={faGithub} size="2x"/>
              </a>
            </div>
          </div>
          <div className="bg-dark shadow-sm mx-auto stckyBackground"></div>
        </div>
        
        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">PRICING IQ IPHONE APP</h2>
            <p className="lead">Amazon price tracking app built in React-Native and Firebase. This app used oAuth and pushNotifications.</p>
            <div>
              <a href="https://github.com/jseyfert/PRICING-IQ-IPHONE-APP" target="_blank" rel="noopener noreferrer" style={{ marginRight: '33px', color: '#6c757d' }}>
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
          </div>
          <div className="bg-dark shadow-sm mx-auto piqIOSBackground"></div>
        </div>


      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        
  
        
        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">SOUTHWEST CHECKIN</h2>
            <p className="lead">This is a project I built for friends and family to automatically check them in for a Southwest flight. It has a Node/Express backend and a React frontend.</p>
            <div>
            <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
              <a href="https://github.com/jseyfert/southwest-checkin" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary" role="button">Github Frontend</a>
              <a href="https://github.com/jseyfert/southwest-check-in-server" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary" role="button">Github Backend</a>
            </div>
            </div>
          </div>
          <div className="bg-dark shadow-sm mx-auto southwestBackground"></div>
        </div>


        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
        </div>


      </div>

      <footer className="container py-5">
          <copyright>© 2020 | John Seyfert</copyright>
      </footer>
    </div>
  );
}

export default App;
