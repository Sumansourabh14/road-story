"use client";
import useFetchDiscussions from "@/hooks/useFetchDiscussions";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import LikeIcon from "../icons/LikeIcon";
import CommentIcon from "../icons/CommentIcon";

const Discussions = () => {
  const { discussions, loading } = useFetchDiscussions();

  if (loading) return <p className="text-center">Loading discussions...</p>;
  if (discussions.length === 0)
    return <p className="text-center">No discussions.</p>;

  return (
    <div className="max-w-4xl mx-auto p-4 flex flex-col gap-8">
      {discussions.map((discussion) => (
        <Link key={discussion._id} href={`/discussions/${discussion._id}`}>
          <Card className="border shadow-sm">
            <CardHeader>
              <span className="text-sm">{discussion.author.username}</span>
              <CardTitle className="text-xl font-semibold">
                {discussion.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p
                className="mb-4 text-sm"
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "3", // how many lines we want to show
                  WebkitBoxOrient: "vertical",
                }}
              >
                {discussion.description || "No description provided."}
              </p>
              <div className="flex gap-4 text-sm font-light">
                <div className="flex flex-row gap-2 items-center">
                  <p>{discussion.likes}</p>
                  <LikeIcon />
                </div>

                <div className="flex flex-row gap-2 items-center">
                  <p>{discussion.comments.length}</p>
                  <CommentIcon />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Discussions;
