import CenteredPage from "@/components/customUi/layoutSections/CenteredPage";
import DiscussionThreadForm from "@/components/forms/DiscussionThreadForm";
import PageTitle from "@/components/text/PageTitle";

const CreateDiscussionThread = () => {
  return (
    <CenteredPage>
      <section className="text-center mb-16">
        <PageTitle title="Create New Discussion" />
      </section>
      <DiscussionThreadForm />
    </CenteredPage>
  );
};

export default CreateDiscussionThread;
