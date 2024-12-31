import { Hero } from "@/components/customUi/Hero";
import VideoInfoSection from "@/components/customUi/VideoInfoSection";
import WhyRoadStoryy from "@/components/customUi/WhyRoadStoryy";
import SectionTitle from "@/components/text/SectionTitle";

export default function Home() {
  return (
    <>
      <Hero />
      <hr />
      <WhyRoadStoryy />
      <hr />
      <section className="flex flex-col justify-center p-8 pb-20 sm:p-20 max-w-[1300px] mx-auto">
        <div className="text-center">
          <SectionTitle title="Take a look at these videos..." />
        </div>
        <VideoInfoSection
          videoUrl="https://www.youtube.com/embed/ClPZINVp0y8?si=hMFnmYMZCjy8AfLd"
          title={"Video title"}
          description={
            "There were several people approaching from behind the vehicle instantly after the incident, driver fled due to risk of carjacking/suspecting a fraudulent claim at 3am in Browns Plains."
          }
        />
        <VideoInfoSection
          videoUrl="https://www.youtube.com/embed/Dy5HpijNuj4?si=4Iectpptw41Yd2f3"
          title={"Insurance Fraud / Carjacking attempt caught on dashcam"}
          description={
            "There were several people approaching from behind the vehicle instantly after the incident, driver fled due to risk of carjacking/suspecting a fraudulent claim at 3am in Browns Plains."
          }
          isReverseDirection={true}
        />
      </section>
    </>
  );
}
