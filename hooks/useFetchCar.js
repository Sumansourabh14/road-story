"use client";

import { getCar } from "@/services/carApi";
import { useEffect, useState } from "react";

const useFetchCar = (id) => {
  const [car, setCar] = useState([]);
  const [carLoading, setCarLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function fetchCar() {
      if (!id) {
        // Check if id is null or undefined
        setCar({}); //set car to empty array.
        setCarLoading(false);
        return; // Exit early
      }

      setCarLoading(true);
      const res = await getCar(id);

      if (mounted) {
        setCar(res.data.data);
        setCarLoading(false);
      }
    }

    fetchCar();

    return () => {
      mounted = false;
    };
  }, [id]);

  return { car, carLoading };
};

export default useFetchCar;
