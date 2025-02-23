import useFetchCar from "@/hooks/useFetchCar";
import CarCard from "../cards/CarCard";
import CarCardSkeleton from "../skeletons/CarCardSkeleton";

const SingleCarCardData = ({ carId }) => {
  const { car, carLoading } = useFetchCar(carId);

  if (carLoading) {
    return <CarCardSkeleton />;
  }

  return (
    <CarCard
      id={car._id}
      brand={car.brand}
      imgSrc={car.img.url}
      model={car.model}
      price={car.price.ex_showroom}
    />
  );
};

export default SingleCarCardData;
