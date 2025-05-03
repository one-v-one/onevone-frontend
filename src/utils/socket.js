// utils/socket.js
import { io } from 'socket.io-client';
import { CONSTANTS } from '../Constants';

const socket = io(CONSTANTS.BASE_URL_SOCKET, {
  autoConnect: false, // Prevent automatic connection
});

export default socket;