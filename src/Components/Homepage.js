import React from 'react';
import GoogleLogin from 'react-google-login';
import { selectSignedIn } from '../features/userSlice';
import { useSelector } from 'react-redux';

import '../styling/home.css';

const Homepage = () => {
  const login = (response) => {
    console.log(response);
  }

  const isSignedIn = useSelector(selectSignedIn)
  return (
    <div className="home__page" style={{ display: isSignedIn ? "none" : "" }}>

      {!isSignedIn ? <div className="login__message">
        <h2>📗</h2>
        <h1>A Readers favorite place!</h1>
        <p>
          We provide high quality online resources for reading blogs. Just sign up and start reading some quality blogs.
         </p>
        <GoogleLogin
          clientId="501177146196-8gefmm6qds71jnicd52cr1a3afasma9i.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="login__button"
            >
              Login with Google
            </button>
          )}
          onSuccess={login}
          onFailure={login}
          isSignedIn={true}
          cookiePolicy={"single_host_origin"}
        />
      </div> : ""}
    </div>
  );
};

export default Homepage;
