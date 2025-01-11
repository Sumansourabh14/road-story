import { getIncidentType } from "@/utils/functions/getIncidentType";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const VideoSmallCard = ({
  id,
  videoUrl,
  title,
  description,
  incidentType,
  location,
}) => {
  return (
    <div key={id} className="space-y-4 border rounded-lg shadow-md p-4">
      {/* Video Player */}
      <div className="aspect-video mb-4">
        <video
          src={videoUrl}
          controls
          className="w-full h-full rounded-md"
        ></video>
      </div>

      <Link href={`/videos/${id}`} className="space-y-4">
        {/* Title */}
        <h3 className="text-lg font-semibold">{title}</h3>

        {/* Description */}
        {!!description && <p className="text-sm">{description}</p>}

        {/* Incident Type */}
        <div className="my-2">
          <ul className="flex flex-wrap gap-2 mt-1">
            {incidentType.map((type, i) => (
              <li key={i} className="text-xs px-2 py-1 rounded-full">
                {getIncidentType(type)}
              </li>
            ))}
          </ul>
        </div>

        {/* Location */}
        {!!location && (
          <p className="text-sm">
            <span className="font-medium mr-1">
              <FontAwesomeIcon icon={faLocationDot} />
            </span>{" "}
            {location}
          </p>
        )}
      </Link>
    </div>
  );
};

export default VideoSmallCard;
