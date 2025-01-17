import { TwitterIcon, TwitterShareButton } from "react-share";

const TwitterShare = ({ title, url }) => {
  return (
    <TwitterShareButton title={title} url={url}>
      <TwitterIcon size={28} round={false} />
    </TwitterShareButton>
  );
};

export default TwitterShare;
