import React from 'react';

const FullScreenBG = (props) => {
  return (
    <section
      className='login-screen-page'
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
    >
      <div className='container'>
        <div className='row justify-content-center'>{props.children}</div>
      </div>
    </section>
  );
};

export default FullScreenBG;
