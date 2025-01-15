import axios from "axios";

export const signUp = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/auth/sign-up`,
      data
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export const login = async (data) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/auth/login`,
    data
  );
  return response;
};

export const getSelf = async (token) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/users/self`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};

export const checkUsernameExists = async (username) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/auth/check-username`,
      { username }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

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

export const getAllVideos = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/video/all`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getVideoById = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/video/single/${id}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const createDiscussionThread = async (data, token) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/discussion/create`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export const removeDiscussionThread = async (discussionId, token) => {
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/discussion/delete/${discussionId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export const removeComment = async (commentId, discussionId, token) => {
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/comment/delete/${commentId}/${discussionId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export const createComment = async (data, token) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/comment/create`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getAllCommentsByDiscussionId = async (discussionId) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/comment/all/${discussionId}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getAllDiscussions = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/discussion/all`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getDiscussionById = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/v1/discussion/single/${id}`
    );
    return response;
  } catch (error) {
    console.error(error);
    return error.response;
  }
};
