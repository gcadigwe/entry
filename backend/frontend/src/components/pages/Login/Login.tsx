import React, { FC } from 'react';
import './Login.css';

const Login: FC = () => {
  return (
    <div className="Login">
      <div className="Login__Container">
        <h1>Connect your wallet</h1>
        <button className="Login__Connect">Connect</button>
      </div>
    </div>
  );
};

export default Login;
