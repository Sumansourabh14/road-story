"use client";

import PageTitle from "@/components/text/PageTitle";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!!user) console.log({ user });
  }, [user]);

  return (
    <section className="py-8 px-8 max-w-[1300px] mx-auto">
      <PageTitle title={"Dashboard"} />
    </section>
  );
};

export default Dashboard;
