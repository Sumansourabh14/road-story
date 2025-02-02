"use client";

import { getAllTripsByUser } from "@/services/globalApi";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useFetchTripsBySelfUser = () => {
  const [trips, setTrips] = useState([]);
  const [tripsLoading, setTripsLoading] = useState(true);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    let mounted = true;

    async function fetchTrips() {
      setTripsLoading(true);
      const res = await getAllTripsByUser(token);

      if (mounted) {
        setTrips(res.data.data);
        setTripsLoading(false);
      }
    }

    fetchTrips();

    return () => {
      mounted = false;
    };
  }, []);

  return { trips, tripsLoading };
};

export default useFetchTripsBySelfUser;
