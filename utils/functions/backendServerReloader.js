import axios from "axios";

export const backendServerReloader = async () => {
  try {
    await axios.get(process.env.NEXT_PUBLIC_BACKEND_API_URL);
  } catch (error) {}
};
