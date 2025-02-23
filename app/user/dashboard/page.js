"use client";

import SingleCarCardData from "@/components/displayData/SingleCarCardData";
import PageTitle from "@/components/text/PageTitle";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  return (
    <section className="py-8 px-8 max-w-[1300px] mx-auto">
      <PageTitle title={"Dashboard"} />

      <section className="py-8">
        {!!user && (
          <section className="max-w-60">
            <SingleCarCardData carId={user.carOwned} />
          </section>
        )}
      </section>
    </section>
  );
};

export default Dashboard;
