import arrow from "../../assets/icon-arrow.svg";

const CarouselItem = () => {
  return (
    <div className="flex flex-col xl:flex-row w-full" aria-hidden={false}>
      <picture className="w-full">
        <source
          srcSet="/images/desktop-image-hero-3.jpg"
          media="(min-width: 48em)"
        />
        <img
          height={320}
          width={375}
          className="object-cover object-top w-full h-80 md:h-100 xl:h-auto"
          src="/images/mobile-image-hero-3.jpg"
          alt=""
        />
      </picture>
      <div className="py-16 px-[2.03125rem] md:px-16 xl:px-25 xl:py-34.75 xl:min-w-150 xl:w-min">
        <h1 className="text-2 md:text-1 ">
          Manufactured with the best materials
        </h1>
        <p className="text-3-medium text-grey-500 mt-4">
          Our modern furniture store provide a high level of quality. Our
          company has invested in advanced technology to ensure that every
          product is made as perfect and as consistent as possible. With three
          decades of experience in this industry, we understand what customers
          want for their home and office.
        </p>
        <a
          href="#"
          className="flex items-center justify-between md:justify-self-start gap-6 xl:gap-8 mt-8 md:mt-6"
        >
          <span className="uppercase text-4">shop now</span>
          <img src={arrow} alt="" />
        </a>
      </div>
    </div>
  );
};

export default CarouselItem;
