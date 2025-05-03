import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import loginScreenBg from '../../assets/images/login-screen-bg.png';

import userIcon from '../../assets/images/user-icon.png';
import emailIcon from '../../assets/images/email-icon.png';
import passwordIcon from '../../assets/images/password-icon.png';

import DefaultLayout from '../../components/DefaultLayout';
import GlassBox from '../../components/GlassBox';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import FullScreenBG from '../../components/FullScreenBG';
import { UpdatePasswordService } from '../../api/services/Auth';
import { toast } from 'react-toastify';

const ResetPassword = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const { email } = location.state || {};
  const navigate = useNavigate();

  const submitResetPassword = async () => {
    try {
      setLoading(true);
  
      // Check if password and confirmPassword are not empty
      if (password !== "" && confirmPassword !== "") {
        // Check if both passwords match
        if (password !== confirmPassword) {
          toast.error("Passwords do not match.");
          setLoading(false);
          return; // Stop execution if passwords don't match
        }
  
        // Password strength validation (example: at least 8 characters, 1 number, 1 special character)
        const passwordStrengthRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
        if (!passwordStrengthRegex.test(password)) {
          toast.error("Password must be at least 8 characters long and contain at least one letter, one number, and one special character.");
          setLoading(false);
          return; // Stop execution if the password is not strong enough
        }
  
        // Proceed with the reset if all validations are passed
        const data = {
          email,
          newPassword: password,
        };
  
        const response = await UpdatePasswordService(data); // Call the service to update the password
  
        toast.success(response?.message || "Password updated successfully!");
        navigate("/"); // Navigate to home (or login page, depending on your app flow)
        setLoading(false);
      } else {
        toast.error("Password and confirm password are required.");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.error || "An error occurred while updating the password.");
      setLoading(false);
    }
  };
  
  return loading ? (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <FullScreenBG backgroundImage={loginScreenBg}>
        <h1 className="login-title">Loading.....</h1>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </FullScreenBG>
    </div>
  ) : (
    <DefaultLayout>
      <FullScreenBG backgroundImage={loginScreenBg}>
        <div className='col-xxl-5 col-xl-6 col-lg-7 col-md-9'>
          <GlassBox>
            <h2 className='login-title'>Reset Password</h2>
            <form>
              
            
              <InputGroup className='mb-md-5 mb-4'>
                <InputGroup.Text>
                  <img src={passwordIcon} alt='Icon' />
                </InputGroup.Text>
                <Form.Control 
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type='password' placeholder='New Password' />
              </InputGroup>
              <InputGroup className='mb-2'>
                <InputGroup.Text>
                  <img src={passwordIcon} alt='Icon' />
                </InputGroup.Text>
                <Form.Control 
                 value={confirmPassword}
                 onChange={(e) => {
                   setconfirmPassword(e.target.value);
                 }}
                type='password' placeholder='Confirm Password' />
              </InputGroup>

              <div className='col-md-12  '>
                <button  
                onClick={submitResetPassword}
                type='button' className='login-btn'>
                Update
                </button>
              </div>
            </form>
          </GlassBox>
        </div>
      </FullScreenBG>
    </DefaultLayout>
  );
};

export default ResetPassword;
