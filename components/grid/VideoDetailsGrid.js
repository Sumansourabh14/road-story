import VideoSmallCard from "../cards/VideoSmallCard";

const VideoDetailsGrid = ({ videos }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <VideoSmallCard
            key={video._id}
            videoUrl={video.videoUrl}
            title={video.title}
            description={video.description}
            incidentType={video.incidentType}
            location={video.location}
            id={video._id}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoDetailsGrid;
