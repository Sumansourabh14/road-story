import { useEffect } from "react";

export function useInterval(callback, delay) {
  useEffect(() => {
    if (delay === null) return; // skip if no delay is provided

    const intervalId = setInterval(callback, delay);

    return () => clearInterval(intervalId);
  }, [callback, delay]);
}
