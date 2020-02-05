import React from 'react';

import twitterLogo from '../twitter.svg';
import './Login.css';

function Login() {
  return (
    <div className="login-wrapper">
      <img src={twitterLogo} alt="GoTwitter"/>
      <form>
        <input placeholder="Nome de Usuário"></input>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;