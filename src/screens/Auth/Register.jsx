import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import loginScreenBg from "../../assets/images/login-screen-bg.png";

import userIcon from "../../assets/images/user-icon.png";
import emailIcon from "../../assets/images/email-icon.png";
import passwordIcon from "../../assets/images/password-icon.png";

import DefaultLayout from "../../components/DefaultLayout";
import GlassBox from "../../components/GlassBox";
import { Link, useNavigate } from "react-router-dom";
import FullScreenBG from "../../components/FullScreenBG";
import { RegisterService } from "../../api/services/Auth";
import { toast } from "react-toastify";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const submitRegister = async () => {
    try {
      setLoading(true);

      if (username !== "" && password !== "" && email !== "") {
        if (!isValidEmail(email)) {
          toast.error("Please enter a valid email address.");
          setLoading(false);
          return;
        }
        const data = {
          username,
          email,
          password,
        };
        const response = await RegisterService(data);
        navigate("/verifyEmail", { state: { email } });
        toast.success(response?.message||"User registered successfully. Check your email for verification ");

        setLoading(false);
      } else {
        toast.error("All field are required");
        setLoading(false);
      }
    } catch (error) {
      toast.error(error?.response?.data?.error);
      setLoading(false);
    }
  };
  return  loading ? (
    <div className='d-flex flex-column' style={{ minHeight: '100vh' }}>
      <FullScreenBG backgroundImage={loginScreenBg}>
        <h1 className='login-title'>Loading.....</h1>
        <div className='spinner-border text-primary' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </FullScreenBG>
    </div>
  ) :  (
    <DefaultLayout>
      <FullScreenBG backgroundImage={loginScreenBg}>
        <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-9">
          <GlassBox>
            <h2 className="login-title">Register</h2>
            <form>
              <InputGroup className="mb-md-5 mb-4">
                <InputGroup.Text>
                  <img src={userIcon} alt="Icon" />
                </InputGroup.Text>
                <Form.Control
                 value={username}
                 onChange={(e) => {
                   setUsername(e.target.value);
                 }}
                
                placeholder="User Name" />
              </InputGroup>
              <InputGroup className="mb-md-5 mb-4">
                <InputGroup.Text>
                  <img src={emailIcon} alt="Icon" />
                </InputGroup.Text>
                <Form.Control
                 value={email}
                 onChange={(e) => {
                   setEmail(e.target.value);
                 }}
                placeholder="Email Address" />
              </InputGroup>
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <img src={passwordIcon} alt="Icon" />
                </InputGroup.Text>
                <Form.Control 
                 value={password}
                 onChange={(e) => {
                   setPassword(e.target.value);
                 }}
                type="password" placeholder="Password" />
              </InputGroup>

              <div className="col-md-12">
                <button 
                onClick={submitRegister}
                type="button" className="login-btn">
                  Register
                </button>
              </div>
            </form>
          </GlassBox>
        </div>
      </FullScreenBG>
    </DefaultLayout>
  );
};

export default Register;
