"use client";

import CenteredPage from "@/components/customUi/layoutSections/CenteredPage";
import {
  checkIfGeolocationAvailable,
  getCurrentLocation,
} from "@/utils/functions/geolocationFunctions";
import { Loader2, MapPinOff } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";

const Maps = () => {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/maps/LeafletMaps"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  const fetchLocation = async () => {
    try {
      setLoading(true);
      const currentStaticLoc = await checkIfGeolocationAvailable(
        getCurrentLocation
      );
      console.log(currentStaticLoc);
      setLocation(currentStaticLoc);
      setLoading(false);
    } catch (error) {
      console.log({ error });
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  if (loading) {
    return (
      <CenteredPage>
        <div className="flex flex-col gap-4 items-center py-52">
          <Loader2 className="animate-spin" />
          <p className="text-center">Map is loading...</p>
        </div>
      </CenteredPage>
    );
  }

  if (!!errorMessage) {
    return (
      <CenteredPage>
        <div className="flex flex-col gap-4 items-center py-52">
          <MapPinOff className="h-12 w-12" />
          <p className="text-center">
            Unable to retrieve your location: {errorMessage}
          </p>
        </div>
      </CenteredPage>
    );
  }

  return (
    // <CenteredPage>
    !!location && (
      <>
        <Map position={[location.latitude, location.longitude]} />
      </>
    )
    // </CenteredPage>
  );
};

export default Maps;
