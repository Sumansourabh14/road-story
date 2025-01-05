import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const DiscussionDetailsCard = ({ discussion }) => {
  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardHeader>
        <p>{discussion.author?.username}</p>
        <CardTitle className="text-2xl font-semibold text-gray-800 mt-4">
          {discussion.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!!discussion.description && (
          <p className="text-gray-700 mb-2">{discussion.description}</p>
        )}
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{discussion.likes} likes</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default DiscussionDetailsCard;
