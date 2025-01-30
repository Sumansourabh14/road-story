"use client";

import { getAllTrips } from "@/services/globalApi";
import { useEffect, useState } from "react";

const useFetchTrips = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function fetchTrips() {
      setLoading(true);
      const res = await getAllTrips();

      if (mounted) {
        setTrips(res.data.data);
        setLoading(false);
      }
    }

    fetchTrips();

    return () => {
      mounted = false;
    };
  }, []);

  return { trips, loading };
};

export default useFetchTrips;
