"use client";

import useFetchCars from "@/hooks/useFetchCars";
import SelectableCarsGrid from "../displayData/SelectableCarsGrid";
import LoadingButton from "../buttons/LoadingButton";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { updateSelf } from "@/services/globalApi";
import { useToast } from "@/hooks/use-toast";

const UpdateUserForm = () => {
  const { cars, loading } = useFetchCars();
  const [requestLoading, setRequestLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedCar, setSelectedCar] = useState(null);
  const { user, token } = useSelector((state) => state.auth);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("Please login to update your details");
    }

    setRequestLoading(true);

    const res = await updateSelf(selectedCar, token);
    console.log({ res });

    if (res.status === 200) {
      toast({
        title: "Details updated successfully!",
      });
      // router.push(`/profile`);
    }
    setRequestLoading(false);
  };

  useEffect(() => {
    if (!!user) {
      setSelectedCar(user.carOwned);
    }
  }, [user]);

  return (
    <div className="py-8 space-y-4 mx-auto">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="selectedCar" className="block text-sm font-medium">
            Which car do you own?
          </label>
          <SelectableCarsGrid
            cars={cars}
            selectedCar={selectedCar}
            setSelectedCar={setSelectedCar}
          />
        </div>

        <LoadingButton loading={requestLoading} title="Update" />
      </form>
    </div>
  );
};

export default UpdateUserForm;
