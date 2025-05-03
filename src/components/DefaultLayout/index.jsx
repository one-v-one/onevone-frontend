import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DefaultLayout = (props) => {
  const token = localStorage.getItem("token");
  useEffect(() => {}, [token]);
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {token && (
        <button
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/")
          }}
          type="button"
          style={{
            top: "10px",
            right: "30px",
            position: "absolute",
          }}
          className="challenge-box-btn"
        >
          Sign Out
        </button>
      )}

      {/* <div className='flex-grow-1'>
      </div> */}
      {props.children}
    </div>
  );
};

export default DefaultLayout;
