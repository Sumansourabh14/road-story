import { WhatsappIcon, WhatsappShareButton } from "react-share";

const WhatsAppShare = ({ title, url }) => {
  return (
    <WhatsappShareButton title={title} url={url}>
      <WhatsappIcon size={28} round={false} />
    </WhatsappShareButton>
  );
};

export default WhatsAppShare;
