import CenteredPage from "@/components/customUi/layoutSections/CenteredPage";
import Discussions from "@/components/displayData/Discussions";
import PageTitle from "@/components/text/PageTitle";

const DiscussionsPage = () => {
  return (
    <CenteredPage>
      <section className="text-center mb-16">
        <PageTitle title="Discussions" />
      </section>
      <Discussions />
    </CenteredPage>
  );
};

export default DiscussionsPage;
