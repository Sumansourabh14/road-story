"use client";

import TripCard from "@/components/cards/TripCard";
import CenteredPage from "@/components/customUi/layoutSections/CenteredPage";
import TripsSkeletonGrid from "@/components/skeletons/TripsSkeletonGrid";
import PageTitle from "@/components/text/PageTitle";
import useFetchTrips from "@/hooks/useFetchTrips";

const AllTrips = () => {
  const { trips, loading } = useFetchTrips();

  return (
    <CenteredPage>
      <section className="text-center mb-12">
        <PageTitle title="Trips" />
      </section>
      {loading ? (
        <>
          <TripsSkeletonGrid />
        </>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trips.map((trip, index) => (
            <TripCard key={index} trip={trip} />
          ))}
        </div>
      )}
    </CenteredPage>
  );
};

export default AllTrips;
