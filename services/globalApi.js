import axios from "axios";

export const uploadVideoDetails = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/video/upload`,
      data
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
