import LikeIcon from "../icons/LikeIcon";
import DeleteDiscussionPopup from "../popups/DeleteDiscussionPopup";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const DiscussionDetailsCard = ({
  discussion,
  isAuthorLoggedIn = false,
  deleteDiscussion,
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
          <div className="flex flex-row gap-2 items-center">
            <p className="text-sm">{discussion.likes}</p>
            <LikeIcon />
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
