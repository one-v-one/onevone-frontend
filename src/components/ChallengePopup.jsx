import { Toast } from "bootstrap";
import React from "react";
import { ToastContainer } from "react-toastify";

const ChallengePopup = ({ challengedUser, onClose }) => {
  return (
    <ToastContainer>

    <Toast>
    <Toast.Header>

      <strong className="me-auto">Challenge {challengedUser?.username}</strong>
     
    </Toast.Header>
    <Toast.Body>Waiting for response...</Toast.Body>
  </Toast>
  </ToastContainer> 


  );
};

export default ChallengePopup;