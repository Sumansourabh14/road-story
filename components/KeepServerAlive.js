"use client";
import { useInterval } from "@/hooks/useInterval";
import { backendServerReloader } from "@/utils/functions/backendServerReloader";

const KeepServerAlive = () => {
  useInterval(backendServerReloader, 200000);

  return <></>;
};

export default KeepServerAlive;
