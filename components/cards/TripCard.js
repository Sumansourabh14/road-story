import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

const TripCard = ({ trip }) => {
  return (
    <Card className="shadow-lg rounded-lg hover:shadow-xl transition duration-300 ease-in-out">
      <CardHeader className="p-4 rounded-t-lg">
        <h3 className="text-lg font-semibold">
          {trip.source} to {trip.destination}
        </h3>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-2">
          <p>
            <strong>Vehicle:</strong> {trip.vehicleData?.brand}{" "}
            {trip.vehicleData?.model}
          </p>
          <p>
            <strong>Total Km:</strong> {trip.totalKm} km
          </p>
          <p>
            <strong>One-way:</strong> {trip.isOneWay ? "Yes" : "No"}
          </p>
          <p>
            <strong>Food Stops:</strong> {trip.foodStops.length} stop(s)
          </p>
        </div>
      </CardContent>
      <CardFooter className="p-4">
        <Button variant="outline" className="w-full">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TripCard;
