import { getIncidentType } from "@/utils/functions/getIncidentType";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const VideoDetailsGrid = ({ videos }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="space-y-4 border rounded-lg shadow-md p-4 bg-white dark:bg-gray-800"
          >
            {/* Video Player */}
            <div className="aspect-video mb-4">
              <video
                src={video.videoUrl}
                controls
                className="w-full h-full rounded-md"
              ></video>
            </div>

            <Link href={`/videos/${video._id}`} className="space-y-4">
              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {video.title}
              </h3>

              {/* Description */}
              {!!video.description && (
                <p className="text-sm text-gray-700 dark:text-gray-300 my-2">
                  {video.description}
                </p>
              )}

              {/* Incident Type */}
              <div className="my-2">
                <ul className="flex flex-wrap gap-2 mt-1">
                  {video.incidentType.map((type, i) => (
                    <li
                      key={i}
                      className="text-xs bg-zinc-200 px-2 py-1 rounded-full"
                    >
                      {getIncidentType(type)}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Location */}
              {!!video.location && (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium mr-1">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </span>{" "}
                  {video.location}
                </p>
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoDetailsGrid;
