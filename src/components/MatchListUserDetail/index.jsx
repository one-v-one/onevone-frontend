import React from 'react';

const MatchListUserDetail = (props) => {
  return (
    <div className='match-list-user-details'>
      <div className='match-list-img'>
        <img src={props.image} alt='User Profile' />
      </div>
      <div className='match-list-content'>
        <h4>{props.name}</h4>
        <p
          className={`${
            props.status.toLowerCase() === 'loser' ? 'red-color' : 'green-color'
          }`}
        >
          {props.status}
        </p>
      </div>
    </div>
  );
};

export default MatchListUserDetail;
