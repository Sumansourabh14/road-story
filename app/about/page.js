import PageTitle from "@/components/text/PageTitle";
import { brandTitle } from "@/utils/content/generalSiteContent";

const About = () => {
  return (
    <div className="flex justify-center px-8 gap-16 py-16 sm:py-24 max-w-[1300px] mx-auto">
      <main className="flex flex-col gap-8 text-center">
        <PageTitle title={`About ${brandTitle}`} />
        <h2 className="text-xl sm:text-2xl">
          Follow traffic rules for your own <strong>safety</strong>. And not to
          <strong className="text-red-600"> escape from fines.</strong>
        </h2>
        <p className="text-lg">
          Road safety is a shared responsibility, and our mission is to create
          awareness, foster discussions, and encourage responsible driving
          habits across India. Whether you’re a daily commuter, a professional
          driver, or just someone who cares about safer roads, this platform is
          for you.
        </p>
        <div className="flex flex-col gap-4 text-left max-w-2xl mx-auto">
          <p>
            <strong>🚗 Upload Dashcam & CCTV Footage –</strong> Share videos of
            reckless driving, wrong-side movement, or any unusual incidents to
            highlight critical road issues.
          </p>
          <p>
            <strong>💬 Engage in Discussions –</strong> Join conversations on
            traffic rules, safety measures, and real-life road experiences.
          </p>
          <p>
            <strong>📍 Save & Track Your Trips –</strong> Keep a record of your
            travel routes and experiences for future reference.
          </p>
        </div>
        <p className="text-lg">
          Every video uploaded, every discussion started, and every trip logged
          contributes to making our roads safer for everyone. Let’s build a
          community that prioritizes road safety over shortcuts.
        </p>
      </main>
    </div>
  );
};

export default About;
