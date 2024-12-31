import CenteredPage from "@/components/customUi/layoutSections/CenteredPage";
import PageTitle from "@/components/text/PageTitle";
import Link from "next/link";

const AccountCreated = () => {
  return (
    <CenteredPage>
      <section className="text-center flex flex-col gap-6 min-h-screen">
        <PageTitle title={"Hurray!"} />
        <p>
          Your account has been created successfully! Please log in to continue.
        </p>
        <Link href="/login" className="underline text-gray-600">
          Login
        </Link>
      </section>
    </CenteredPage>
  );
};

export default AccountCreated;
