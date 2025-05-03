import React from 'react';
import logo from '../../assets/images/logo.png';

const GlassBox = (props) => {
  return (
    <div className='glass-box'>
      <div className='logo'>
        <img src={logo} alt='' />
      </div>
      {props.children}
    </div>
  );
};

export default GlassBox;
