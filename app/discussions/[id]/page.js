"use client";
import DiscussionDetailsCard from "@/components/cards/DiscussionDetailsCard";
import CenteredPage from "@/components/customUi/layoutSections/CenteredPage";
import Comments from "@/components/displayData/Comments";
import CommentForm from "@/components/forms/CommentForm";
import { useToast } from "@/hooks/use-toast";
import {
  getDiscussionById,
  removeDiscussionThread,
} from "@/services/globalApi";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SingleDiscussion = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const { user, token } = useSelector((state) => state.auth);
  const { toast } = useToast();
  const router = useRouter();

  const deleteDiscussion = async (id, token) => {
    const res = await removeDiscussionThread(id, token);

    if (res.status === 200) {
      toast({
        title: "Discussion removed successfully",
        description: "You will be redirected to the discussions page",
      });
      router.push("/discussions");
    }
  };

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
        <DiscussionDetailsCard
          discussion={data}
          isAuthorLoggedIn={user?._id === data?.author?._id}
          deleteDiscussion={() => deleteDiscussion(id, token)}
        />
        <CommentForm discussionId={id} />
        <hr />
        <Comments discussionId={id} />
      </section>
    </CenteredPage>
  );
};

export default SingleDiscussion;
