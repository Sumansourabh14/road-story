import CarsGridPagination from "../grid/CarsGridPagination";
import CarsSkeletonGrid from "../skeletons/CarsSkeletonGrid";

export default function CarsGridData({ cars, loading }) {
  return loading ? <CarsSkeletonGrid /> : <CarsGridPagination cars={cars} />;
}
