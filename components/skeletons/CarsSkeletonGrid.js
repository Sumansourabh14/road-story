import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function CarsSkeletonGrid() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <Card key={index} className="rounded-xl shadow-md overflow-hidden">
              {/* Skeleton Image */}
              <Skeleton className="w-full h-48" />

              <CardContent className="p-4">
                {/* Skeleton Title */}
                <Skeleton className="h-5 w-3/4 mb-2" />
                {/* Skeleton Price */}
                <Skeleton className="h-4 w-1/2" />
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
}
