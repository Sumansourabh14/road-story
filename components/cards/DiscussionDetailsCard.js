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
        <div className="flex justify-between items-center text-sm">
          <span>{discussion.likes} likes</span>
        </div>
        {isAuthorLoggedIn && <button onClick={deleteDiscussion}>Delete</button>}
      </CardContent>
    </Card>
  );
};

export default DiscussionDetailsCard;
