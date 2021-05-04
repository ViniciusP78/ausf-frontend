import { io } from "socket.io-client";

const { REACT_APP_API_URL } = process.env;

export default io(REACT_APP_API_URL as string);