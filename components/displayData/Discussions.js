"use client";
import useFetchDiscussions from "@/hooks/useFetchDiscussions";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const Discussions = () => {
  const { discussions, loading } = useFetchDiscussions();

  if (loading) return <p className="text-center">Loading discussions...</p>;

  return (
    <div className="max-w-4xl mx-auto p-4 flex flex-col gap-8">
      {discussions.map((discussion) => (
        <Link key={discussion._id} href={`/discussions/${discussion._id}`}>
          <Card className="border shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                {discussion.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">
                {discussion.description || "No description provided."}
              </p>
              <div className="flex justify-between items-center text-sm">
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
