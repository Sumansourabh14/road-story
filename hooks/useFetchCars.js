"use client";

import { getAllCars } from "@/services/carApi";
import { useEffect, useState } from "react";

const useFetchCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function fetchCars() {
      setLoading(true);
      const res = await getAllCars();

      if (mounted) {
        setCars(res.data.data);
        setLoading(false);
      }
    }

    fetchCars();

    return () => {
      mounted = false;
    };
  }, []);

  return { cars, loading };
};

export default useFetchCars;
