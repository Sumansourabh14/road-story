"use client";
import { getUserData } from "@/redux/slices/user";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CheckIfUserLoggedIn = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getUserData(token));
    }
  }, [dispatch, token]);

  return null;
};

export default CheckIfUserLoggedIn;
