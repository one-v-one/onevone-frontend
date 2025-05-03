import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import loginScreenBg from "../../assets/images/login-screen-bg.png";

import userIcon from "../../assets/images/user-icon.png";
import emailIcon from "../../assets/images/email-icon.png";
import passwordIcon from "../../assets/images/password-icon.png";

import DefaultLayout from "../../components/DefaultLayout";
import GlassBox from "../../components/GlassBox";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FullScreenBG from "../../components/FullScreenBG";
import { toast } from "react-toastify";
import { ResetPasswordService, VerifyEmailService } from "../../api/services/Auth";

const VerificationEmail = (props) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");
  const { email } = location.state || {}; // Email passed via state
  const navigate = useNavigate();
const SendVerificationEmail = async () => {
    try {
      setLoading(true);

      if (email !== "") {
     
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
      console.log(error)
      toast.error(error?.response?.data?.error);
      setLoading(false);
    }
  };
  const submitVerify = async () => {
    try {
      setLoading(true);

      if (code !== "") {
        const data = {
          code,
          email,
        };
        const response = await VerifyEmailService(data);
        navigate("/",);
        toast.success(response?.message);
        setLoading(false);
      } else {
        toast.error("Code is required");
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
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <img src={passwordIcon} alt="Icon" />
                </InputGroup.Text>
                <Form.Control
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                  }}
                  maxLength={6}
                  type="password"
                  placeholder="Code"
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
                <button type="button" 
                onClick={submitVerify}
                className="login-btn">
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

export default VerificationEmail;
