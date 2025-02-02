"use client";

import { getCar } from "@/services/carApi";
import { useEffect, useState } from "react";

const useFetchCar = (id) => {
  const [car, setCar] = useState([]);
  const [carLoading, setCarLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function fetchCar() {
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
