import CenteredPage from "@/components/customUi/layoutSections/CenteredPage";
import AddTripForm from "@/components/forms/AddTripForm";
import PageTitle from "@/components/text/PageTitle";

const CreateTrip = () => {
  return (
    <CenteredPage>
      <section className="text-center mb-16">
        <PageTitle title="Add New Trip" />
      </section>
      <AddTripForm />
    </CenteredPage>
  );
};

export default CreateTrip;
