import { displayTimeAgo } from "@/utils/functions/displayTimeAgo";

const DisplayUsernamePublishedTime = ({ username, createdAt, updatedAt }) => {
  return (
    <div className="flex items-center justify-between flex-wrap">
      <p className="text-sm font-light mb-4">{username}</p>
      <p className="text-sm">{displayTimeAgo(createdAt, updatedAt)}</p>
    </div>
  );
};

export default DisplayUsernamePublishedTime;
