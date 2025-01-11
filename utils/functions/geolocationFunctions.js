import { socket } from "../socket-io/socket";

export const checkIfGeolocationAvailable = async (callback) => {
  if ("geolocation" in navigator) {
    return await callback();
  } else {
    console.log("Geolocation IS NOT available");
  }
};

const errorCallback = (error) => {
  console.log(`Unable to retrieve your location: ${error}`);
  return;
};

export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position.coords);
      },
      (error) => {
        reject(error);
        errorCallback(error.message);
      }
    );
  });
};

export const watchLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.watchPosition(
      (position) => {
        resolve(position.coords);
        const { latitude, longitude } = position.coords;
        socket.emit("send-location", { latitude, longitude });
      },
      (error) => {
        reject(error);
        errorCallback(error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
      }
    );
  });
};
