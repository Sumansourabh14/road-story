import { io } from "socket.io-client";

const URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

export const socket = io(URL);
