import React from 'react';
import DefaultLayout from '../../components/DefaultLayout';
import challengeacceptedbg from '../../assets/images/challenge-accepted-bg.png';
import FullScreenBG from '../../components/FullScreenBG';
import MartinCollin from '../../assets/images/Martin-Collin.png';
import GlassBox from '../../components/GlassBox';
import ChallengeAcceptCardContent from '../../components/ChallengeAcceptCardContent';

const Winner = () => {
  return (
    <DefaultLayout>
      <FullScreenBG backgroundImage={challengeacceptedbg}>
        <div className='col-md-6'>
          <GlassBox>
            <h2 className='login-title congrats-text'>Congratulations</h2>
            <div className='for-winning'>
              <p>For Wining</p>
              <h4>18.00</h4>
            </div>
            <div className='row justify-content-center'>
              <div className='col-xxl-7 col-xl-8'>
                <ChallengeAcceptCardContent
                  image={MartinCollin}
                  name='Martin Collin'
                  text='Winner'
                />
              </div>
            </div>
          </GlassBox>
        </div>
      </FullScreenBG>
    </DefaultLayout>
  );
};

export default Winner;
