import React, { useEffect, useState } from "react";
import socket from "../utils/socket";

const ConnectionStatus = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    // Listen for connection events
    socket.on("", () => {
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    // Clean up listeners
    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  return (
    <div>
      {/* <p>Connection Status: {isConnected ? "Connected" : "Disconnected"}</p> */}
    </div>
  );
};

export default ConnectionStatus;