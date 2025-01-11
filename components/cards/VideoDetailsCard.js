import { getIncidentType } from "@/utils/functions/getIncidentType";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VideoDetailsCard = ({
  videoUrl,
  title,
  description,
  incidentType,
  location,
}) => {
  return (
    <div className="py-20 flex flex-col items-center justify-center p-6">
      {/* Card Container */}
      <div className="max-w-3xl w-full shadow-lg rounded-lg p-6">
        {/* Video Player */}
        <div className="aspect-video mb-6">
          <video
            src={videoUrl}
            controls
            className="w-full h-full rounded-md"
          ></video>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {/* Description */}
        {!!description && <p className="text-base mb-6">{description}</p>}

        {/* Incident Type */}
        <div className="mb-6">
          <ul className="flex flex-wrap gap-2">
            {incidentType.map((type, index) => (
              <li key={index} className="text-xs px-2 py-1 rounded-full">
                {getIncidentType(type)}
              </li>
            ))}
          </ul>
        </div>

        {/* Location */}
        {!!location && (
          <div className="flex gap-2 items-center">
            <div>
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <p className="text-sm">{location}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoDetailsCard;
