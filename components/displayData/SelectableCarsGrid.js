import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function SelectableCarsGrid({
  cars,
  selectedCar,
  setSelectedCar,
}) {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <label key={car._id} className="cursor-pointer">
            <input
              type="radio"
              name="selectedCar"
              value={car._id}
              checked={selectedCar === car._id}
              onChange={() => setSelectedCar(car._id)}
              className="hidden"
            />
            <Card
              className={`relative rounded-xl shadow-md overflow-hidden transition-all ${
                selectedCar === car._id
                  ? "border-4 border-orange-400"
                  : "border border-gray-300"
              }`}
            >
              {/* Always Visible Circle (Top-Left Inside Card) */}
              <div className="absolute top-4 left-4 w-6 h-6 flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center bg-white">
                  {selectedCar === car._id && (
                    <CheckCircle className="text-blue-500 text-lg" />
                  )}
                </div>
              </div>

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
          </label>
        ))}
      </div>
    </div>
  );
}
