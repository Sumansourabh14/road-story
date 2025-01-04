import CenteredPage from "@/components/customUi/layoutSections/CenteredPage";
import LoginForm from "@/components/forms/LoginForm";
import PageTitle from "@/components/text/PageTitle";
import RedirectWrapper from "@/components/utilities/RedirectWrapper";

const Login = () => {
  return (
    <RedirectWrapper>
      <CenteredPage>
        <section className="text-center">
          <PageTitle title={"Login"} />
        </section>
        <section className="my-12">
          <LoginForm />
        </section>
      </CenteredPage>
    </RedirectWrapper>
  );
};

export default Login;
