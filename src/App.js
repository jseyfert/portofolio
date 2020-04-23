import React from 'react';
import './App.css';
import './product.css';
// import { coffee } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <img className="img-thumbnail rounded-circle" src="/avatar3.jpg" style={{height: '33vh'}} alt="Avatar" />
          <h1 className="display-4 font-weight-normal">John Seyfert</h1>
          <p className="lead font-weight-normal">Full Stack Developer</p>
          
          <div>
            <a href="https://github.com/jseyfert" target="_blank" rel="noopener noreferrer" style={{marginRight: '10px', color: '#6c757d'}}>
              <FontAwesomeIcon icon={faGithub} size="2x"/>
            </a>
            <a href="https://www.linkedin.com/in/johnseyfert/" target="_blank" rel="noopener noreferrer" style={{marginRight: '10px', color: '#6c757d'}}>
              <FontAwesomeIcon icon={faLinkedin} size="2x"/>
            </a>
            <a href="https://www.instagram.com/johnny.montana/" target="_blank" rel="noopener noreferrer" style={{marginRight: '10px', color: '#6c757d'}}>
            <FontAwesomeIcon icon={faInstagram} size="2x"/>
            </a>
            <a href="https://open.spotify.com/user/1232230335?si=nmj9HnOZRRaTkYeRdvleAg" target="_blank" rel="noopener noreferrer" style={{marginRight: '10px', color: '#6c757d'}}>
              <FontAwesomeIcon icon={faSpotify} size="2x"/>
            </a>
            <a href="mailto:johnseyfert@gmail.com" target="_blank" rel="noopener noreferrer" style={{color: '#6c757d'}}>
              <FontAwesomeIcon icon={faEnvelope} size="2x"/>
            </a>
          </div>
        </div>
        

        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div className="bg-light shadow-sm mx-auto" style={{width: "80%", height: '300px', borderRadius: '21px 21px 0 0'}}></div>
        </div>
        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div className="bg-dark shadow-sm mx-auto" style={{width: "80%", height: '300px', borderRadius: '21px 21px 0 0'}}></div>
        </div>
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div className="bg-dark shadow-sm mx-auto" style={{width: "80%", height: '300px', borderRadius: '21px 21px 0 0'}}></div>
        </div>
        <div className="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div className="bg-light shadow-sm mx-auto" style={{width: "80%", height: '300px', borderRadius: '21px 21px 0 0'}}></div>
        </div>
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div className="bg-white shadow-sm mx-auto" style={{width: "80%", height: '300px', borderRadius: '21px 21px 0 0'}}></div>
        </div>
        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div className="bg-white shadow-sm mx-auto" style={{width: "80%", height: '300px', borderRadius: '21px 21px 0 0'}}></div>
        </div>
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div className="bg-white shadow-sm mx-auto" style={{width: "80%", height: '300px', borderRadius: '21px 21px 0 0'}}></div>
        </div>
        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div className="bg-white shadow-sm mx-auto" style={{width: "80%", height: '300px', borderRadius: '21px 21px 0 0'}}></div>
        </div>
      </div>

      <footer className="container py-5">
          <copyright>© 2020 | John Seyfert</copyright>
      </footer>
    </div>
  );
}

export default App;
