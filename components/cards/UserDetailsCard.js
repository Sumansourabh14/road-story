"use client";

import useFetchCar from "@/hooks/useFetchCar";
import useFetchTripsBySelfUser from "@/hooks/useFetchTripsBySelfUser";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import TripCard from "./TripCard";

const UserDetailsCard = ({ user }) => {
  const { trips, tripsLoading } = useFetchTripsBySelfUser();
  const { car, carLoading } = useFetchCar(user.carOwned);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="shadow-lg border rounded-xl">
        <CardHeader className="flex items-center gap-4">
          {/* <Avatar>
            <AvatarImage src={`https://api.dicebear.com/7.x/identicon/svg?seed=${user.username}`} />
            <AvatarFallback>{user.username.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar> */}
          <div>
            <CardTitle>{user.name || ""}</CardTitle>
            <p className="text-sm text-gray-500">@{user.username}</p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            {carLoading ? (
              <p>Loading...</p>
            ) : (
              <p>
                <span className="font-semibold">Car Owned:</span>
                {car
                  ? `${car.brand} ${car.model} (${car.year})`
                  : "No car owned"}
              </p>
            )}
            <div>
              <p className="font-semibold">Trips:</p>
              {trips?.length > 0 ? (
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {trips.map((trip) => (
                    <TripCard trip={trip} key={trip._id} />
                  ))}
                </div>
              ) : (
                "No trips yet"
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDetailsCard;
