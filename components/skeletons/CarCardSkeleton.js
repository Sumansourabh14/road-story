import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const CarCardSkeleton = () => {
  return (
    <Card className="rounded-xl shadow-md overflow-hidden">
      {/* Skeleton Image */}
      <Skeleton className="w-full h-48" />

      <CardContent className="p-4">
        {/* Skeleton Title */}
        <Skeleton className="h-5 w-3/4 mb-2" />
        {/* Skeleton Price */}
        <Skeleton className="h-4 w-1/2" />
      </CardContent>
    </Card>
  );
};

export default CarCardSkeleton;
