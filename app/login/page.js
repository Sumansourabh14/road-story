import CenteredPage from "@/components/customUi/layoutSections/CenteredPage";
import LoginForm from "@/components/forms/LoginForm";
import PageTitle from "@/components/text/PageTitle";

const Login = () => {
  return (
    <CenteredPage>
      <section className="text-center">
        <PageTitle title={"Login"} />
      </section>
      <section className="my-12">
        <LoginForm />
      </section>
    </CenteredPage>
  );
};

export default Login;
