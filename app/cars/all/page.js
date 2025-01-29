"use client";

import CenteredPage from "@/components/customUi/layoutSections/CenteredPage";
import CarsGridData from "@/components/displayData/CarsGridData";
import PageTitle from "@/components/text/PageTitle";
import useFetchCars from "@/hooks/useFetchCars";

const AllCars = () => {
  const { cars, loading } = useFetchCars();

  return (
    <CenteredPage>
      <section className="text-center">
        <PageTitle title="Cars" />
      </section>
      {cars ? (
        <CarsGridData cars={cars} loading={loading} />
      ) : (
        <>
          <p>Loading</p>
        </>
      )}
    </CenteredPage>
  );
};

export default AllCars;
