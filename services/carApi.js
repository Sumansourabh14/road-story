import axios from "axios";

export const getCar = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_CAARS_API_URL}/api/v1/cars/single/${id}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getAllCars = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_CAARS_API_URL}/api/v1/cars/all`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
