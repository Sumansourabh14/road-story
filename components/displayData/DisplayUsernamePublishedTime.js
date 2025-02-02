import useFetchCar from "@/hooks/useFetchCar";
import { displayTimeAgo } from "@/utils/functions/displayTimeAgo";

const DisplayUsernamePublishedTime = ({
  carOwned,
  username,
  createdAt,
  updatedAt,
}) => {
  const { car } = useFetchCar(carOwned);

  return (
    <div className="flex items-center justify-between flex-wrap">
      <div>
        <p className="text-sm font-light mb-1">{username}</p>
        {car && (
          <p className="text-xs font-light mb-4">
            {car?.brand + " " + car?.model}
          </p>
        )}
      </div>
      <p className="text-sm">{displayTimeAgo(createdAt, updatedAt)}</p>
    </div>
  );
};

export default DisplayUsernamePublishedTime;
