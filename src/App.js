import React from 'react';
import './App.css';
import './product.css';
// import { coffee } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
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
          <p className="lead">I work with React, React-Native, Node, Express, Firebase and SQL/NoSQL.<br/>Scroll down to see what I've been up to.</p>
          {/* <p className="lead">Below are some of my projects built with<br/>React, React-Native, Node, Express, Firebase.</p> */}
          {/* <p className="lead">I specialize in React and React-Native in the front, Node and Firebase in the back.<br/>To see what i have been up to scroll down.</p> */}
          {/* <p className="lead">Full stack developer since 2016. My currecnt focus is React and React-Native :: Node and Firebase</p> */}
          <br/>
          <br/>
          <div>
            <a href="https://github.com/jseyfert" target="_blank" rel="noopener noreferrer" style={{marginRight: '33px', color: '#6c757d'}}>
              <FontAwesomeIcon icon={faGithub} size="2x"/>
            </a>
            <a href="https://www.linkedin.com/in/johnseyfert/" target="_blank" rel="noopener noreferrer" style={{marginRight: '33px', color: '#6c757d'}}>
              <FontAwesomeIcon icon={faLinkedin} size="2x"/>
            </a>
            <a href="https://www.instagram.com/johnny.montana/" target="_blank" rel="noopener noreferrer" style={{marginRight: '33px', color: '#6c757d'}}>
            <FontAwesomeIcon icon={faInstagram} size="2x"/>
            </a>
            <a href="https://open.spotify.com/user/1232230335?si=nmj9HnOZRRaTkYeRdvleAg" target="_blank" rel="noopener noreferrer" style={{marginRight: '33px', color: '#6c757d'}}>
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
            <h2 className="display-5">Easy Alfred</h2>
            <p className="lead">Designed and built a premium concierge web app with React and Firebase....... ect asdf sadf asdf</p>
            <div>
              <a href="https://app.easyalfred.com/" target="_blank" rel="noopener noreferrer" style={{marginRight: '33px', color: '#6c757d'}}>
                <FontAwesomeIcon icon={faExternalLinkSquareAlt} size="2x"/>
              </a>
              <a href="https://github.com/jseyfert/easyAlfred" target="_blank" rel="noopener noreferrer" style={{marginRight: '33px', color: '#6c757d'}}>
                <FontAwesomeIcon icon={faGithub} size="2x"/>
              </a>
              {/* <a href="https://github.com/jseyfert/fuse-react" target="_blank" rel="noopener noreferrer" style={{marginRight: '33px', color: '#6c757d'}}>
                <FontAwesomeIcon icon={faInfoCircle} size="2x"/>
              </a> */}
            </div>
          </div>
          <div 
          className="bg-light shadow-sm mx-auto" 
          style={{
            width: "90%", 
            height: '300px', 
            borderRadius: '21px 21px 0 0',
            backgroundImage: 'url(/easyAlfred1.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          ></div>
        </div>

        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Gaugr</h2>
            <p className="lead">Regularly contract for this music intelligence app built with React-Naive and Firebase, fixing bugs and extending features.</p>
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
          <div className="my-3 p-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div className="bg-dark shadow-sm mx-auto" style={{width: "90%", height: '300px', borderRadius: '21px 21px 0 0'}}></div>
        </div>
        <div className="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div className="bg-light shadow-sm mx-auto" style={{width: "90%", height: '300px', borderRadius: '21px 21px 0 0'}}></div>
        </div>
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div className="bg-white shadow-sm mx-auto" style={{width: "90%", height: '300px', borderRadius: '21px 21px 0 0'}}></div>
        </div>
        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div className="bg-white shadow-sm mx-auto" style={{width: "90%", height: '300px', borderRadius: '21px 21px 0 0'}}></div>
        </div>
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div className="bg-white shadow-sm mx-auto" style={{width: "90%", height: '300px', borderRadius: '21px 21px 0 0'}}></div>
        </div>
        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">Another headline</h2>
            <p className="lead">And an even wittier subheading.</p>
          </div>
          <div className="bg-white shadow-sm mx-auto" style={{width: "90%", height: '300px', borderRadius: '21px 21px 0 0'}}></div>
        </div>
      </div>

      <footer className="container py-5">
          <copyright>© 2020 | John Seyfert</copyright>
      </footer>
    </div>
  );
}

export default App;
