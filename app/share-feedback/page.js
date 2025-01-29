import CenteredPage from "@/components/customUi/layoutSections/CenteredPage";
import UserFeedbackForm from "@/components/forms/UserFeedbackForm";
import PageTitle from "@/components/text/PageTitle";

const ShareFeedback = () => {
  return (
    <CenteredPage>
      <section className="text-center mb-16">
        <PageTitle title="Got any feedback?" />
        <section className="py-4">
          <p>This will be shared anonymously.</p>
        </section>
      </section>
      <UserFeedbackForm />
    </CenteredPage>
  );
};

export default ShareFeedback;
