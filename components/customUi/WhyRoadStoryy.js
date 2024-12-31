import SectionTitle from "../text/SectionTitle";

const WhyRoadStoryy = () => {
  return (
    <section className="flex flex-col justify-center p-8 pb-20 sm:p-20 max-w-[1300px] mx-auto">
      <section className="text-left space-y-10">
        <div className="text-center">
          <SectionTitle title="Why Road Storyy?" />
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <p className="text-8xl lg:text-9xl font-bold text-red-600">80,000+</p>
          <div className="space-y-4">
            <p>
              people are killed in road crashes every year in India, which is{" "}
              <strong>13%</strong> of the total fatality all over the world.
            </p>
            <p>
              If we want India to be a super power,{" "}
              <strong>we need to change this.</strong>
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default WhyRoadStoryy;
