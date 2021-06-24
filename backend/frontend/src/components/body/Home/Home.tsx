import React, { FC } from 'react';
import './Home.css';

import { Link } from 'react-router-dom';

const Home: FC = () => {
  return (
    <div className="Home">
      <h1>
        A Decentralized way of making your files
        <br /> immutable and organized
        <br /> at the same time
      </h1>

      <Link to="/login" className="Home__connect">
        Connect your wallet to start uploading
      </Link>
    </div>
  );
};

export default Home;
