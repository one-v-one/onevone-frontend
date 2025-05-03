import React from 'react';

const ChallengeAcceptCardContent = (props) => {
  return (
    <div className='chalenge-accept-card-content'>
      <div className='chalenge-accept-header'>
        <img src={props.image} alt='User Image' />
      </div>
      <div className='chalenge-accept-body'>
        <h4>{props.name}</h4>
        {props.text && <p className='text-winner'>{props.text}</p>}
        {props.price && <p>${props.price}</p>}
      </div>
    </div>
  );
};

export default ChallengeAcceptCardContent;
