import React, { FC } from 'react';
import './How.css';
// import '../../../images/de-box2.png'

const HowItWorks: FC = () => {
  return (
    <div className="HowItWorks">
      <h1>How uploading works on De-Box</h1>
      <img
        src="https://i.ibb.co/f8rSVpb/de-box-2.png"
        className="HowItWorks__content"
      />
    </div>
  );
};

export default HowItWorks;
