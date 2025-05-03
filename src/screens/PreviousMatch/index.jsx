// import React, { useState } from 'react';
// import DefaultLayout from '../../components/DefaultLayout';
// import loginScreenBg from "../../assets/images/login-screen-bg.png";

// import contextscreenbg from '../../assets/images/context-screen-bg.png';
// import matchimg1 from '../../assets/images/match-img-1.png';
// import matchimg2 from '../../assets/images/match-img-2.png';
// import matchlistvs from '../../assets/images/match-list-vs.png';
// import GlassBox from '../../components/GlassBox';
// import FullScreenBG from '../../components/FullScreenBG';
// import MatchListUserDetail from '../../components/MatchListUserDetail';

// const matchData = [
//   {
//     id: 1,
//     player1: {
//       name: 'Martin Joel',
//       image: matchimg1,
//       result: 'Loser',
//       color: 'red',
//     },
//     player2: {
//       name: 'Mark James',
//       image: matchimg2,
//       result: 'Winner',
//       color: 'green',
//     },
//     time: '02:00 PM - 01/12/25',
//   },
//   {
//     id: 2,
//     player1: {
//       name: 'Martin Joel',
//       image: matchimg1,
//       result: 'Loser',
//       color: 'red',
//     },
//     player2: {
//       name: 'Mark James',
//       image: matchimg2,
//       result: 'Winner',
//       color: 'green',
//     },
//     time: '02:00 PM - 01/12/25',
//   },
//   {
//     id: 3,
//     player1: {
//       name: 'Martin Joel',
//       image: matchimg1,
//       result: 'Loser',
//       color: 'red',
//     },
//     player2: {
//       name: 'Mark James',
//       image: matchimg2,
//       result: 'Winner',
//       color: 'green',
//     },
//     time: '02:00 PM - 01/12/25',
//   },
//   {
//     id: 4,
//     player1: {
//       name: 'Martin Joel',
//       image: matchimg1,
//       result: 'Loser',
//       color: 'red',
//     },
//     player2: {
//       name: 'Mark James',
//       image: matchimg2,
//       result: 'Winner',
//       color: 'green',
//     },
//     time: '02:00 PM - 01/12/25',
//   },
//   {
//     id: 5,
//     player1: {
//       name: 'Martin Joel',
//       image: matchimg1,
//       result: 'Loser',
//       color: 'red',
//     },
//     player2: {
//       name: 'Mark James',
//       image: matchimg2,
//       result: 'Winner',
//       color: 'green',
//     },
//     time: '02:00 PM - 01/12/25',
//   },
//   {
//     id: 6,
//     player1: {
//       name: 'Martin Joel',
//       image: matchimg1,
//       result: 'Loser',
//       color: 'red',
//     },
//     player2: {
//       name: 'Mark James',
//       image: matchimg2,
//       result: 'Winner',
//       color: 'green',
//     },
//     time: '02:00 PM - 01/12/25',
//   },
//   {
//     id: 7,
//     player1: {
//       name: 'Martin Joel',
//       image: matchimg1,
//       result: 'Loser',
//       color: 'red',
//     },
//     player2: {
//       name: 'Mark James',
//       image: matchimg2,
//       result: 'Winner',
//       color: 'green',
//     },
//     time: '02:00 PM - 01/12/25',
//   },
//   {
//     id: 8,
//     player1: {
//       name: 'Martin Joel',
//       image: matchimg1,
//       result: 'Loser',
//       color: 'red',
//     },
//     player2: {
//       name: 'Mark James',
//       image: matchimg2,
//       result: 'Winner',
//       color: 'green',
//     },
//     time: '02:00 PM - 01/12/25',
//   },
// ];

// const PreviousMatch = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(false);
//   return loading ? (
//     <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
//       <FullScreenBG backgroundImage={loginScreenBg}>
//         <h1 className="login-title">Loading.....</h1>
//         <div className="spinner-border text-primary" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </FullScreenBG>
//     </div>
//   ) : (
//     <DefaultLayout>
//       <FullScreenBG backgroundImage={contextscreenbg}>
//         <div className='col-md-12'>
//           <GlassBox>
//             <h2 className='login-title'>Previous Match</h2>
//             <div className='row justify-content-center'>
//               <div className='col-xxl-12'>
//                 <div className='match-list glass-bg custon-scroll'>
//                   {matchData.map((match, index) => (
//                     <div className='match-list-item' key={index}>
//                       <MatchListUserDetail
//                         image={match.player1.image}
//                         name={match.player1.name}
//                         status={match.player1.result}
//                       />
//                       <div className='match-list-vs'>
//                         <div className='match-list-vs-img'>
//                           <img src={matchlistvs} alt='VS Image' />
//                         </div>
//                         <p>{match.time}</p>
//                       </div>
//                       <MatchListUserDetail
//                         image={match.player2.image}
//                         name={match.player2.name}
//                         status={match.player2.result}
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </GlassBox>
//         </div>
//       </FullScreenBG>
//     </DefaultLayout>
//   );
// };

// export default PreviousMatch;


import React, { useState, useEffect } from 'react';
import DefaultLayout from '../../components/DefaultLayout';
import loginScreenBg from "../../assets/images/login-screen-bg.png";
import contextscreenbg from '../../assets/images/context-screen-bg.png';
import matchlistvs from '../../assets/images/match-list-vs.png';
import GlassBox from '../../components/GlassBox';
import FullScreenBG from '../../components/FullScreenBG';
import MatchListUserDetail from '../../components/MatchListUserDetail';

const PreviousMatch = () => {
  const [matchData, setMatchData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userAvatar, setUserAvatar] = useState("");

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const user = localStorage.getItem("user");
        const userDetail = user ? JSON.parse(user) : null;
        if (!userDetail || !userDetail.username) return;

        const username = userDetail.username;
        let avatar = userDetail.image || "https://www.chess.com/bundles/web/images/noavatar_l.84a92436.gif";
        
        // Fetch profile avatar if missing
        if (!userDetail.image) {
          const profileResponse = await fetch(`https://api.chess.com/pub/player/${username}`);
          const profileData = await profileResponse.json();
          avatar = profileData.avatar || avatar;
        }
        setUserAvatar(avatar);

        // Fetch previous games
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');

        const response = await fetch(`https://api.chess.com/pub/player/${username}/games/${year}/${month}`);
        const data = await response.json();

        if (data.games) {
          const formattedData = data.games.map((game, index) => {
            const whitePlayer = game.white.username;
            const blackPlayer = game.black.username;
            const isCurrentUserWhite = whitePlayer.toLowerCase() === username.toLowerCase();

            const player1 = {
              name: isCurrentUserWhite ? whitePlayer : blackPlayer,
              result: isCurrentUserWhite 
                ? (game.white.result === 'win' ? 'Winner' : 'Loser') 
                : (game.black.result === 'win' ? 'Winner' : 'Loser'),
              image:   avatar ,
              color: (isCurrentUserWhite ? game.white.result : game.black.result) === 'win' ? 'green' : 'red',
            };

            const player2 = {
              name: isCurrentUserWhite ? blackPlayer : whitePlayer,
              result: isCurrentUserWhite 
                ? (game.black.result === 'win' ? 'Winner' : 'Loser') 
                : (game.white.result === 'win' ? 'Winner' : 'Loser'),
              image:   "https://www.chess.com/bundles/web/images/noavatar_l.84a92436.gif" ,
              color: (isCurrentUserWhite ? game.black.result : game.white.result) === 'win' ? 'green' : 'red',
            };

            return {
              id: index + 1,
              player1,
              player2,
              time: new Date(game.end_time * 1000).toLocaleString(),
            };
          });

          setMatchData(formattedData);
        }
      } catch (error) {
        console.error("Error fetching Chess.com games:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  return (
    <DefaultLayout>
      <FullScreenBG backgroundImage={loading ? loginScreenBg : contextscreenbg}>
        {loading ? (
          <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <h1 className="login-title">Loading.....</h1>
            <div className="spinner-border text-primary " style={{alignSelf:"center"}} role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className='col-md-12'>
            <GlassBox>
              <h2 className='login-title'>Previous Matches</h2>
              <div className='row justify-content-center'>
                <div className='col-xxl-12'>
                  {matchData.length === 0 ? (
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "50vh" }}>
                      <h3 className="text-light ">No matches found</h3>
                    </div>
                  ) : (
                    <div className='match-list glass-bg custon-scroll'>
                      {matchData.map((match) => (
                        <div className='match-list-item' key={match.id}>
                          <MatchListUserDetail image={match.player1.image} name={match.player1.name} status={match.player1.result} />
                          <div className='match-list-vs'>
                            <div className='match-list-vs-img'>
                              <img src={matchlistvs} alt='VS' />
                            </div>
                            <p>{match.time}</p>
                          </div>
                          <MatchListUserDetail image={match.player2.image} name={match.player2.name} status={match.player2.result} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </GlassBox>
          </div>
        )}
      </FullScreenBG>
    </DefaultLayout>
  );
};

export default PreviousMatch;
