"use client";
import { getVideoById } from "@/services/globalApi";
import { brandTitle } from "@/utils/content/generalSiteContent";
import { getIncidentType } from "@/utils/functions/getIncidentType";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const SingleVideo = () => {
  const [data, setData] = useState("");
  const { id } = useParams();

  useEffect(() => {
    let mounted = true;

    async function fetchVideoDetails() {
      const res = await getVideoById(id);

      if (mounted) {
        setData(res.data.data);
      }
    }

    fetchVideoDetails();

    return () => {
      mounted = false;
    };
  }, [id]);

  useEffect(() => {
    if (!!data) {
      document.title = `${data.title} | ${brandTitle}`;
    }
  }, [data]);

  return (
    !!data && (
      <div className="py-20 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
        {/* Card Container */}
        <div className="max-w-3xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
          {/* Video Player */}
          <div className="aspect-video mb-6">
            <video
              src={data.videoUrl}
              controls
              className="w-full h-full rounded-md"
            ></video>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {data.title}
          </h1>

          {/* Description */}
          {!!data.description && (
            <p className="text-gray-700 dark:text-gray-300 text-base mb-6">
              {data.description}
            </p>
          )}

          {/* Incident Type */}
          <div className="mb-6">
            <ul className="flex flex-wrap gap-2">
              {data.incidentType.map((type, index) => (
                <li
                  key={index}
                  className="text-xs bg-zinc-200 px-2 py-1 rounded-full"
                >
                  {getIncidentType(type)}
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          {!!data.location && (
            <div className="flex gap-2 items-center">
              <div>
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {data.location}
              </p>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default SingleVideo;
