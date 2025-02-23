import { Card, CardContent } from "../ui/card";

const CarCard = ({ id, imgSrc, brand, model, price }) => {
  return (
    <Card key={id} className="rounded-xl shadow-md overflow-hidden">
      <img src={imgSrc} alt={model} className="w-full h-48 object-cover" />

      <CardContent className="p-4">
        <h3 className="text-lg font-medium">
          {brand} {model}
        </h3>
        <p className="text-gray-600">{price}</p>
      </CardContent>
    </Card>
  );
};

export default CarCard;
