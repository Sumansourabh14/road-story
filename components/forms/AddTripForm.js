"use client";

import { useState } from "react";
import AddTripDetailsTemplate from "./templates/AddTripDetailsTemplate";
import { useSelector } from "react-redux";
import { createTrip } from "@/services/globalApi";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export default function AddTripForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [isOneWay, setIsOneWay] = useState(false);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [totalKm, setTotalKm] = useState("");
  const [foodStops, setFoodStops] = useState([""]);
  const [notes, setNotes] = useState("");
  const { user, token } = useSelector((state) => state.auth);
  const { toast } = useToast();
  const router = useRouter();

  const handleFoodStopChange = (index, value) => {
    const updatedStops = [...foodStops];
    updatedStops[index] = value;
    setFoodStops(updatedStops);
  };

  const addFoodStop = () => {
    setFoodStops([...foodStops, ""]);
  };

  const removeFoodStop = (index) => {
    setFoodStops(foodStops.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("Please login to create a new discussion thread");
    }

    setLoading(true);

    const payload = {
      source,
      destination,
      isOneWay,
      vehicleData: { brand, model },
      totalKm,
      foodStops,
      notes,
      userId: user._id,
    };

    const res = await createTrip(payload, token);
    console.log({ res });

    if (res.status === 201) {
      toast({
        title: "Trip saved successfully!",
      });
      //   router.push(`/discussions/${res.data.data._id}`);
      router.push(`/trips`);
    }
    setLoading(false);
  };

  return (
    <AddTripDetailsTemplate
      loading={loading}
      error={error}
      handleSubmit={handleSubmit}
      source={source}
      handleSourceChange={(e) => setSource(e.target.value)}
      destination={destination}
      handleDestinationChange={(e) => setDestination(e.target.value)}
      isOneWay={isOneWay}
      handleOneWayChange={setIsOneWay}
      brand={brand}
      handleBrandChange={(e) => setBrand(e.target.value)}
      model={model}
      handleModelChange={(e) => setModel(e.target.value)}
      totalKm={totalKm}
      handleTotalKmChange={(e) => setTotalKm(e.target.value)}
      foodStops={foodStops}
      handleFoodStopChange={handleFoodStopChange}
      addFoodStop={addFoodStop}
      removeFoodStop={removeFoodStop}
      notes={notes}
      handleNotesChange={(e) => setNotes(e.target.value)}
    />
  );
}
