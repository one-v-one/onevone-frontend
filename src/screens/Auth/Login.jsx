import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import loginScreenBg from '../../assets/images/login-screen-bg.png';

import userIcon from '../../assets/images/user-icon.png';
import emailIcon from '../../assets/images/email-icon.png';
import passwordIcon from '../../assets/images/password-icon.png';

import DefaultLayout from '../../components/DefaultLayout';
import GlassBox from '../../components/GlassBox';
import { Link, useNavigate } from 'react-router-dom';
import FullScreenBG from '../../components/FullScreenBG';
import { LoginService } from '../../api/services/Auth';
import { toast } from 'react-toastify';
import CustomModal from '../../components/CustomModal';
import socket from '../../utils/socket';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();
 
  const submitLogin = async () => {
    try {
      setLoading(true);

      if (email !== '' && password !== '') {
        const data = {
          email,
          password,
        };
        const response = await LoginService(data);
        localStorage.setItem("token", response?.token);
        localStorage.setItem("user",JSON.stringify( response?.data));
        socket.emit("storeSocketId",  response?.data?.username);
        navigate("/context-entry");
        setLoading(false);
      } else {
        toast.error('User name and password both required');
        setLoading(false);
      }
    } catch (error) {
      if(error?.response?.data?.error==="Email not verified")
      {
        navigate("/verifyEmail", { state: { email } });
      }
      toast.error(error?.response?.data?.error);
      setLoading(false);
    }
  };


  return loading ? (
    <div className='d-flex flex-column' style={{ minHeight: '100vh' }}>
      <FullScreenBG backgroundImage={loginScreenBg}>
        <h1 className='login-title'>Loading.....</h1>
        <div className='spinner-border text-primary' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </FullScreenBG>
    </div>
  ) : (
    <DefaultLayout>
      <FullScreenBG backgroundImage={loginScreenBg}>
        <div className='col-xxl-5 col-xl-6 col-lg-7 col-md-9'>
          <GlassBox>
            <h2 className='login-title'>Login</h2>
            <form>
              <InputGroup className='mb-md-5 mb-4'>
                <InputGroup.Text>
                  <img src={userIcon} alt='Icon' />
                </InputGroup.Text>
                <Form.Control
                  placeholder='Email'
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </InputGroup>
              <InputGroup className='mb-2'>
                <InputGroup.Text>
                  <img src={passwordIcon} alt='Icon' />
                </InputGroup.Text>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </InputGroup>

              <div className='forget-pass-div d-flex justify-content-between align-items-center mb-4'>
                <div className='d-flex align-items-center'>
                  <input type='checkbox' id='rememberMe' className='me-2' />
                  <label htmlFor='rememberMe' className='text-light'>
                    Remember Me
                  </label>
                </div>

                {/* Forget Password Link */}
                <Link to='/verification' className='forget-password-btn'>
                  Forget Password?
                </Link>
              </div>

              <div className='login-price-div d-flex justify-content-between align-items-center mb-5'>
                <span className='text-white login-price-dollerSign'>$</span>
                <span className='fw-bold text-white login-price'>10.00</span>
                <span></span>
              </div>

              <div className='col-md-12'>
                <button
                  type='button'
                  className='login-btn'
                  onClick={submitLogin}
                >
                  Login
                </button>
              </div>
              <div className='d-flex justify-content-center mt-2 '>

              <span className=' fw-bold text-white login-price'>OR</span>
              </div>
              <div className='forget-pass-div d-flex justify-content-center mt-2 align-items-center mb-4'>
              
                <Link to='/register' className='forget-password-btn'>
                 Register
                </Link>
              </div>
            </form>
          </GlassBox>
        </div>
      </FullScreenBG>

      {/* <CustomModal
        show={showModal}
        close={() => setShowModal(false)}
        action={() => setShowModal(false)}
        heading={`Do You Want to Accept ${challengerName}'s Challenge?`}
      /> */}
    </DefaultLayout>
  );
};

export default Login;
