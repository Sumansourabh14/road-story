import TwitterShare from "../buttons/shareButtons/TwitterShare";
import WhatsAppShare from "../buttons/shareButtons/WhatsAppShare";
import LikeIcon from "../icons/LikeIcon";
import DeleteDiscussionPopup from "../popups/DeleteDiscussionPopup";
import ShareDiscussionPopup from "../popups/ShareDiscussionPopup";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const DiscussionDetailsCard = ({
  discussion,
  isAuthorLoggedIn = false,
  deleteDiscussion,
  url,
}) => {
  return (
    <Card className="border shadow-sm">
      <CardHeader>
        <p>{discussion.author?.username}</p>
        <CardTitle className="text-2xl font-semibold mt-4">
          {discussion.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!!discussion.description && (
          <p className="mb-2">{discussion.description}</p>
        )}
        <div className="flex gap-4 justify-between items-center mt-4">
          <div className="flex gap-4 items-center">
            <div className="flex flex-row gap-2 items-center">
              <p className="text-sm">{discussion.likes}</p>
              <LikeIcon />
            </div>
            <ShareDiscussionPopup
              title="Share this discussion"
              buttonTitle="Share discussion"
            >
              <div className="flex flex-row justify-center items-center gap-4 w-full">
                <TwitterShare
                  title={discussion.title + "\n\n" + discussion.description}
                  url={!!url ? url : " "}
                />
                <WhatsAppShare
                  title={discussion.title + "\n\n" + discussion.description}
                  url={!!url ? url : " "}
                />
              </div>
            </ShareDiscussionPopup>
          </div>
          {isAuthorLoggedIn && (
            <div>
              <DeleteDiscussionPopup deleteDiscussion={deleteDiscussion} />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default DiscussionDetailsCard;
