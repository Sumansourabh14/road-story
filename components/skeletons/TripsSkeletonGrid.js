import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const TripsSkeletonGrid = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          Array(6)
            .fill(0)
            .map((_, index) => (
              <Card
                key={index}
                className="rounded-xl shadow-md overflow-hidden"
              >
                {/* Skeleton Image */}
                <Skeleton className="w-full h-16" />

                <CardContent className="p-4">
                  {/* Skeleton Title */}
                  <Skeleton className="h-5 w-3/4 mb-2" />
                  <Skeleton className="h-5 w-3/4 mb-2" />
                  <Skeleton className="h-5 w-3/4 mb-2" />
                  <Skeleton className="h-5 w-3/4 mb-2" />
                  <Skeleton className="h-5 w-3/4 mb-2" />
                  {/* Skeleton Price */}
                  <Skeleton className="h-4 w-1/2" />
                </CardContent>
              </Card>
            )) // Show skeletons when loading
        }
      </div>
    </div>
  );
};

export default TripsSkeletonGrid;
