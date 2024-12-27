import DoubleFlex from "./layoutSections/DoubleFlex";

const VideoInfoSection = ({
  videoUrl,
  title,
  description,
  isReverseDirection,
}) => {
  return (
    <DoubleFlex
      firstItem={
        <iframe
          width="100%"
          height="280"
          src={videoUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      }
      secondItem={
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl">{title}</h3>
          <p>{description}</p>
        </div>
      }
      isReverseDirection={isReverseDirection}
    />
  );
};

export default VideoInfoSection;
