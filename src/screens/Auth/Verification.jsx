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
import { toast } from "react-toastify";
import { ResetPasswordService, VerifyEmailService } from "../../api/services/Auth";

const Verification = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
  
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const SendVerificationEmail = async () => {
    try {
      setLoading(true);

      if (email !== "") {
        if (!isValidEmail(email)) {
          toast.error("Please enter a valid email address.");
          setLoading(false);
          return;
        }
        const data = {
          email,
        };
        const response = await ResetPasswordService(data);
        toast.success(response?.message);

        setLoading(false);
      } else {
        toast.error("Email is required");
        setLoading(false);
      }
    } catch (error) {
      toast.error(error?.response?.data?.error);
      setLoading(false);
    }
  };
    const submitVerify = async () => {
      try {
        setLoading(true);
  
        if (code !== "" & email !=="") {
          if (!isValidEmail(email)) {
            toast.error("Please enter a valid email address.");
            setLoading(false);
            return;
          }
          const data = {
            code,
            email,
          };
          const response = await VerifyEmailService(data);
          navigate("/resetpassword", { state: { email } });
          toast.success(response?.message);
          setLoading(false);
        } else {
          toast.error("Code and Email are required");
          setLoading(false);
        }
      } catch (error) {
        console.log(error)
        toast.error(error?.response?.data?.error);
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
        <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-9">
          <GlassBox>
            <h2 className="login-title">Verification</h2>
            <form>
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
                  maxLength={6}
                  type="password"
                  placeholder="Code"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                  }}
                />
              </InputGroup>
              <div
              onClick={SendVerificationEmail}
                style={{ justifySelf: "end", cursor:"pointer" , color:"white"}}
                className="forget-pass-div d-flex align-self-end  mt-3  mb-4"
              >
                Send Code
              </div>
              <div className="col-md-12">
                <button onClick={submitVerify} type="button" className="login-btn">
                  Verification
                </button>
              </div>
            </form>
          </GlassBox>
        </div>
      </FullScreenBG>
    </DefaultLayout>
  );
};

export default Verification;
