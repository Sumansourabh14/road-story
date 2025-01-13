"use client";
import DiscussionDetailsCard from "@/components/cards/DiscussionDetailsCard";
import CenteredPage from "@/components/customUi/layoutSections/CenteredPage";
import Comments from "@/components/displayData/Comments";
import CommentForm from "@/components/forms/CommentForm";
import { getDiscussionById } from "@/services/globalApi";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const SingleDiscussion = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    let mounted = true;

    async function fetchDiscussionDetails() {
      setLoading(true);
      const res = await getDiscussionById(id);

      if (mounted) {
        setData(res.data.data);
        setLoading(false);
      }
    }

    fetchDiscussionDetails();

    return () => {
      mounted = false;
    };
  }, [id]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <CenteredPage>
      <section className="space-y-4">
        <DiscussionDetailsCard discussion={data} />
        <CommentForm discussionId={id} />
        <hr />
        <Comments discussionId={id} />
      </section>
    </CenteredPage>
  );
};

export default SingleDiscussion;
