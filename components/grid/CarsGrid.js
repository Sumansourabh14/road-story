import { Card, CardContent } from "../ui/card";

const CarsGrid = ({ cars }) => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <Card key={car._id} className="rounded-xl shadow-md overflow-hidden">
            <img
              src={car.img.url}
              alt={car.model}
              className="w-full h-48 object-cover"
            />

            <CardContent className="p-4">
              <h3 className="text-lg font-medium">
                {car.brand} {car.model}
              </h3>
              <p className="text-gray-600">{car.price.ex_showroom}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CarsGrid;
