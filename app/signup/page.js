import CenteredPage from "@/components/customUi/layoutSections/CenteredPage";
import SignUpForm from "@/components/forms/SignUpForm";
import PageTitle from "@/components/text/PageTitle";
import RedirectWrapper from "@/components/utilities/RedirectWrapper";

const Signup = () => {
  return (
    <RedirectWrapper>
      <CenteredPage>
        <section className="text-center">
          <PageTitle title={"Sign Up"} />
        </section>
        <section className="my-12">
          <SignUpForm />
        </section>
      </CenteredPage>
    </RedirectWrapper>
  );
};

export default Signup;
