import { Hero } from "@/components/customUi/Hero";
import UploadVideoCTA from "@/components/customUi/UploadVideoCTA";
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
      <section className="flex flex-col justify-center px-8 py-20 sm:py-28 max-w-[1300px] mx-auto">
        <div className="text-center">
          <SectionTitle title="Take a look at these videos..." />
        </div>
        <VideoInfoSection
          videoUrl="https://www.youtube.com/embed/Glq4K0FpP84?si=ML3vO-g3Uw-mQ2o8"
          title={"Do not overtake on curves"}
          description={
            "A small cargo truck driver tried to overtake a truck on a curve, resulting in hitting a bike."
          }
        />
        <VideoInfoSection
          videoUrl="https://www.youtube.com/embed/NSxvbn54xUI?si=b4FskEwJlblJeDrZ"
          title={"Always be alert on the road!"}
          description={
            "A car had to stop abruptly on the flyover due to a few parked cars ahead and a biker coming from behind hit it."
          }
          isReverseDirection={true}
        />
        <p className="text-xl md:text-3xl font-semibold text-center pt-8">
          Do not repeat these mistakes. Be responsible on the road.
        </p>
      </section>
      <hr />
      <UploadVideoCTA />
    </>
  );
}
