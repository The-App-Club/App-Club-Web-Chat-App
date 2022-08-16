import React, { useContext, useState } from 'react';

import { Context } from '../context';

import { useRouter } from 'next/router';

import axios from 'axios';

const Auth = () => {
  const { username, setUsername, secret, setSecret } = useContext(Context);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  function login() {
    return new Promise(async (resolve, reject) => {
      try {
        const resultInfo = await axios.put(
          'https://api.chatengine.io/users/',
          { username, secret },
          {
            headers: {
              'Private-Key': process.env.NEXT_PUBLIC_CHAT_ENGINE_PRIVATE_KEY,
            },
          }
        );

        resolve(resultInfo);
      } catch (error) {
        reject(error);
      }
    });
  }

  function onSubmit(e) {
    e.preventDefault();

    if (username.length === 1 || secret.length === 1) {
      return;
    }

    (async () => {
      const resultLoginInfo = await login();
      console.log(resultLoginInfo);
      if (resultLoginInfo.status === 200) {
        router.push('/chats');
      } else {
        setErrorMessage('something went wrong...');
      }
    })();
  }

  const ShowErrorMessage = () => {
    if (errorMessage) {
      return <div>{errorMessage}</div>;
    } else {
      return <div></div>;
    }
  };

  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">NextJS Chat</div>

          <div className="input-container">
            <input
              placeholder="Email"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-button">
            Login / Sign Up
          </button>
        </form>

        <ShowErrorMessage />
      </div>
    </div>
  );
};

export default Auth;
