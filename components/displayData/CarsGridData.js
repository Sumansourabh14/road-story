import CarsGrid from "../grid/CarsGrid";
import CarsSkeletonGrid from "../skeletons/CarsSkeletonGrid";

export default function CarsGridData({ cars, loading }) {
  return loading ? <CarsSkeletonGrid /> : <CarsGrid cars={cars} />;
}
