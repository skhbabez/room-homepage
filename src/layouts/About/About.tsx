const About = () => {
  return (
    <section className="xl:flex xl:max-h-66.5">
      <img
        className="w-full max-h-75"
        src="/images/image-about-dark.jpg"
        alt=""
      />
      <div className="py-12 px-8 md:p-16 xl:py-14.75 xl:px-12">
        <h2 className="text-5 uppercase md:text-3-bold">about our furniture</h2>
        <p className="text-3-medium text-grey-500 mt-4">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <img
        className="w-full max-h-75 xl:max-w-110"
        src="/images/image-about-light.jpg"
        alt=""
      />
    </section>
  );
};

export default About;
