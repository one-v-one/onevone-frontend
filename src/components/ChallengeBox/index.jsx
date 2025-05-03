import React from 'react';

const ChallengeBox = (props) => {
  return (
    <div className={`challenge-box ${props.className}`}>
      <div className='challenge-box-content'>
        <div className='challenge-box-content-img'>
          <img src={props.image} alt='User Image' />
        </div>
        <div className='challenge-user-details'>
          <h5>{props.name}</h5>
          <a href='javascript:;'>{props.email}</a>
        </div>
      </div>
      <button type='button' onClick={props?.onChallenge}  className='challenge-box-btn'>
        Challenge
      </button>
    </div>
  );
};

export default ChallengeBox;
