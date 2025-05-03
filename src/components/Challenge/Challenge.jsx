import React, { useEffect, useState } from 'react';
import axios from 'axios';
import socket from '../../utils/socket';


const Challenge = () => {
  const [challengee, setChallengee] = useState( '' );
  const [challenger, setChallenger] = useState( '' );
  const [isChallenged, setIsChallenged] = useState( false );

  // Connect to Socket.IO when the component mounts
  useEffect( () => {
    socket.connect();

    // Handle challenge received
    socket.on( 'challengeReceived', ( data ) => {
      const { challenger } = data;
      setChallenger( challenger );
      setIsChallenged( true );
    } );

    // Handle redirect to Chess.com
    socket.on( 'redirect', ( data ) => {
      const { url } = data;
      window.location.href = url; // Redirect to Chess.com
    } );

    // Handle challenge rejected
    socket.on( 'challengeRejected', ( data ) => {
      const { challengee } = data;
      alert( `${challengee} has rejected your challenge.` );
    } );

    // Clean up Socket.IO listeners when the component unmounts
    return () => {
      socket.off( 'challengeReceived' );
      socket.off( 'redirect' );
      socket.off( 'challengeRejected' );
      socket.disconnect();
    };
  }, [] );

  // Send a challenge
  //   const handleChallenge = async () => {
  //     try {
  //       const response = await axios.post(
  //         '/api/challenge',
  //         { challenger: 'yourUsername', challengee },
  //         { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
  //       );

  //       console.log('Challenge sent:', response.data);
  //     } catch (err) {
  //       console.error('Error sending challenge:', err.response?.data?.error || err.message);
  //     }
  //   };

  //   // Respond to a challenge
  //   const handleChallengeResponse = (response) => {
  //     socket.emit('challengeResponse', { challenger, challengee: 'yourUsername', response });
  //     setIsChallenged(false); // Reset challenge state
  //   };

  return (
  
        <div>
          <h2>Challenge Another User</h2>
          <input
            type="text"
            placeholder="Enter username to challenge"
            value={challengee}
            onChange={(e) => setChallengee(e.target.value)}
          />
          <button onClick={handleChallenge}>Send Challenge</button>
    
          {isChallenged && (
            <div>
              <p>{challenger} has challenged you!</p>
              <button onClick={() => handleChallengeResponse('accept')}>Accept</button>
              <button onClick={() => handleChallengeResponse('reject')}>Reject</button>
            </div>
          )}
        </div>
  );
};

export default Challenge;