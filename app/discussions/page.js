import CenteredPage from "@/components/customUi/layoutSections/CenteredPage";
import Discussions from "@/components/displayData/Discussions";
import PageTitle from "@/components/text/PageTitle";
import Link from "next/link";

const DiscussionsPage = () => {
  return (
    <CenteredPage>
      <section className="text-center mb-16">
        <PageTitle title="Discussions" />
        <div className="mt-8">
          <Link
            href={"/discussions/create"}
            className="px-20 py-4 bg-black text-white text-xl hover:bg-gray-700 rounded-lg font-bold"
          >
            Create Discussion
          </Link>
        </div>
      </section>
      <Discussions />
    </CenteredPage>
  );
};

export default DiscussionsPage;
