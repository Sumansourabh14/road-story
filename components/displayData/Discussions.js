"use client";
import useFetchDiscussions from "@/hooks/useFetchDiscussions";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const Discussions = () => {
  const { discussions, loading } = useFetchDiscussions();

  if (loading)
    return <p className="text-center text-gray-500">Loading discussions...</p>;
  //   if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      {discussions.map((discussion) => (
        <Link key={discussion._id} href={`/discussions/${discussion._id}`}>
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800">
                {discussion.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-2">
                {discussion.description || "No description provided."}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>By: {discussion.author.username}</span>
                <span>{discussion.likes} likes</span>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Discussions;
