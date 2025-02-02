"use client";

import { getCar } from "@/services/carApi";
import { useEffect, useState } from "react";

const useFetchCar = (id) => {
  const [car, setCar] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function fetchCar() {
      setLoading(true);
      const res = await getCar(id);

      if (mounted) {
        setCar(res.data.data);
        setLoading(false);
      }
    }

    fetchCar();

    return () => {
      mounted = false;
    };
  }, [id]);

  return { car, loading };
};

export default useFetchCar;
