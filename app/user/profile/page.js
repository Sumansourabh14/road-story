"use client";

import UserDetailsCard from "@/components/cards/UserDetailsCard";
import CenteredPage from "@/components/customUi/layoutSections/CenteredPage";
import PageTitle from "@/components/text/PageTitle";
import Link from "next/link";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return (
      <CenteredPage>
        <section className="text-center mb-16">
          <PageTitle title="Please Login" />
          <p className="mt-12">Login to see your profile details</p>
          <div className="mt-12">
            <Link
              href={"/login"}
              className="px-20 py-4 bg-black text-white text-xl hover:bg-gray-700 rounded-lg font-bold"
            >
              Login
            </Link>
          </div>
        </section>
      </CenteredPage>
    );
  }

  return (
    <CenteredPage>
      <section className="mb-16">
        <div className="text-center">
          <PageTitle title="Profile" />
        </div>
        <UserDetailsCard user={user} />
        <div className="mt-12 text-center">
          <Link
            href={"/user/profile/update"}
            className="px-20 py-4 bg-black text-white text-xl hover:bg-gray-700 rounded-lg font-bold"
          >
            Edit Profile
          </Link>
        </div>
      </section>
    </CenteredPage>
  );
};

export default Profile;
