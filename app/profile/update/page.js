import CenteredPage from "@/components/customUi/layoutSections/CenteredPage";
import UpdateUserForm from "@/components/forms/UpdateUserForm";
import PageTitle from "@/components/text/PageTitle";

const UpdateUser = () => {
  return (
    <CenteredPage>
      <section className="text-center mb-16">
        <PageTitle title="Update Details" />
      </section>
      <UpdateUserForm />
    </CenteredPage>
  );
};

export default UpdateUser;
