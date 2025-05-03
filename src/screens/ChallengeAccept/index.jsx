import React from 'react';
import DefaultLayout from '../../components/DefaultLayout';
import FullScreenBG from '../../components/FullScreenBG';

import challengeacceptedbg from '../../assets/images/challenge-accepted-bg.png';
import JonDoe from '../../assets/images/Jon-Doe.png';
import MartinCollin from '../../assets/images/Martin-Collin.png';
import vsImg from '../../assets/images/vs.png';
import GlassBox from '../../components/GlassBox';
import { Form } from 'react-bootstrap';
import ChallengeAcceptCardContent from '../../components/ChallengeAcceptCardContent';

const ChallengeAccept = () => {
  return (
    <DefaultLayout>
      <FullScreenBG backgroundImage={challengeacceptedbg}>
        <GlassBox>
          <h2 className='login-title'>Challenge Accepted</h2>
          <div className='row justify-content-center align-items-center'>
            <div className='col-xl-3 col-md-4'>
              <div className='chalenge-accept-card'>
                <ChallengeAcceptCardContent
                  image={JonDoe}
                  name='Jon Doe'
                  price={Number(10).toFixed(2)}
                />
                <div className='chalenge-accept-card-footer'>
                  <Form.Control type='text' placeholder='Enter the Room' />
                </div>
              </div>
            </div>
            <div className='col-lg-2 col-md-3'>
              <div className='challenge-win-price'>
                <div className='challenge-win-vs'>
                  <img src={vsImg} alt='image' />
                </div>
                <h4>18.00</h4>
                <p>Wining Price</p>
              </div>
            </div>
            <div className='col-xl-3 col-md-4'>
              <div className='chalenge-accept-card'>
                <ChallengeAcceptCardContent
                  image={MartinCollin}
                  name='Martin Collin'
                  price={Number(10).toFixed(2)}
                />
                <div className='chalenge-accept-card-footer'>
                  <Form.Control type='text' placeholder='Enter the Room' />
                </div>
              </div>
            </div>
          </div>
        </GlassBox>
      </FullScreenBG>
    </DefaultLayout>
  );
};

export default ChallengeAccept;
